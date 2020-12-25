import OrdersList from "components/pages/dashboard/orders/OrdersList";
import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import OrderTabsRow from "components/pages/dashboard/orders/OrderTabs/OrderTabsRow";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Home() {
  return (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="PRIORITY" />
      <OrdersList />
    </Layout>
  );
}
