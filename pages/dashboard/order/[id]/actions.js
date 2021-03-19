import Layout from "components/Layout/Dashboard/Layout";
import OrderLayout from "components/pages/dashboard/order/OrderLayout";
import { SecondaryButton } from "components/ui/Buttons";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import React from "react";

const actions = () => {
  const [cantRender, authReducer] = useAuthRequired();
  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <Layout noPadding>
      <OrderLayout title="Actions">
        <div className="divide-y divide-gray-200">
          <div className="mt-6">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Request extend delivery time
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">
                    <SecondaryButton>Extend Delivery Time</SecondaryButton>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt className="text-sm font-medium text-gray-500">
                  Request a extra payment
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">
                    <SecondaryButton>Request a extra payment</SecondaryButton>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                <dt className="text-sm font-medium text-gray-500">
                  Cancel the order
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">
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
