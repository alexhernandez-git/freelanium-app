import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthRequired = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, isAuthenticated } = authReducer;
  const router = useRouter();
  const [cantRender, setCantRender] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      console.log(isAuthenticated);
      if (!isAuthenticated) {
        router.push("/login");
      } else {
        setCantRender(false);
      }
    }
  }, [isLoading, isAuthenticated]);
  return [cantRender, authReducer];
};

export default useAuthRequired;
