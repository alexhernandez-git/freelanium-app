import Layout from "components/Layout/Dashboard/Layout";
import OrderLayout from "components/pages/dashboard/order/OrderLayout";
import { SecondaryButton } from "components/ui/Buttons";
import React from "react";

const actions = () => {
  return (
    <Layout noPadding>
      <OrderLayout title="Actions">
        <div class="divide-y divide-gray-200">
          <div class="mt-6">
            <dl class="divide-y divide-gray-200">
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="text-sm font-medium text-gray-500">
                  Request extend delivery time
                </dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">
                    <SecondaryButton>Extend Delivery Time</SecondaryButton>
                  </span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">
                  Request a extra payment
                </dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">
                    <SecondaryButton>Request a extra payment</SecondaryButton>
                  </span>
                </dd>
              </div>
              <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt class="text-sm font-medium text-gray-500">
                  Cancel the order
                </dt>
                <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span class="flex-grow">
                    <SecondaryButton>Request Cancelation</SecondaryButton>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default actions;
