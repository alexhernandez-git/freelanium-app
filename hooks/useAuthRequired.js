import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthRequired = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { is_loading, is_authenticated } = authReducer;
  const router = useRouter();
  const [cantRender, setCantRender] = useState(false);
  useEffect(() => {
    if (!is_loading) {
      if (!is_authenticated && router.pathname != "/login") {
        router.push("/");
      } else {
        setCantRender(true);
      }
    }
  }, [is_loading, is_authenticated]);
  return [cantRender, authReducer];
};

export default useAuthRequired;
