import Layout from "components/Layout/Dashboard/Layout";
import UserProfile from "components/pages/dashboard/messages/UserProfile";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import React from "react";

const profile = () => {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <div>
      <Layout>
        <UserProfile />
      </Layout>
    </div>
  );
};

export default profile;
