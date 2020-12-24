import Activity from "components/pages/dashboard/Activity";
import Inbox from "components/pages/dashboard/Inbox";
import Orders from "components/pages/dashboard/Orders";
import UserCard from "components/pages/dashboard/UserCard";
import Head from "next/head";
import Layout from "components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageName="Dashboard">
      <div className="lg:grid grid-cols-12 gap-8">
        <div className="col-span-4 mb-3 lg:m-0">
          <UserCard />
          <Inbox />
        </div>
        <div className="col-start-5 col-span-9">
          <Orders />
          <Activity />
        </div>
      </div>
    </Layout>
  );
}
