import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationsReducer from "./notificationsReducer";
import contactsReducer from "./contactsReducer";
import chatsReducer from "./chatsReducer";
import chatReducer from "./chatReducer";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  authReducer: authReducer,
  notificationsReducer: notificationsReducer,
  contactsReducer: contactsReducer,
  chatsReducer: chatsReducer,
  chatReducer: chatReducer,
  messagesReducer: messagesReducer,
});
