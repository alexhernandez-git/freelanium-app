import { combineReducers } from "@reduxjs/toolkit";
import initialDataReducer from "./initialDataReducer";
import authReducer from "./authReducer";
import alertsReducer from "./alertsReducer";
import contactsReducer from "./contactsReducer";
import chatsReducer from "./chatsReducer";
import chatReducer from "./chatReducer";
import messagesReducer from "./messagesReducer";
import notificationsReducer from "./notificationsReducer";
import plansReducer from "./plansReducer";
import sellerInvoicesReducer from "./sellerInvoicesReducer";
import offersReducer from "./offersReducer";
import ordersReducer from "./ordersReducer";
import orderReducer from "./orderReducer";
import earningsReducer from "./earningsReducer";

export default combineReducers({
  initialDataReducer: initialDataReducer,
  authReducer: authReducer,
  alertsReducer: alertsReducer,
  contactsReducer: contactsReducer,
  chatsReducer: chatsReducer,
  chatReducer: chatReducer,
  messagesReducer: messagesReducer,
  notificationsReducer: notificationsReducer,
  plansReducer: plansReducer,
  sellerInvoicesReducer: sellerInvoicesReducer,
  offersReducer: offersReducer,
  ordersReducer: ordersReducer,
  orderReducer: orderReducer,
  earningsReducer: earningsReducer,
});
