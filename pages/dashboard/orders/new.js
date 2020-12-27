import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import Head from "next/head";
import Layout from "components/Layout/Dashboard/Layout";
import OrdersList from "components/pages/dashboard/orders/OrdersList";
import useAuthRequired from "hooks/useAuthRequired";

export default function Orders() {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="NEW" />
      <OrdersList />
    </Layout>
  );
}
