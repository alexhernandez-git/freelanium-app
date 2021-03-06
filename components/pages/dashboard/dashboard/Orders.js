import OrdersCard from "components/pages/dashboard/dashboard/Orders/OrdersCard";
import useOutsideClick from "hooks/useOutsideClick";
import React, { useRef, useState, useEffect } from "react";
import { fetchDashboardOrders } from "redux/actions/dashboardOrders";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/ui/Spinner";

const Orders = ({ selectValue, handleChangeSelectValue }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const dashboardOrdersReducer = useSelector(
    (state) => state.dashboardOrdersReducer
  );
  const dropdownMenuRef = useRef();
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const handleToggleDropdownMenu = () => {
    setDropdownMenuOpen(!dropdownMenuOpen);
  };
  const handleCloseDropdownMenu = () => {
    console.log("entra en dropdown menu");

    if (dropdownMenuOpen) {
      setDropdownMenuOpen(false);
    }
  };

  useEffect(() => {
    handleCloseDropdownMenu();
  }, [selectValue]);

  useOutsideClick(dropdownMenuRef, () => handleCloseDropdownMenu());
  return (
    <>
      <div className="bg-white  rounded-lg shadow mb-5 lg:mb-16">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-t-lg">
          <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap ">
            <div className="ml-4 mt-2">
              <h3 className="text-xl leading-6 font-medium text-gray-700">
                {selectValue === "ACTIVE" && "Active orders"}
                {selectValue === "COMPLETED" && "Completed orders"}
                {selectValue === "CANCELLED" && "Cancelled orders"}
                {/* {authReducer.user && authReducer.user.seller_view && (
                  <span className="text-gray-500">- 3</span>
                )} */}
              </h3>
            </div>

            <div>
              <div className="ml-4 mt-2 flex-shrink-0 w-60">
                <div className="mt-1 relative">
                  <button
                    type="button"
                    onMouseDown={handleToggleDropdownMenu}
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  >
                    <span className="truncate text-gray-700 flex items-center">
                      {dashboardOrdersReducer.is_loading && (
                        <div className="self-center mr-2">
                          <Spinner />
                        </div>
                      )}
                      {selectValue === "ACTIVE" && "Active orders"}
                      {selectValue === "COMPLETED" && "Completed orders"}
                      {selectValue === "CANCELLED" && "Cancelled orders"}
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

                  <div
                    ref={dropdownMenuRef}
                    className={`${
                      dropdownMenuOpen ? "block" : "hidden"
                    } absolute mt-1 w-full rounded-md bg-white shadow-lg`}
                  >
                    <ul
                      tabIndex="-1"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-item-3"
                      className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      <li
                        id="listbox-option-0"
                        role="option"
                        className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                        onClick={handleChangeSelectValue.bind(this, "ACTIVE")}
                      >
                        {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                        <span
                          className={`${
                            selectValue === "ACTIVE"
                              ? "font-semibold"
                              : "font-normal"
                          } block truncate`}
                        >
                          Active orders
                        </span>

                        {selectValue === "ACTIVE" && (
                          <span className="text-cyan-500 absolute inset-y-0 right-0 flex items-center pr-4">
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
                        )}
                      </li>
                      <li
                        id="listbox-option-0"
                        role="option"
                        className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                        onClick={handleChangeSelectValue.bind(
                          this,
                          "COMPLETED"
                        )}
                      >
                        {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                        <span
                          className={`${
                            selectValue === "COMPLETED"
                              ? "font-semibold"
                              : "font-normal"
                          } block truncate`}
                        >
                          Completed
                        </span>
                        {selectValue === "COMPLETED" && (
                          <span className="text-cyan-500 absolute inset-y-0 right-0 flex items-center pr-4">
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
                        )}
                      </li>
                      <li
                        id="listbox-option-0"
                        role="option"
                        className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                        onClick={handleChangeSelectValue.bind(
                          this,
                          "CANCELLED"
                        )}
                      >
                        {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                        <span
                          className={`${
                            selectValue === "CANCELLED"
                              ? "font-semibold"
                              : "font-normal"
                          } block truncate`}
                        >
                          Cancelled
                        </span>
                        {selectValue === "CANCELLED" && (
                          <span className="text-cyan-500 absolute inset-y-0 right-0 flex items-center pr-4">
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
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {dashboardOrdersReducer?.orders.length > 0 &&
            dashboardOrdersReducer?.orders?.map((order) => (
              <li key={order.id}>
                <OrdersCard order={order} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Orders;
