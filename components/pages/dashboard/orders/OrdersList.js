import Pagination from "components/ui/Pagination";
import Spinner from "components/ui/Spinner";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersPagination } from "redux/actions/orders";
import OrderTabsRow from "./OrderTabs/OrderTabsRow";

const OrdersList = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const ordersReducer = useSelector((state) => state.ordersReducer);
  const dispatch = useDispatch();
  const handleChangePage = (url) => {
    dispatch(fetchOrdersPagination(url));
    window.scrollTo(0, 0);
  };
  return ordersReducer.is_loading ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {authReducer.user && authReducer.user.seller_view
                      ? "Buyer"
                      : "Seller"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View order</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ordersReducer.orders.results &&
                  ordersReducer.orders.results.map((order) => (
                    <OrderTabsRow key={order.id} order={order} />
                  ))}

                {/* <!-- More rows... --> */}
              </tbody>
            </table>
          </div>
          {ordersReducer.orders &&
            (ordersReducer.orders.previous || ordersReducer.orders.next) && (
              <Pagination
                previous={ordersReducer.orders.previous}
                next={ordersReducer.orders.next}
                changePage={handleChangePage}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
