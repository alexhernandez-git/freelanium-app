import Layout from "components/Layout/Layout";
import { useNotification } from "hooks/useNotification";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyAccount } from "redux/actions/auth";

const verified_account = () => {
  const router = useRouter();
  const { token } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(verifyAccount(token, router));
    }
  }, [token]);
  const notification = useNotification();

  return <>{notification}</>;
};

export default verified_account;
