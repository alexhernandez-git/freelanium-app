import React from "react";

const OrderSummary = ({ hanldeGoToStepTwo, step, isAuthenticated }) => {
  return (
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
      <h2 id="timeline-title" class="text-lg font-bold text-gray-900">
        Summary
      </h2>

      <div class="mt-4 flow-root">
        <dl class="divide-y divide-gray-200">
          <div class="py-5 grid grid-cols-3 gap-4 pt-5">
            <dt class="text-sm font-medium text-gray-500  col-span-2">
              Subtotal
            </dt>
            <dd class="flex text-sm text-gray-900 mt-0">
              <span class="flex-grow">$34.25</span>
            </dd>
            <dt class="text-sm font-medium text-gray-500   col-span-2">
              Service fee
            </dt>
            <dd class="flex text-sm text-gray-900 mt-0">
              <span class="flex-grow">$3.43</span>
            </dd>
          </div>
          <div class="py-5 grid grid-cols-3 gap-4 border-b border-gray-200">
            <dt class="text-sm font-bold text-gray-900 col-span-2">Total</dt>
            <dd class="flex text-sm text-gray-900 mt-0">
              <span class="flex-grow font-bold">$37.68</span>
            </dd>
            <dt class="text-sm font-medium text-gray-500 col-span-2">
              Delivery time
            </dt>
            <dd class="flex text-sm text-gray-900 mt-0">
              <span class="flex-grow">2 Days</span>
            </dd>
            <dt class="text-sm font-medium text-gray-500 col-span-2">
              Payment at delivery time
            </dt>
            <dd class="flex text-sm text-gray-900 mt-0">
              <span class="flex-grow">$40.68</span>
            </dd>
          </div>
        </dl>
      </div>
      {step == 0 && (
        <div class="mt-6 flex flex-col justify-stretch">
          <button
            onClick={hanldeGoToStepTwo}
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue
          </button>
        </div>
      )}
      {step == 1 && (
        <button
          type="button"
          disabled={!isAuthenticated && true}
          className={`${
            !isAuthenticated && "opacity-25"
          } inline-flex w-full items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          Confirm and pay
        </button>
      )}
      <div className="mt-4 flex justify-center">
        <span className="text-sm text-gray-500">You won't be charged yet</span>
      </div>
    </div>
  );
};

export default OrderSummary;
