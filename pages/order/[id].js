import Layout from "components/Layout/Layout";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";
import dynamic from "next/dynamic";
const BoardDnDNoSSR = dynamic(
  () => import("components/pages/order/Board/BoardDnD"),
  {
    ssr: false,
  }
);

const OrderBoard = () => {
  return (
    <Layout noPadding>
      <OrderLayout title={"Board"} noPadding>
        <div
          className="mt-5 overflow-x-auto"
          style={{ height: "calc(100vh - 168.6px)" }}
        >
          <BoardDnDNoSSR />
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default OrderBoard;
