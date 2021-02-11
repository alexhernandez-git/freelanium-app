import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthRequired = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const initialDataReducer = useSelector((state) => state.initialDataReducer);

  const { is_authenticated } = authReducer;
  const router = useRouter();
  const [canRender, setCanRender] = useState(false);
  useEffect(() => {
    if (initialDataReducer.initial_data_fetched) {
      if (!is_authenticated && router.pathname != "/login") {
        router.push("/");
      } else {
        setCanRender(true);
      }
    }
  }, [initialDataReducer.initial_data_fetched]);
  return [canRender, authReducer, initialDataReducer.initial_data_fetched];
};

export default useAuthRequired;
