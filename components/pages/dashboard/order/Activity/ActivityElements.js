import { PrimaryButton } from "components/ui/Buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
// Alert icon

//   <svg
//     className="h-5 w-5 text-gray-500"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>;

const InfoIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const CancelIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const SuccessIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const Offer = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Offer
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you an offer.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-2xl font-medium text-gray-900">
                      Añadir funcionalidad de stripe a tu web
                    </h3>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl">$300</span>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Margot Foster
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end">
                        <PrimaryButton>Continue</PrimaryButton>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const OfferActivity = ({ ac, chat = false }) => {
  const { activity, type } = ac;
  const [status, setStatus] = useState("ACCEPTED");
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
      switch (activity.status) {
        case "AC":
          await setData({
            activityIcon: SuccessIcon(),
            activityTitle: "Offer Accepted",
            activityMessage: `${activity?.offer?.buyer?.first_name} has accepted the offer.`,
            activityButton: <PrimaryButton disabled>Accepted</PrimaryButton>,
            opacity: true,
          });
          break;
        default:
          await setData({
            activityIcon: InfoIcon(),
            activityTitle: "Offer",
            activityMessage: "Alex sent you an offer",
            activityButton: (
              <a
                target="_blank"
                href={`/order-checkout/${activity?.offer?.id}`}
              >
                <PrimaryButton>Continue</PrimaryButton>
              </a>
            ),
            opacity: false,
          });
          break;
      }
    };
    if (status) {
      setActivityData();
    }
  }, [type]);
  const [offerType, setOfferType] = useState("");
  useEffect(() => {
    if (activity?.offer?.type) {
      switch (activity?.offer?.type) {
        case "NO":
          setOfferType("Normal order");
          break;
        case "TP":
          setOfferType("Two payments order");
          break;
        case "RO":
          setOfferType("Recurrent order");

          break;
      }
    }
  }, [activity?.offer?.type]);
  const [intervalSubscription, setIntervalSubscription] = useState("");
  useEffect(() => {
    if (activity?.offer?.interval_subscription) {
      switch (activity?.offer?.interval_subscription) {
        case "MO":
          setIntervalSubscription("Month subscription");
          break;
        case "AN":
          setIntervalSubscription("Anual subscription");
          break;
      }
    }
  }, [activity?.offer?.interval_subscription]);
  const [offer, setOffer] = useState(activity?.offer);
  useEffect(() => {
    if (activity?.offer) {
      axios
        .get(
          `https://api.exchangeratesapi.io/${
            offer.rate_date ? offer.rate_date : "latest"
          }?base=USD`
        )
        .then((res) => {
          const currencyRate = res.data.rates[authReducer.currency];
          const first_payment = activity?.offer.first_payment * currencyRate;
          const subtotal = activity?.offer.subtotal * currencyRate;
          const unit_amount = activity?.offer.unit_amount * currencyRate;
          const payment_at_delivery =
            activity?.offer.payment_at_delivery * currencyRate;
          setOffer({
            ...activity?.offer,
            first_payment: first_payment.toFixed(2),
            subtotal: subtotal.toFixed(2),
            unit_amount: unit_amount.toFixed(2),
            payment_at_delivery: payment_at_delivery.toFixed(2),
          });
        })
        .catch((err) => setOffer(activity?.offer));
    }
  }, [activity?.offer]);
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
            <div
              className={`mt-2 text-sm text-gray-700 ${
                data.opacity && "opacity-75"
              }`}
            >
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="px-4 py-5 sm:px-6 truncate">
                    <h3 className="text-xl font-medium text-gray-900 truncate">
                      {offer?.title}
                    </h3>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl">
                      {getSymbolFromCurrency(authReducer.currency)}
                      {offer?.unit_amount}
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                        {offer?.seller?.first_name} {offer?.seller?.last_name}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Title
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                        {offer?.title}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                        {offer?.description}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Offer Type
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                        {offerType}
                      </dd>
                    </div>
                    {offer?.type === "TP" && (
                      <>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            First payment
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {offer.first_payment}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Payment at delivery
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {offer.payment_at_delivery}
                          </dd>
                        </div>
                      </>
                    )}
                    {offer?.type === "RO" ? (
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Interval subscription
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                          {intervalSubscription}
                        </dd>
                      </div>
                    ) : (
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Days for delivery
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-all whitespace-pre-line">
                          {offer?.delivery_time} days
                        </dd>
                      </div>
                    )}
                    {offer?.buyer?.id === authReducer.user?.id && (
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500"></dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end">
                          {data.activityButton}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestChangeDateDelivery = () => {
  return (
    <li>
      <div className="relative pb-8 ">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request change the delivery date
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to change the delivery date.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex has requested a extend delivery date on{" "}
                  <span className="font-bold">25th December 2021</span>
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancel</span>
                  <PrimaryButton>Accept</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestChangeDateDeliveryAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Change the delivery date accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to change the delivery date.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex has requested a extend delivery date on{" "}
                  <span className="font-bold">25th December 2021</span>
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestCancelOrder = ({ ac, chat = false }) => {
  const { activity, type } = ac;
  const [status, setStatus] = useState("ACCEPTED");
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
      switch (activity.status) {
        case "AC":
          await setData({
            activityIcon: SuccessIcon(),
            activityTitle: "Order Cancelled",
            activityMessage: `${activity?.offer?.buyer?.first_name} has accepted the cancelation.`,
            activityButton: <PrimaryButton disabled>Accepted</PrimaryButton>,
            opacity: true,
          });
          break;
        default:
          await setData({
            activityIcon: InfoIcon(),
            activityTitle: "Cancelation Request",
            activityMessage: "Alex sent a cancelation request",
            activityButton: (
              <a
                target="_blank"
                href={`/order-checkout/${activity?.offer?.id}`}
              >
                <PrimaryButton>Continue</PrimaryButton>
              </a>
            ),
            opacity: false,
          });
          break;
      }
    };
    if (status) {
      setActivityData();
    }
  }, [type]);
  console.log(activity);
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
              {activity?.cancel_order?.issued_by?.id !==
                authReducer.user?.id && (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                    <span className="cursor-pointer mr-3 text-gray-500">
                      Cancel
                    </span>
                    <PrimaryButton>Accept</PrimaryButton>
                  </dd>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestCancelOrderAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Cancel order accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to cancel the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex has requested a order cancelation
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestCancelOrderDeclined = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Cancel order failed
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to cancel the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex has requested a order cancelation
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Not accepted</span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestIncreaseMoney = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request increase money to the order
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to increase money to the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex sent you a request to increase{" "}
                  <span className="font-bold">$500</span> to the order.
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancel</span>
                  <PrimaryButton>Continue</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestIncreaseMoneyAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request increase money to the order accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Maria accepted the request to increase money to the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg opacity-75">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex sent you a request to increase{" "}
                  <span className="font-bold">$500</span> to the order.
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Reason
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const OrderDelivered = ({ ac, chat = false }) => {
  const { activity, type } = ac;
  const [status, setStatus] = useState("ACCEPTED");
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
      switch (activity.status) {
        case "AC":
          await setData({
            activityIcon: SuccessIcon(),
            activityTitle: "Offer Accepted",
            activityMessage: `${activity?.delivery?.order?.buyer?.first_name} has accepted the offer.`,
            activityButton: <PrimaryButton disabled>Accepted</PrimaryButton>,
            opacity: true,
          });
          break;
        default:
          await setData({
            activityIcon: InfoIcon(),
            activityTitle: "Order delivery",
            activityMessage: `${activity?.delivery?.order?.seller?.first_name} delivered the order`,
            activityButton: (
              <a
                target="_blank"
                href={`/order-checkout/${activity?.offer?.id}`}
              >
                <PrimaryButton>Accept</PrimaryButton>
              </a>
            ),
            opacity: false,
          });
          break;
      }
    };
    if (status) {
      setActivityData();
    }
  }, [type]);
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
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        Include Source Files
                      </dt>
                      <dd className="mt-2 text-sm text-gray-900">
                        <div className="border-2 border-gray-500 p-4 w-52 text-center rounded opacity-25">
                          Source Files
                        </div>
                        <span className="mt-2 text-gray-500">
                          The source files will be available when you accept the
                          delivery
                        </span>
                      </dd>
                    </div>
                  )}
                  {activity?.delivery?.order?.buyer?.id ===
                    authReducer.user?.id && (
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                        <span className="mr-3 text-gray-500 cursor-pointer">
                          Request revision
                        </span>
                        <PrimaryButton>Accept</PrimaryButton>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const OrderDeliveredAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery Success
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Mark accepted the delivery.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Añadir funcionalidad de stripe a tu web
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Margot Foster
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Delivery message
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
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
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Include Source Files
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900">
                      <div className="border-2 border-green-500 text-green-500 p-4 w-52 text-center rounded cursor-pointer">
                        Source Files
                      </div>
                      <span className="mt-2 text-gray-500">
                        Source files available
                      </span>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <PrimaryButton disabled>Accepted</PrimaryButton>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const RequestDeliveryRevision = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery revision
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex requested a delivery revision.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex requested a delivery revision
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Delivery revision message
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>

                  {/* <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <span className="mr-3 text-gray-500">
                        Request revision
                      </span>
                      <PrimaryButton>Accept</PrimaryButton>
                    </dd>
                  </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
