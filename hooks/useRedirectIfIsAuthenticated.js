import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRedirectIfIsAuthenticated = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, isAuthenticated } = authReducer;
  const router = useRouter();
  useEffect(() => {
    if (!isLoading) {
      console.log(isAuthenticated);
      if (isAuthenticated) {
        router.push("/dashboard");
      }
    }
  }, [isLoading, isAuthenticated]);
};

export default useRedirectIfIsAuthenticated;
