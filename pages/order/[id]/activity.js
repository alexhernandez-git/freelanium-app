import Layout from "components/Layout/Layout";
import {
  OfferCancelled,
  OfferAccepted,
  Offer,
  RequestChangeDateDelivery,
  RequestChangeDateDeliveryAccepted,
  RequestChangeDateDeliveryCancelled,
  RequestCancelOrder,
  RequestCancelOrderAccepted,
  RequestCancelOrderCancelled,
  RequestIncreaseMoney,
  RequestIncreaseMoneyCancelled,
  RequestIncreaseMoneyAccepted,
} from "components/pages/order/Activity/ActivityElements";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";

const activity = () => {
  return (
    <Layout noPadding>
      <OrderLayout title="Activity">
        <div class="flow-root">
          <ul class="-mb-8">
            <Offer />
            <OfferAccepted />
            <OfferCancelled />
            <RequestChangeDateDelivery />
            <RequestChangeDateDeliveryAccepted />
            <RequestChangeDateDeliveryCancelled />
            <RequestCancelOrder />
            <RequestCancelOrderAccepted />
            <RequestCancelOrderCancelled />
            <RequestIncreaseMoney />
            <RequestIncreaseMoneyAccepted />
            <RequestIncreaseMoneyCancelled />
          </ul>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default activity;
