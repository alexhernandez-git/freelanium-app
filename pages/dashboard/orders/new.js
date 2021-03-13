import OrdersTabs from "components/pages/dashboard/orders/OrdersTabs";
import Head from "next/head";
import Layout from "components/Layout/Dashboard/Layout";
import OrdersList from "components/pages/dashboard/orders/OrdersList";
import useAuthRequired from "hooks/useAuthRequired";
import Spinner from "components/ui/Spinner";

export default function Orders() {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <Layout pageName="Manage Orders" searchBar="Search Orders">
      <OrdersTabs tab="NEW" />
      <OrdersList />
    </Layout>
  );
}
