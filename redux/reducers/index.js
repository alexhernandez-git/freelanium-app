import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertsReducer from "./alertsReducer";
import contactsReducer from "./contactsReducer";
import chatsReducer from "./chatsReducer";
import chatReducer from "./chatReducer";
import messagesReducer from "./messagesReducer";
import notificationsReducer from "./notificationsReducer";
import plansReducer from "./plansReducer";

export default combineReducers({
  authReducer: authReducer,
  alertsReducer: alertsReducer,
  contactsReducer: contactsReducer,
  chatsReducer: chatsReducer,
  chatReducer: chatReducer,
  messagesReducer: messagesReducer,
  notificationsReducer: notificationsReducer,
  plansReducer: plansReducer,
});
