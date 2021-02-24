import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { wrapper } from "redux/store";
import withReduxSaga from "next-redux-saga";

import {
  loadCurrency,
  loadUser,
  setPendingMessages,
  setPendingNotifications,
} from "redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { createAlert } from "redux/actions/alerts";
import { newActivityEvent, newMessageEvent } from "redux/actions/chats";
import { addOrUpdateNotificationToFeed } from "redux/actions/notifications";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";
import { fetchPlans } from "redux/actions/plans";
import useDispatchInitialData from "hooks/useDispatchInitialData";
import { useRouter } from "next/router";

function WrappedApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    useDispatchInitialData(dispatch, router);
  }, []);

  const authReducer = useSelector((state) => state.authReducer);
  const chatReducer = useSelector((state) => state.chatReducer);
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
        switch (data.event) {
          case "MESSAGE_RECEIVED":
            if (chatReducer.chat?.id !== data.chat__pk) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(
                createAlert(
                  "SUCCESS",
                  "New message from " + data.sent_by__username
                )
              );
              await dispatch(
                newMessageEvent(data.chat__pk, data.message__text)
              );
            }
            break;
          // Offer pendent
          case "OFPE":
            if (data.sent_by__pk !== authReducer.user?.id) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(
                createAlert(
                  "SUCCESS",
                  "New offer from " + data.sent_by__username
                )
              );
            }
            await dispatch(
              newActivityEvent(data.chat__pk, data.message__pk, data.event)
            );
            break;
          case "DEPE":
            if (data.sent_by__pk !== authReducer.user?.id) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(
                createAlert(
                  "SUCCESS",
                  "Order delivered by " + data.sent_by__username
                )
              );
            }
            await dispatch(
              newActivityEvent(data.chat__pk, data.message__pk, data.event)
            );
            break;
          case "CAPE":
            if (data.sent_by__pk !== authReducer.user?.id) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(
                createAlert("SUCCESS", "Order cancelation request")
              );
            }
            await dispatch(
              newActivityEvent(data.chat__pk, data.message__pk, data.event)
            );
            break;
          case "CAAC":
            if (data.sent_by__pk !== authReducer.user?.id) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(createAlert("SUCCESS", "Order cancelled"));
            }
            await dispatch(
              newActivityEvent(data.chat__pk, data.message__pk, data.event)
            );
            break;
          case "CACA":
            if (data.sent_by__pk !== authReducer.user?.id) {
              await dispatch(setPendingMessages());
              await dispatch(setPendingNotifications());
              await dispatch(
                addOrUpdateNotificationToFeed(data.notification__pk)
              );
              await dispatch(createAlert("SUCCESS", "Order not cancelled"));
            }
            await dispatch(
              newActivityEvent(data.chat__pk, data.message__pk, data.event)
            );
            break;
          default:
            break;
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

export default wrapper.withRedux(withReduxSaga(WrappedApp));
