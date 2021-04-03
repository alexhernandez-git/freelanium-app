import Link from "next/link";
import React from "react";
import OrderTabsRow from "./OrderTabs/OrderTabsRow";
import moment from "moment";
const OrdersTabs = ({ tab }) => {
  return (
    <>
      <div className="relative pb-5 border-b border-gray-200 sm:pb-0 mb-4">
        {/* <div className="md:flex md:items-center md:justify-between">
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Create
            </button>
          </div>
        </div> */}
        <div className="mt-4">
          {/* <!-- Dropdown menu on small screens --> */}
          <div className="sm:hidden">
            <label htmlFor="selected-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="selected-tab"
              name="selected-tab"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
            >
              <option defaultValue={tab === "PRIORITY"}>PRIORITY</option>

              <option defaultValue={tab === "NEW"}>NEW</option>

              <option defaultValue={tab === "ACTIVE"}>ACTIVE</option>

              <option defaultValue={tab === "LATE"}>LATE</option>

              <option defaultValue={tab === "COMPLETED"}>COMPLETED</option>

              <option defaultValue={tab === "DELIVERED"}>DELIVERED</option>

              <option defaultValue={tab === "CANCELLED"}>CANCELLED</option>
            </select>
          </div>
          {/* <!-- Tabs at small breakpoint and up --> */}
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              <Link href="/dashboard/orders">
                <a
                  className={
                    tab === "PRIORITY"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "ACTIVE" && "page"}
                >
                  PRIORITY
                </a>
              </Link>
              <Link href="/dashboard/orders/new">
                <a
                  className={
                    tab === "NEW"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "NEW" && "page"}
                >
                  NEW
                </a>
              </Link>

              {/* <!-- Current: "border-cyan-500 text-cyan-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
              <Link href="/dashboard/orders/active">
                <a
                  className={
                    tab === "ACTIVE"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "ACTIVE" && "page"}
                >
                  ACTIVE
                </a>
              </Link>
              <Link href="/dashboard/orders/late">
                <a
                  className={
                    tab === "LATE"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "LATE" && "page"}
                >
                  LATE
                </a>
              </Link>
              <Link href="/dashboard/orders/completed">
                <a
                  className={
                    tab === "COMPLETED"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "COMPLETED" && "page"}
                >
                  COMPLETED
                </a>
              </Link>
              <Link href="/dashboard/orders/delivered">
                <a
                  className={
                    tab === "DELIVERED"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  }
                  aria-current={tab === "DELIVERED" && "page"}
                >
                  DELIVERED
                </a>
              </Link>
              <Link href="/dashboard/orders/canceled">
                <a
                  className={
                    tab === "CANCELLED"
                      ? "border-cyan-500 text-cyan-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
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
