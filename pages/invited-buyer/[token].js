import Layout from "components/Layout/Layout";
import React from "react";
import RegisterLayout from "components/Layout/RegisterLayout";

const invited_user = () => {
  return (
    <Layout invitedBuyer>
      <div className=" bg-gray-50 flex flex-col justify-center">
        <RegisterLayout />
      </div>
    </Layout>
  );
};

export default invited_user;
