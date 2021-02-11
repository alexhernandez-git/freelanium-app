import Layout from "components/Layout/Dashboard/Layout";

import OrderLayout from "components/pages/dashboard/order/OrderLayout";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import React from "react";

const activity = () => {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <Layout noPadding>
      <OrderLayout title="Activity">
        <div class="flow-root">
          <ul class="-mb-8">
            {/* <Offer />
            <RequestChangeDateDelivery />
            <RequestChangeDateDeliveryAccepted />
            <RequestChangeDateDeliveryCancelled />
            <RequestCancelOrder />
            <RequestCancelOrderAccepted />
            <RequestCancelOrderCancelled />
            <RequestIncreaseMoney />
            <RequestIncreaseMoneyAccepted />
            <RequestIncreaseMoneyCancelled />
            <OfferDelivered />
            <OfferDeliveredAccepted />
            <OfferDeliveredCancelled />
            <RequestDeliveryRevision /> */}
          </ul>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default activity;
