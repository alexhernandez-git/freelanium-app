import Activity from "components/pages/dashboard/dashboard/Activity";
import Inbox from "components/pages/dashboard/dashboard/Inbox";
import Orders from "components/pages/dashboard/dashboard/Orders";
import UserCard from "components/pages/dashboard/dashboard/UserCard";
import Layout from "components/Layout/Dashboard/Layout";
import { useEffect, useState } from "react";
import useAuthRequired from "hooks/useAuthRequired";
import Spinner from "components/ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastMessages } from "redux/actions/lastMessages";
import { fetchDashboardOrders } from "redux/actions/dashboardOrders";
import { fetchActivities } from "redux/actions/activities";
import Head from "next/head";

export default function Dashboard() {
  const [cantRender, authReducer, initialDataFetched] = useAuthRequired();
  const dashboardOrdersReducer = useSelector(
    (state) => state.dashboardOrdersReducer
  );
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("ACTIVE");
  const handleFetchDashboardOrders = async (value) => {
    if (dashboardOrdersReducer.orders.length !== 0 && value === selectValue) {
      return;
    }
    switch (value) {
      case "ACTIVE":
        await dispatch(fetchDashboardOrders(value));
        break;
      case "COMPLETED":
        await dispatch(fetchDashboardOrders(value));
        break;
      case "CANCELLED":
        await dispatch(fetchDashboardOrders(value));
        break;
    }
  };
  const handleFetchDashboardData = async () => {
    await handleFetchDashboardOrders(selectValue);
    await dispatch(fetchLastMessages());
    // await dispatch(fetchActivities());
  };

  const handleChangeSelectValue = (value) => {
    handleFetchDashboardOrders(value);
    setSelectValue(value);
  };

  useEffect(() => {
    if (initialDataFetched) {
      handleFetchDashboardData();
    }
  }, [initialDataFetched]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      {!cantRender ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <Layout pageName="Dashboard">
          <div className="lg:grid grid-cols-12 gap-8">
            <div className="col-span-4 mb-3 lg:m-0">
              <UserCard />
              <Inbox />
            </div>
            <div className="col-start-5 col-span-9">
              <Orders
                selectValue={selectValue}
                handleChangeSelectValue={handleChangeSelectValue}
              />
              {/* <Activity /> */}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
