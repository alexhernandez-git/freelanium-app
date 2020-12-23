import Link from "next/link";
import React from "react";
import OrderTabsRow from "./OrderTabs/OrderTabsRow";
import moment from "moment";
const OrdersTabs = ({ tab }) => {
  return (
    <>
      <div className="relative pb-5 border-b border-gray-200 sm:pb-0 mb-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </div>
        <div className="mt-4">
          {/* <!-- Dropdown menu on small screens --> */}
          <div className="sm:hidden">
            <label for="selected-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="selected-tab"
              name="selected-tab"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option selected={tab === "PRIORITY"}>PRIORITY</option>

              <option selected={tab === "NEW"}>NEW</option>

              <option selected={tab === "ACTIVE"}>ACTIVE</option>

              <option selected={tab === "LATE"}>LATE</option>

              <option selected={tab === "COMPLETED"}>COMPLETED</option>

              <option selected={tab === "DELIVERED"}>DELIVERED</option>

              <option selected={tab === "CANCELLED"}>CANCELLED</option>
            </select>
          </div>
          {/* <!-- Tabs at small breakpoint and up --> */}
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              <Link href="/orders">
                <a
                  className={
                    tab === "PRIORITY"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "ACTIVE" && "page"}
                >
                  PRIORITY
                </a>
              </Link>
              <Link href="/orders/new">
                <a
                  className={
                    tab === "NEW"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "NEW" && "page"}
                >
                  NEW
                </a>
              </Link>

              {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
              <Link href="/orders/active">
                <a
                  className={
                    tab === "ACTIVE"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "ACTIVE" && "page"}
                >
                  ACTIVE
                </a>
              </Link>
              <Link href="/orders/late">
                <a
                  className={
                    tab === "LATE"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "LATE" && "page"}
                >
                  LATE
                </a>
              </Link>
              <Link href="/orders/completed">
                <a
                  className={
                    tab === "COMPLETED"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "COMPLETED" && "page"}
                >
                  COMPLETED
                </a>
              </Link>
              <Link href="/orders/delivered">
                <a
                  className={
                    tab === "DELIVERED"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "DELIVERED" && "page"}
                >
                  DELIVERED
                </a>
              </Link>
              <Link href="/orders/canceled">
                <a
                  className={
                    tab === "CANCELLED"
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "CANCELLED" && "page"}
                >
                  CANCELLED
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersTabs;
