import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { wrapper } from "redux/store";
import {
  loadUser,
  setPendingMessages,
  setPendingNotifications,
} from "redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { createAlert } from "redux/actions/alerts";
import { newMessageEvent } from "redux/actions/chats";
import { addOrUpdateNotificationToFeed } from "redux/actions/notifications";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";
function WrappedApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (process.browser) {
      dispatch(loadUser());
    }
  }, []);
  const authReducer = useSelector((state) => state.authReducer);
  const ws = useRef(null);
  useEffect(() => {
    if (!authReducer.is_loading && authReducer.is_authenticated) {
      ws.current = new WebSocket(
        process.env.WS + "/ws/notifications/" + authReducer.user.id + "/"
      );
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");
      ws.current.onmessage = async function (e) {
        const data = JSON.parse(e.data);
        console.log(data);
        if (data.event === "MESSAGE_RECEIVED") {
          await dispatch(setPendingMessages());
          await dispatch(setPendingNotifications());
          await dispatch(addOrUpdateNotificationToFeed(data.notification__pk));
          await dispatch(
            createAlert("SUCCESS", "New message from " + data.sent_by__username)
          );
          await dispatch(newMessageEvent(data.chat__pk, data.message__text));
        }
      };
      return () => {
        ws.current.close();
      };
    }
  }, [authReducer.is_loading]);

  return (
    <Elements stripe={getStripe()}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default wrapper.withRedux(WrappedApp);
