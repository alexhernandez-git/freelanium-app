import Layout from "components/Layout/Layout";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";

const actions = () => {
  return (
    <Layout noPadding>
      <OrderLayout title="Actions"></OrderLayout>
    </Layout>
  );
};

export default actions;
