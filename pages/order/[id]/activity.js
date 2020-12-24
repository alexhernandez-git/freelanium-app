import Layout from "components/Layout/Layout";
import {
  OfferCancelledActivity,
  OfferAcceptedActivity,
  OfferActivity,
} from "components/pages/order/Activity/ActivityElements";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";

const activity = () => {
  return (
    <Layout noPadding>
      <OrderLayout title="Activity">
        <div class="flow-root">
          <ul class="-mb-8">
            <OfferActivity />
            <OfferAcceptedActivity />
            <OfferCancelledActivity />
          </ul>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default activity;
