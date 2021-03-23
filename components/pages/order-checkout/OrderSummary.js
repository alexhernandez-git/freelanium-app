import Spinner from "components/ui/Spinner";
import getSymbolFromCurrency from "currency-symbol-map";
import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = ({
  hanldeGoToStepTwo,
  step,
  isAuthenticated,
  offer,
  formik,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const offersReducer = useSelector((state) => state.offersReducer);

  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 relative">
      {offersReducer.accepting_offer && (
        <div className="absolute right-4 flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <h2 id="timeline-title" className="text-lg font-bold text-gray-900">
        Summary
      </h2>

      <div className="mt-4 flow-root">
        <dl className="divide-y divide-gray-200">
          <div className="py-5 grid grid-cols-3 gap-4 pt-5">
            {offer?.type === "TP" ? (
              <>
                <dt className="text-sm font-medium text-gray-500  col-span-2">
                  Subtotal first payment
                </dt>
                <dd className="flex text-sm text-gray-500 mt-0">
                  <span className="flex-grow">
                    {getSymbolFromCurrency(authReducer.currency)}
                    {offer.first_payment}
                  </span>
                </dd>
              </>
            ) : (
              <>
                <dt className="text-sm font-medium text-gray-500  col-span-2">
                  Subtotal
                </dt>
                <dd className="flex text-sm text-gray-500 mt-0">
                  <span className="flex-grow">
                    {getSymbolFromCurrency(authReducer.currency)}
                    {offer.subtotal}
                  </span>
                </dd>
              </>
            )}
            <dt className="text-sm font-medium text-gray-500   col-span-2">
              Service fee
            </dt>
            <dd className="flex text-sm text-gray-500 mt-0">
              <span className="flex-grow">
                {getSymbolFromCurrency(authReducer.currency)}
                {offer.service_fee}
              </span>
            </dd>
            {offer.used_credits > 0 && (
              <>
                <dt className="text-sm font-bold text-gray-900 col-span-2">
                  Used credits
                </dt>
                <dd className="flex text-sm text-gray-900 mt-0">
                  <span className="flex-grow font-bold">
                    -{getSymbolFromCurrency(authReducer.currency)}
                    {offer.used_credits}
                  </span>
                </dd>
              </>
            )}
          </div>
          <div className="py-5 grid grid-cols-3 gap-4 border-b border-gray-200">
            <dt className="text-sm font-bold text-gray-900 col-span-2">
              Total
            </dt>
            <dd className="flex text-sm text-gray-900 mt-0">
              <span className="flex-grow font-bold">
                {getSymbolFromCurrency(authReducer.currency)}
                {(offer?.unit_amount - offer?.used_credits).toFixed(2)}
                {offer?.type === "RO" && (
                  <span className="font-normal">
                    {offer.interval_subscription === "AN" ? "/year" : "/month"}
                  </span>
                )}
              </span>
            </dd>
            {(offer?.type === "NO" || offer?.type === "TP") && (
              <>
                <dt className="text-sm font-medium text-gray-500 col-span-2">
                  Delivery time
                </dt>
                <dd className="flex text-sm text-gray-900 mt-0">
                  <span className="flex-grow">{offer?.delivery_time} days</span>
                </dd>
                {offer?.type === "TP" && (
                  <>
                    <dt className="text-sm font-medium text-gray-500 col-span-2">
                      Payment at delivery
                    </dt>
                    <dd className="flex text-sm text-gray-900 mt-0">
                      <span className="flex-grow">
                        {getSymbolFromCurrency(authReducer.currency)}
                        {offer?.payment_at_delivery}
                      </span>
                    </dd>
                  </>
                )}
              </>
            )}
          </div>
        </dl>
      </div>
      {step == 0 && (
        <div className="mt-6 flex flex-col justify-stretch">
          <button
            onClick={hanldeGoToStepTwo}
            type="button"
            className="inline-flex w-full items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Continue
          </button>
        </div>
      )}
      {step == 1 && (
        <button
          type="button"
          disabled={!isAuthenticated && true}
          onClick={formik.handleSubmit}
          className={`${
            !isAuthenticated && "opacity-25"
          } inline-flex w-full items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}
        >
          {(offer?.type === "NO" || offer?.type === "TP") && (
            <span className="flex items-center">
              Confirm and pay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 ml-2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </span>
          )}
          {offer?.type === "RO" && "Confirm and subscribe"}
        </button>
      )}
      {step == 0 && (
        <div className="mt-4 flex justify-center">
          <span className="text-sm text-gray-500">
            You won't be charged yet
          </span>
        </div>
      )}
      {step == 1 && offer?.type === "RO" && offer?.used_credits > 0 && (
        <div className="mt-4 flex justify-center">
          <span className="text-sm text-gray-500">
            Credits only will be applied on this subscription cycle
          </span>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
