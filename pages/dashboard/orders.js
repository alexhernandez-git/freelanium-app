import OrdersList from "components/pages/dashboard/orders/OrdersList";
import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import OrderTabsRow from "components/pages/dashboard/orders/OrderTabs/OrderTabsRow";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "redux/actions/orders";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Orders() {
  const [canRender, authReducer] = useAuthRequired();
  const dispatch = useDispatch();
  const ordersReducer = useSelector((state) => state.ordersReducer);

  useEffect(() => {
    if (canRender) {
      dispatch(fetchOrders());
    }
  }, [canRender, authReducer.user?.seller_view]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search != "") {
      const timeoutId = setTimeout(async () => {
        await dispatch(fetchOrders(search));
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      if (!ordersReducer.is_loading) {
        dispatch(fetchOrders());
      }
    }
  }, [search]);
  const handleSearchOrders = () => {
    dispatch(fetchOrders(search));
  };
  return !canRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <Layout
      pageName={
        authReducer.user && authReducer.user.seller_view
          ? "Manage Orders"
          : "Your Orders"
      }
      searchBar="Search Orders"
      searchState={{ search, setSearch }}
      onSearchClick={handleSearchOrders}
    >
      {/* {authReducer.user && authReducer.user.seller_view && (
        <OrdersTabs tab="PRIORITY" />
      )} */}

      <OrdersList />
    </Layout>
  );
}
