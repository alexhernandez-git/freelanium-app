import Layout from "components/Layout/Layout";
import React from "react";
import RegisterLayout from "components/Layout/RegisterLayout";
import { useRouter } from "next/router";

const invited_user = () => {
  const router = useRouter();
  const { token } = router.query;
  return (
    <Layout invitedBuyer>
      <div className=" bg-gray-50 flex flex-col justify-center">
        <RegisterLayout isSeller token={token} />
      </div>
    </Layout>
  );
};

export default invited_user;
