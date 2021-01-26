import Header from "components/pages/order-checkout/Header";
import { useRouter } from "next/router";
import React from "react";

const OrderCheckout = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      {/* Header */}
      <Header />
      {/* body */}
      <div>
        {/* Product description */}
        <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div class="space-y-6 lg:col-start-1 lg:col-span-2 p-3 md:p-0">
            <h1 class="text-2xl font-bold text-gray-900">
              ARIA attribute misspelled
            </h1>
            <div className="md:flex justify-between">
              <div>
                <p class="mt text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  placeat aspernatur, tenetur ad non, ullam amet quo quos porro
                  magnam dolor commodi ratione facere odit impedit tempora?
                  Sequi, expedita autem?
                </p>
              </div>
              <p className="hidden md:block pl-20 pr-5 font-bold">$34.25</p>
            </div>
          </div>
          <section
            aria-labelledby="timeline-title"
            class="lg:col-start-3 lg:col-span-1"
          >
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
                    <dt class="text-sm font-medium text-gray-500 col-span-2">
                      Total
                    </dt>
                    <dd class="flex text-sm text-gray-900 mt-0">
                      <span class="flex-grow font-bold">$37.68</span>
                    </dd>
                    <dt class="text-sm font-medium text-gray-500 col-span-2">
                      Delivery time
                    </dt>
                    <dd class="flex text-sm text-gray-900 mt-0">
                      <span class="flex-grow">2 Days</span>
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="mt-6 flex flex-col justify-stretch">
                <button
                  type="button"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
              <div className="mt-4 flex justify-center">
                <span className="text-sm text-gray-500">
                  You won't be charged yet
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* Price card */}
        <div></div>
      </div>
    </div>
  );
};

export default OrderCheckout;
