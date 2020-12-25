import Layout from "components/Layout/Dashboard/Layout";
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
  OfferDelivered,
  OfferDeliveredAccepted,
  OfferDeliveredCancelled,
  RequestDeliveryRevision,
} from "components/pages/dashboard/order/Activity/ActivityElements";
import OrderLayout from "components/pages/dashboard/order/OrderLayout";
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
            <OfferDelivered />
            <OfferDeliveredAccepted />
            <OfferDeliveredCancelled />
            <RequestDeliveryRevision />
          </ul>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default activity;
