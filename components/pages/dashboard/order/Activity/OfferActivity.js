import { PrimaryButton } from "components/ui/Buttons";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import { InfoIcon, SuccessIcon } from "./ActivityIcons";

const OfferActivity = ({ ac, chat = false }) => {
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
      switch (activity?.status) {
        case "AC":
          await setData({
            activityIcon: SuccessIcon(),
            activityTitle: "Offer Accepted",
            activityMessage: `${activity?.offer?.buyer?.first_name} has accepted the offer`,
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

export default OfferActivity;
