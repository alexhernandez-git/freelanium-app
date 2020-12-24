import Layout from "components/Layout/Layout";
import List from "components/pages/order/Board/List";
import OrderLayout from "components/pages/order/OrderLayout";
import React from "react";

const lists = [
  {
    id: Math.random().toString(36).substring(7),
    title: "TO DO",
    cards: [],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "IN PROGRESS",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "DONE",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "DONE",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
    ],
  },
  {
    id: Math.random().toString(36).substring(7),
    title: "DONE",
    cards: [
      {
        id: Math.random().toString(36).substring(7),
        title: "card 1",
      },
    ],
  },
];

const OrderBoard = () => {
  return (
    <Layout noPadding>
      <OrderLayout title={"Board"} noPadding>
        <div
          className="mt-5 overflow-x-auto"
          style={{ height: "calc(100vh - 190.6px)" }}
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex"
            style={{ width: "max-content" }}
          >
            {lists.map((list) => (
              <List list={list} key={list.key} />
            ))}
            <div
              className="bg-gray-300 w-80 p-2 rounded shadow group h-full cursor-pointer"
              style={{ minWidth: "20rem" }}
            >
              <div className="flex items-center text-gray-500">
                <svg
                  className="flex-shrink-0 mr-1.5 h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-gray-500">Add another list</span>
              </div>
            </div>
          </div>
        </div>
      </OrderLayout>
    </Layout>
  );
};

export default OrderBoard;
