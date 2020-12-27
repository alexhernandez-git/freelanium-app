import Activity from "components/pages/dashboard/dashboard/Activity";
import Inbox from "components/pages/dashboard/dashboard/Inbox";
import Orders from "components/pages/dashboard/dashboard/Orders";
import UserCard from "components/pages/dashboard/dashboard/UserCard";
import Layout from "components/Layout/Dashboard/Layout";
import { useEffect } from "react";
import useAuthRequired from "hooks/useAuthRequired";

export default function Dashboard() {
  const [cantRender, authReducer] = useAuthRequired();

  return cantRender ? (
    "Loading..."
  ) : (
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
