import React from "react";
import OrderSidebar from "components/pages/order/OrderSidebar";
import { PrimaryButton } from "components/ui/Buttons";
import { InfoBadge } from "components/ui/Badges";

const OrderLayout = ({ children, title, noPadding }) => {
  return (
    <div
      className="flex overflow-hidden bg-gray-100"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <OrderSidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className={noPadding ? "pt-6" : "py-6"}>
            <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>

              <PrimaryButton>Deliver Your Order</PrimaryButton>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
              <span className="text-3xl font-semibold text-gray-500 inline">
                Order 1
              </span>
              <InfoBadge className="ml-3">ACTIVE</InfoBadge>
            </div>
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"> */}
            {/* <div className="py-4"> */}
            {children}
            {/* </div> */}
            {/* </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderLayout;
