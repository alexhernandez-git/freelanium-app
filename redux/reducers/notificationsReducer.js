import { CREATE_NOTIFICATION, REMOVE_NOTIFICATION } from "../types";
const initialState = {
  type: "",
  message: "",
};
export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return (state = action.payload);
    case REMOVE_NOTIFICATION:
      return (state = initialState);
    default:
      return state;
  }
}
