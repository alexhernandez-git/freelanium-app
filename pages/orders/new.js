import OrdersTabs from "components/pages/Orders/OrdersTabs";
import Head from "next/head";
import Layout from "components/Layout/Layout";
import OrdersList from "components/pages/Orders/OrdersList";

export default function Home() {
  return (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="NEW" />
      <OrdersList />
    </Layout>
  );
}
