import Layout from "components/Layout/Layout";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";

const details = () => {
  return (
    <Layout noPadding>
      <OrderLayout title="Details">
        <div class="divide-y divide-gray-200">
          <div class="mt-6">
            <dl class="divide-y divide-gray-200">
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="text-sm font-medium text-gray-500">Order Name</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">Chelsea Hagon</span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">Description</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">
                    fewaaweafwawefweffawefwaeefafefwefawewafewfawefafwefw
                  </span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">Total</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">$50</span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">Status</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">Active</span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">Delivery Date</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">24th December 2021</span>
                  <span class="flex-grow text-gray-500">23 days left</span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">Buyer</dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow flex items-center">
                    <img
                      class="h-8 w-8 rounded-full mr-2"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    Ivan Hermas
                  </span>
                  <div className="flex-grow cursor-pointer flex items-center">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="truncate text-gray-500">Send message</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default details;
