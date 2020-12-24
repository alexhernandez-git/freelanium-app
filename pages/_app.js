import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { wrapper } from "redux/store";

function WrappedApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(WrappedApp);
