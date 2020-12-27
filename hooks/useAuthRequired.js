import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthRequired = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, isAuthenticated } = authReducer;
  const router = useRouter();
  const [cantRender, setCantRender] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && router.pathname != "/login") {
        router.push("/");
      } else {
        setCantRender(true);
      }
    }
  }, [isLoading, isAuthenticated]);
  return [cantRender, authReducer];
};

export default useAuthRequired;
