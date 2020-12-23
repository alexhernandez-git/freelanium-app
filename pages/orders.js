import OrdersList from "components/pages/Orders/OrdersList";
import OrdersTabs from "components/pages/Orders/OrdersTabs";
import OrderTabsRow from "components/pages/Orders/OrderTabs/OrderTabsRow";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="PRIORITY" />
      <OrdersList />
    </Layout>
  );
}
