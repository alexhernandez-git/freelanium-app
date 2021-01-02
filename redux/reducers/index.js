import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationsReducer from "./notificationsReducer";
import contactsReducer from "./contactsReducer";

export default combineReducers({
  authReducer: authReducer,
  notificationsReducer: notificationsReducer,
  contactsReducer: contactsReducer,
});
