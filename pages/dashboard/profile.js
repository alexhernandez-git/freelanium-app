import Layout from "components/Layout/Dashboard/Layout";
import UserProfile from "components/pages/dashboard/messages/UserProfile";
import React from "react";

const profile = () => {
  return (
    <div>
      <Layout>
        <UserProfile />
      </Layout>
    </div>
  );
};

export default profile;
