import Layout from "components/Layout/Dashboard/Layout";
import UserProfile from "components/pages/dashboard/messages/UserProfile";
import useAuthRequired from "hooks/useAuthRequired";
import React from "react";

const profile = () => {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    "Loading..."
  ) : (
    <div>
      <Layout>
        <UserProfile />
      </Layout>
    </div>
  );
};

export default profile;
