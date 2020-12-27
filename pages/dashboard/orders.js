import OrdersList from "components/pages/dashboard/orders/OrdersList";
import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import OrderTabsRow from "components/pages/dashboard/orders/OrderTabs/OrderTabsRow";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Orders() {
  const authReducer = useSelector((state) => state.authReducer);
  const { seller_view } = authReducer;

  return (
    <Layout
      pageName={seller_view ? "Manage Orders" : "Your Orders"}
      searchBar="Search Orders"
    >
      {seller_view && <OrdersTabs tab="PRIORITY" />}
      <OrdersList />
    </Layout>
  );
}
