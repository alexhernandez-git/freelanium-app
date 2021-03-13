import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import useOutsideClick from "hooks/useOutsideClick";
import {
  acceptCancelationRequest,
  cancelCancelationRequest,
} from "redux/actions/order";
import { InfoIcon, SuccessIcon, CancelIcon } from "./ActivityIcons";

const RequestCancelOrder = ({ ac, chat = false }) => {
  const dispatch = useDispatch();

  const { activity, type } = ac;

  const [data, setData] = useState({
    activityTitle: "",
    activityMessage: "",
    activityIcon: null,
    activityButton: null,
    opacity: false,
  });
  const authReducer = useSelector((state) => state.authReducer);
  const getCancelationIcon = () => {
    if (activity?.cancel_order?.order?.type === "RO") {
      if (activity?.cancel_order?.order?.seller?.id === authReducer.user?.id) {
        return InfoIcon();
      } else {
        return SuccessIcon();
      }
    } else {
      return SuccessIcon();
    }
  };
  const getCancelationMessage = () => {
    if (activity?.cancel_order?.order?.type === "RO") {
      if (activity?.cancel_order?.order?.seller?.id === authReducer.user?.id) {
        return `${activity?.cancel_order?.order?.buyer?.first_name} has unsubscribed the order`;
      } else {
        return `You cancel the subscription`;
      }
    } else {
      return `Order cancelation has been accepted`;
    }
  };
  useEffect(() => {
    const setActivityData = async () => {
      switch (activity?.status) {
        case "AC":
          await setData({
            activityIcon: getCancelationIcon(),
            activityTitle: "Order Cancelled",
            activityMessage: getCancelationMessage(),
            activityButton: (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="cursor-pointer mr-3 text-gray-500">
                    Cancel
                  </span>
                  <button
                    type="button"
                    disabled={true}
                    className={` inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white  opacity-75
              bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}
                  >
                    Accept
                  </button>
                </dd>
              </div>
            ),
            opacity: true,
          });
          break;
        case "CA":
          await setData({
            activityIcon: CancelIcon(),
            activityTitle: "Order Cancelation Cancelled",
            activityMessage: `The order cancelation has been revoked`,
            activityButton: (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="cursor-pointer mr-3 text-gray-500">
                    Cancel
                  </span>
                  <button
                    type="button"
                    disabled={true}
                    className={` inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white  opacity-70
              bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}
                  >
                    Accept
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
            activityTitle: "Cancelation Request",
            activityMessage: "Alex sent a cancelation request",
            activityButton: (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span
                    className="cursor-pointer mr-3 text-gray-500"
                    onClick={handleCancelCancelation}
                  >
                    Cancel
                  </span>
                  <button
                    onMouseDown={handleModalToggle}
                    type="button"
                    className={` inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}
                  >
                    Accept
                  </button>
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
  console.log(activity);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModalClose = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };
  const modalRef = useRef();
  useOutsideClick(modalRef, () => handleModalClose());
  const handleAcceptCancelation = () => {
    dispatch(
      acceptCancelationRequest(
        activity?.cancel_order?.order?.id,
        activity?.cancel_order?.id,
        handleModalClose
      )
    );
  };
  const handleCancelCancelation = () => {
    dispatch(
      cancelCancelationRequest(
        activity?.cancel_order?.order?.id,
        activity?.cancel_order?.id
      )
    );
  };
  return (
    <li>
      <div className={`relative pb-8 text-left ${chat && "overflow-auto"}`}>
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
                  {activity?.cancel_order?.order?.title}
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {activity?.cancel_order?.reason}
                    </dd>
                  </div>
                </dl>
              </div>
              {activity?.cancel_order?.issued_by?.id !== authReducer.user?.id &&
                data.activityButton}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            ref={modalRef}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Accept cancelation
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This user will be removed from your contacts list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleAcceptCancelation}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Accept
              </button>
              <button
                onClick={handleModalClose}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RequestCancelOrder;
