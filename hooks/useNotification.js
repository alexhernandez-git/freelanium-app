import {
  SuccessNotification,
  ErrorNotification,
} from "components/ui/Notifications";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "redux/actions/notifications";

// browser code
export function useNotification() {
  const { message, type } = useSelector((state) => state.notificationsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(removeNotification());
      }, 2000);
    }
  }, [message]);
  const handleHideNotification = () => {
    dispatch(removeNotification());
  };
  if (message) {
    switch (type) {
      case "SUCCESS":
        return (
          <SuccessNotification
            message={message}
            handleHideNotification={handleHideNotification}
          />
        );
      case "ERROR":
        return (
          <ErrorNotification
            message={message}
            handleHideNotification={handleHideNotification}
          />
        );
      default:
        break;
    }
  }

  return <></>;
}
