import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import Head from "next/head";
import Layout from "components/Layout/Dashboard/Layout";
import OrdersList from "components/pages/dashboard/orders/OrdersList";

export default function Home() {
  return (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="NEW" />
      <OrdersList />
    </Layout>
  );
}
