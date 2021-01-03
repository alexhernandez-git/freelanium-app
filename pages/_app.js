import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { wrapper } from "redux/store";
import { loadUser } from "redux/actions/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function WrappedApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (process.browser) {
      dispatch(loadUser());
    }
  }, []);

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(WrappedApp);
