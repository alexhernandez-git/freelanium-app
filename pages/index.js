import Activity from "components/pages/Dashboard/Activity";
import Inbox from "components/pages/Dashboard/Inbox";
import Orders from "components/pages/Dashboard/Orders";
import UserCard from "components/pages/Dashboard/UserCard";
import Head from "next/head";
import Layout from "components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageName="Dashboard">
      <div className="lg:grid grid-cols-12 gap-3">
        <div className="col-span-4 xl:col-span-3 mb-3 lg:m-0">
          <UserCard />
          <Inbox />
        </div>
        <div className="col-start-5 col-span-8">
          <Orders />
          <Activity />
        </div>
      </div>
    </Layout>
  );
}
