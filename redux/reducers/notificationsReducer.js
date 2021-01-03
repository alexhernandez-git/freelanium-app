import { CREATE_NOTIFICATION, REMOVE_NOTIFICATION } from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  type: "",
  message: "",
};
export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case CREATE_NOTIFICATION:
      return (state = action.payload);
    case REMOVE_NOTIFICATION:
      return (state = initialState);
    default:
      return state;
  }
}
