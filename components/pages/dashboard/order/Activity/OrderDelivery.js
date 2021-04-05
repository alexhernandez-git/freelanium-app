import { PrimaryButton } from "components/ui/Buttons";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import useOutsideClick from "hooks/useOutsideClick";
import { acceptDelviery } from "redux/actions/order";
import RequestRevisionModal from "../RequestRevisionModal";
import { InfoIcon, SuccessIcon, CancelIcon } from "./ActivityIcons";
import AcceptTwoPaymentsOrderModal from "../AcceptTwoPaymentsOrderModal";
const OrderDelivery = ({ ac, chat = false }) => {
  const { activity, type } = ac;
  const [status, setStatus] = useState("ACCEPTED");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    activityTitle: "",
    activityMessage: "",
    activityIcon: null,
    activityButton: null,
    opacity: false,
  });
  const authReducer = useSelector((state) => state.authReducer);

  useEffect(() => {
    const setActivityData = async () => {
      switch (activity?.status) {
        case "AC":
          await setData({
            activityIcon: SuccessIcon(),
            activityTitle: "Delivery Accepted",
            activityMessage: `${activity?.delivery?.order?.buyer?.first_name} has accepted the delivery`,
            activityButton: (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <button
                    type="button"
                    disabled={true}
                    className={`inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none cursor-default opacity-75`}
                  >
                    Accepted
                  </button>
                </dd>
              </div>
            ),
            opacity: true,
          });
          break;
        default:
          await setData({
            activityIcon: InfoIcon(),
            activityTitle: "Order delivery",
            activityMessage: `${activity?.delivery?.order?.seller?.first_name} delivered the order`,
            activityButton: (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span
                    className="mr-3 text-gray-500 cursor-pointer"
                    onClick={handleRequestRevisionToggle}
                  >
                    Request revision
                  </span>
                  <PrimaryButton onClick={handleAcceptDelivery}>
                    Accept
                  </PrimaryButton>
                </dd>
              </div>
            ),
            opacity: false,
          });
          break;
      }
    };
    if (activity?.status) {
      setActivityData();
    }
  }, [type]);
  const requestRevisionRef = useRef();
  const [openRequestRevision, setOpenRequestRevision] = useState(false);
  const handleRequestRevisionToggle = () => {
    setOpenRequestRevision(!openRequestRevision);
  };
  const handleCloseRequestRevision = () => {
    if (openRequestRevision) {
      setOpenRequestRevision(false);
    }
  };
  useOutsideClick(requestRevisionRef, () => handleCloseRequestRevision());
  // Accept two payments order modal
  const acceptTwoPaymentsOrderRef = useRef();
  const [openAcceptTwoPaymentsOrder, setOpenAcceptTwoPaymentsOrder] = useState(
    false
  );
  const handleAcceptTwoPaymentsOrderToggle = () => {
    setOpenAcceptTwoPaymentsOrder(!openAcceptTwoPaymentsOrder);
  };
  const handleCloseAcceptTwoPaymentsOrder = () => {
    if (openAcceptTwoPaymentsOrder) {
      setOpenAcceptTwoPaymentsOrder(false);
    }
  };
  useOutsideClick(acceptTwoPaymentsOrderRef, () =>
    handleCloseAcceptTwoPaymentsOrder()
  );
  const handleAcceptDelivery = () => {
    if (
      activity?.delivery?.order?.type === "OP" ||
      activity?.delivery?.order?.type === "HO"
    ) {
      dispatch(
        acceptDelviery(activity?.delivery?.order?.id, activity?.delivery?.id)
      );
    } else if (activity?.delivery?.order?.type === "TP") {
      handleAcceptTwoPaymentsOrderToggle();
    }
  };
  return (
    <li>
      <div className="relative pb-8">
        {!chat && (
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        )}
        <div className="relative flex items-start space-x-3">
          {!chat && (
            <div>
              <div className="relative px-1">
                <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                  {data.activityIcon}
                </div>
              </div>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                {chat ? (
                  <div className="sm:flex items-center">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          {data.activityIcon}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:ml-2">
                      <span href="#" className="font-medium text-gray-900">
                        {data.activityTitle}
                      </span>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.activityMessage}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <span href="#" className="font-medium text-gray-900">
                      {data.activityTitle}
                    </span>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {data.activityMessage}
                    </p>
                  </>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {moment(ac?.created).fromNow()}
              </p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {activity?.delivery?.order?.title}
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {activity?.delivery?.order?.seller?.first_name}{" "}
                      {activity?.delivery?.order?.seller?.last_name}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Delivery message
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {activity?.delivery?.response}
                    </dd>
                  </div>
                  {/* <div className="sm:col-span-2">
                    <div className="flex">
                      <svg
                        className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeWidth="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeWidth="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeWidth="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                    </div>
                  </div> */}
                  {activity?.delivery?.source_file && (
                    <>
                      {activity?.status === "AC" ? (
                        <>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Include Source Files
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900">
                              {console.log(activity?.delivery?.source_file)}
                              <a
                                target="_blank"
                                href={
                                  new RegExp(
                                    `${process.env.HOST}|https://freelanium.s3.amazonaws.com`
                                  ).test(activity?.delivery?.source_file)
                                    ? activity?.delivery?.source_file
                                    : process.env.HOST +
                                      activity?.delivery?.source_file
                                }
                              >
                                <div className="border-2 border-green-500 text-green-500 p-4 w-52 text-center rounded">
                                  Source Files
                                </div>
                              </a>
                              <span className="mt-2 text-gray-500">
                                Files available{" "}
                                <a
                                  target="_blank"
                                  href={
                                    new RegExp(
                                      `${process.env.HOST}|https://freelanium.s3.amazonaws.com`
                                    ).test(activity?.delivery?.source_file)
                                      ? activity?.delivery?.source_file
                                      : process.env.HOST +
                                        activity?.delivery?.source_file
                                  }
                                  className="underline text-green-500"
                                >
                                  Download
                                </a>
                              </span>
                            </dd>
                          </div>
                        </>
                      ) : (
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Include Source Files
                          </dt>
                          <dd className="mt-2 text-sm text-gray-900">
                            <div className="border-2 border-gray-500 p-4 w-52 text-center rounded opacity-25">
                              Source Files
                            </div>
                            <span className="mt-2 text-gray-500">
                              The source files will be available when you accept
                              the delivery
                            </span>
                          </dd>
                        </div>
                      )}
                    </>
                  )}
                  {activity?.delivery?.order?.buyer?.id ===
                    authReducer.user?.id && data.activityButton}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequestRevisionModal
        requestRevisionRef={requestRevisionRef}
        openRequestRevision={openRequestRevision}
        handleCloseRequestRevision={handleCloseRequestRevision}
        orderId={activity?.delivery?.order?.id}
      />
      <AcceptTwoPaymentsOrderModal
        acceptTwoPaymentsOrderRef={acceptTwoPaymentsOrderRef}
        openAcceptTwoPaymentsOrder={openAcceptTwoPaymentsOrder}
        handleCloseAcceptTwoPaymentsOrder={handleCloseAcceptTwoPaymentsOrder}
        order={activity?.delivery?.order}
        delivery_id={activity?.delivery?.id}
      />
    </li>
  );
};
export default OrderDelivery;
