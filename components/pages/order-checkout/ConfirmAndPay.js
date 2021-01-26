import React from "react";

const ConfirmAndPay = ({ isAuthenticated }) => {
  return (
    <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
      <h2 id="timeline-title" className="text-lg font-bold text-gray-900">
        Summary
      </h2>

      <div className="mt-4 flow-root">
        <dl className="divide-y divide-gray-200">
          <div className="py-5 grid grid-cols-3 gap-4 pt-5">
            <dt className="text-sm font-medium text-gray-500  col-span-2">
              Subtotal
            </dt>
            <dd className="flex text-sm text-gray-900 mt-0">
              <span className="flex-grow">$34.25</span>
            </dd>
            <dt className="text-sm font-medium text-gray-500   col-span-2">
              Service fee
            </dt>
            <dd className="flex text-sm text-gray-900 mt-0">
              <span className="flex-grow">$3.43</span>
            </dd>
          </div>
          <div className="py-5 grid grid-cols-3 gap-4 border-b border-gray-200">
            <dt className="text-sm font-medium text-gray-500 col-span-2">
              Total
            </dt>
            <dd className="flex text-sm text-gray-900 mt-0">
              <span className="flex-grow font-bold">$37.68</span>
            </dd>
            <dt className="text-sm font-medium text-gray-500 col-span-2">
              Delivery time
            </dt>
            <dd className="flex text-sm text-gray-900 mt-0">
              <span className="flex-grow">2 Days</span>
            </dd>
          </div>
        </dl>
      </div>
      <div className="mt-6 flex flex-col justify-stretch">
        <button
          type="button"
          disabled={!isAuthenticated && true}
          className={`${
            !isAuthenticated && "opacity-25"
          } inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          Confirm and pay
        </button>
      </div>
    </div>
  );
};

export default ConfirmAndPay;
