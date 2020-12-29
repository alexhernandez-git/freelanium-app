import { CREATE_NOTIFICATION, REMOVE_NOTIFICATION } from "../types";

export const createNotification = (type, message) => (dispatch, getState) => {
  dispatch({
    type: CREATE_NOTIFICATION,
    payload: {
      type: type,
      message: message,
    },
  });
};

export const removeNotification = () => (dispatch, getState) => {
  dispatch({
    type: REMOVE_NOTIFICATION,
  });
};
