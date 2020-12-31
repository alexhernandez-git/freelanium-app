import Layout from "components/Layout/Layout";
import { useNotification } from "hooks/useNotification";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { validateChangeEmail } from "redux/actions/auth";

const email_changed = () => {
  const router = useRouter();
  const { token } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(validateChangeEmail(token, router));
    }
  }, [token]);
  const notification = useNotification();

  return <>{notification}</>;
};

export default email_changed;
