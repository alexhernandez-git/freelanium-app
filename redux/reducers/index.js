import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationsReducer from "./notificationsReducer";

export default combineReducers({
  authReducer: authReducer,
  notificationsReducer: notificationsReducer,
});
