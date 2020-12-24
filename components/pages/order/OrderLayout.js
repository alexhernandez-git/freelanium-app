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
          <div className={noPadding ? "" : "pb-6"}>
            <div
              className={`${
                noPadding ? " " : "max-w-7xl"
              } mx-auto px-4 sm:px-6 md:px-8 mt-4`}
            >
              <div>
                <nav class="sm:hidden" aria-label="Back">
                  <a
                    href="#"
                    class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Back
                  </a>
                </nav>
                <nav class="hidden sm:flex" aria-label="Breadcrumb">
                  <ol class="flex items-center space-x-4">
                    <li>
                      <div>
                        <a
                          href="#"
                          class="text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          Orders
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <a
                          href="#"
                          class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          Order 1
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <a
                          href="#"
                          class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                          {title}
                        </a>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    {title}
                  </h2>
                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                  <PrimaryButton>Deliver Your Order</PrimaryButton>
                </div>
              </div>
            </div>
            <div
              className={
                noPadding ? " " : "max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
              }
            >
              <div className={noPadding ? " " : "py-5"}>{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderLayout;
