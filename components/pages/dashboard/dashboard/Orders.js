import OrdersCard from "components/pages/dashboard/dashboard/Orders/OrdersCard";
import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const authReducer = useSelector((state) => state.authReducer);
  return (
    <>
      <div className="bg-white overflow-hidden  rounded-lg shadow mb-5 lg:mb-16">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <h3 className="text-xl leading-6 font-medium text-gray-700">
                Active orders{" "}
                {authReducer.user && authReducer.user.seller_view && (
                  <span className="text-gray-500">- 3 ($4300)</span>
                )}
              </h3>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0 w-60">
              <div>
                <div className="mt-1 relative">
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <span className="block truncate text-gray-700">
                      Active orders (3)
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      {/* <!-- Heroicon name: selector --> */}
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
                  <div className="hidden absolute mt-1 w-full rounded-md bg-white shadow-lg">
                    <ul
                      tabIndex="-1"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-item-3"
                      className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {/* <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        --> */}
                      <li
                        id="listbox-option-0"
                        role="option"
                        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                      >
                        {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                        <span className="font-normal block truncate">
                          Completed orders (5)
                        </span>

                        {/* <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
                        <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                          {/* <!-- Heroicon name: check --> */}
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </li>

                      {/* <!-- More options... --> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          <li>
            <OrdersCard />
          </li>
          <li>
            <OrdersCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Orders;
