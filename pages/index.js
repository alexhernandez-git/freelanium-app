import Orders from "components/pages/Dashboard/Orders";
import UserCard from "components/pages/Dashboard/UserCard";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageName="Dashboard">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <UserCard />
          {/* Inbox */}
        </div>
        <div className="col-start-5 col-span-8">
          {/* Orders */}
          <Orders />
          {/* Activity */}
        </div>
      </div>
    </Layout>
  );
}
