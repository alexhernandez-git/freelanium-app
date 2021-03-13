import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRedirectIfIsAuthenticated = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { is_loading, is_authenticated } = authReducer;
  const router = useRouter();
  useEffect(() => {
    if (!is_loading) {
      console.log(is_authenticated);
      if (is_authenticated) {
        router.push("/dashboard");
      }
    }
  }, [is_loading, is_authenticated]);
};

export default useRedirectIfIsAuthenticated;
