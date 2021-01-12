import { SuccessAlert, ErrorAlert } from "components/ui/Alerts";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "redux/actions/alerts";

// browser code
export function useAlert() {
  const { message, type } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(removeAlert());
      }, 2000);
    }
  }, [message]);
  const handleHideAlert = () => {
    dispatch(removeAlert());
  };
  if (message) {
    switch (type) {
      case "SUCCESS":
        return (
          <SuccessAlert message={message} handleHideAlert={handleHideAlert} />
        );
      case "ERROR":
        return (
          <ErrorAlert message={message} handleHideAlert={handleHideAlert} />
        );
      default:
        break;
    }
  }

  return <></>;
}
