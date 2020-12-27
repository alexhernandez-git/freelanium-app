import OrdersList from "components/pages/dashboard/orders/OrdersList";
import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import OrderTabsRow from "components/pages/dashboard/orders/OrderTabs/OrderTabsRow";
import useAuthRequired from "hooks/useAuthRequired";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Orders() {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout
      pageName={
        authReducer.user && authReducer.user.seller_view
          ? "Manage Orders"
          : "Your Orders"
      }
      searchBar="Search Orders"
    >
      {authReducer.user && authReducer.user.seller_view && (
        <OrdersTabs tab="PRIORITY" />
      )}
      <OrdersList />
    </Layout>
  );
}
