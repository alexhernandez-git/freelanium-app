// Dispatch control reducers
export const INITIAL_DATA_FETCHED = "INITIAL_DATA_FETCHED";

// Alerts
export const CREATE_ALERT = "CREATE_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

// Auth
export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const AUTH_ERROR = "AUTH_ERROR";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_EMAIL_SUCCESS = "CHANGE_EMAIL_SUCCESS";
export const CHANGE_EMAIL_FAIL = "CHANGE_EMAIL_FAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";
export const RESET_CHANGE_PASSWORD_ERRORS = "RESET_CHANGE_PASSWORD_ERRORS";
export const STRIPE_CONNECTED = "STRIPE_CONNECTED";
export const STRIPE_CONNECTED_SUCCESS = "STRIPE_CONNECTED_SUCCESS";
export const STRIPE_CONNECTED_FAIL = "STRIPE_CONNECTED_FAIL";
export const SET_STRIPE_CUSTOMER_DATA = "SET_STRIPE_CUSTOMER_DATA";
export const RESET_AUTH_ERRORS = "RESET_AUTH_ERRORS";
export const TOOGLE_VIEWS = "TOOGLE_VIEWS";
export const IS_EMAIL_AVAILABLE = "IS_EMAIL_AVAILABLE";
export const IS_EMAIL_AVAILABLE_SUCCESS = "IS_EMAIL_AVAILABLE_SUCCESS";
export const IS_EMAIL_AVAILABLE_FAIL = "IS_EMAIL_AVAILABLE_FAIL";
export const RESET_EMAIL_AVAILABLE = "RESET_EMAIL_AVAILABLE";
export const IS_USERNAME_AVAILABLE = "IS_USERNAME_AVAILABLE";
export const IS_USERNAME_AVAILABLE_SUCCESS = "IS_USERNAME_AVAILABLE_SUCCESS";
export const IS_USERNAME_AVAILABLE_FAIL = "IS_USERNAME_AVAILABLE_FAIL";
export const RESET_USERNAME_AVAILABLE = "RESET_USERNAME_AVAILABLE";
export const SEND_VERIFICATION_EMAIL = "SEND_VERIFICATION_EMAIL";
export const SEND_VERIFICATION_EMAIL_SUCCESS =
  "SEND_VERIFICATION_EMAIL_SUCCESS";
export const SEND_VERIFICATION_EMAIL_FAIL = "SEND_VERIFICATION_EMAIL_FAIL";
export const VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
export const VERIFY_ACCOUNT_SUCCESS = "VERIFY_ACCOUNT_SUCCESS";
export const VERIFY_ACCOUNT_FAIL = "VERIFY_ACCOUNT_FAIL";
export const VALIDATE_CHANGE_EMAIL = "VALIDATE_CHANGE_EMAIL";
export const VALIDATE_CHANGE_EMAIL_SUCCESS = "VALIDATE_CHANGE_EMAIL_SUCCESS";
export const VALIDATE_CHANGE_EMAIL_FAIL = "VALIDATE_CHANGE_EMAIL_FAIL";
export const FORGET_PASSWORD = "FORGET_PASSWORD";
export const FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS";
export const FORGET_PASSWORD_FAIL = "FORGET_PASSWORD_FAIL";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";
export const INVITE_USER = "INVITE_USER";
export const INVITE_USER_SUCCESS = "INVITE_USER_SUCCESS";
export const INVITE_USER_FAIL = "INVITE_USER_FAIL";
export const RESET_INVITE_USER = "RESET_INVITE_USER";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";
export const SET_PENDING_NOTIFICATIONS = "SET_PENDING_NOTIFICATIONS";
export const SET_PENDING_MESSAGES = "SET_PENDING_MESSAGES";
export const UNSET_PENDING_NOTIFICATIONS = "UNSET_PENDING_NOTIFICATIONS";
export const UNSET_PENDING_MESSAGES = "UNSET_PENDING_MESSAGES";
export const SET_ALL_NOTIFICATIONS_READ = "SET_ALL_NOTIFICATIONS_READ";
export const SET_ALL_NOTIFICATIONS_READ_SUCCESS =
  "SET_ALL_NOTIFICATIONS_READ_SUCCESS";
export const SET_ALL_NOTIFICATIONS_READ_FAIL =
  "SET_ALL_NOTIFICATIONS_READ_FAIL";
export const STRIPE_CONNECT = "STRIPE_CONNECT";
export const STRIPE_CONNECT_SUCCESS = "STRIPE_CONNECT_SUCCESS";
export const STRIPE_CONNECT_FAIL = "STRIPE_CONNECT_FAIL";
export const ADD_BILLING_INFORMATION = "ADD_BILLING_INFORMATION";
export const ADD_BILLING_INFORMATION_SUCCESS =
  "ADD_BILLING_INFORMATION_SUCCESS";
export const ADD_BILLING_INFORMATION_FAIL = "ADD_BILLING_INFORMATION_FAIL";
export const CHANGE_PAYMENT_METHOD = "CHANGE_PAYMENT_METHOD";
export const CHANGE_PAYMENT_METHOD_SUCCESS = "CHANGE_PAYMENT_METHOD_SUCCESS";
export const CHANGE_PAYMENT_METHOD_FAIL = "CHANGE_PAYMENT_METHOD_FAIL";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CANCEL_SUBSCRIPTION = "CANCEL_SUBSCRIPTION";
export const CANCEL_SUBSCRIPTION_SUCCESS = "CANCEL_SUBSCRIPTION_SUCCESS";
export const CANCEL_SUBSCRIPTION_FAIL = "CANCEL_SUBSCRIPTION_FAIL";
export const REACTIVATE_SUBSCRIPTION = "REACTIVATE_SUBSCRIPTION";
export const REACTIVATE_SUBSCRIPTION_SUCCESS =
  "REACTIVATE_SUBSCRIPTION_SUCCESS";
export const REACTIVATE_SUBSCRIPTION_FAIL = "REACTIVATE_SUBSCRIPTION_FAIL";
export const BECOME_A_SELLER = "BECOME_A_SELLER";
export const BECOME_A_SELLER_SUCCESS = "BECOME_A_SELLER_SUCCESS";
export const BECOME_A_SELLER_FAIL = "BECOME_A_SELLER_FAIL";
export const ADD_PAYMENT_METHOD = "ADD_PAYMENT_METHOD";
export const ADD_PAYMENT_METHOD_SUCCESS = "ADD_PAYMENT_METHOD_SUCCESS";
export const ADD_PAYMENT_METHOD_FAIL = "ADD_PAYMENT_METHOD_FAIL";

// Invoices
export const FETCH_INVOICES = "FETCH_INVOICES";
export const FETCH_INVOICES_SUCCESS = "FETCH_INVOICES_SUCCESS";
export const FETCH_INVOICES_FAIL = "FETCH_INVOICES_FAIL";

// Contacts
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAIL = "FETCH_CONTACTS_FAIL";
export const SEARCH_CONTACTS = "SEARCH_CONTACTS";
export const SEARCH_CONTACTS_SUCCESS = "SEARCH_CONTACTS_SUCCESS";
export const SEARCH_CONTACTS_FAIL = "SEARCH_CONTACTS_FAIL";
export const FETCH_AVAILABLE_CONTACTS = "FETCH_AVAILABLE_CONTACTS";
export const FETCH_AVAILABLE_CONTACTS_SUCCESS =
  "FETCH_AVAILABLE_CONTACTS_SUCCESS";
export const FETCH_AVAILABLE_CONTACTS_FAIL = "FETCH_AVAILABLE_CONTACTS_FAIL";
export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_FAIL = "ADD_CONTACT_FAIL";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const REMOVE_CONTACT_SUCCESS = "REMOVE_CONTACT_SUCCESS";
export const REMOVE_CONTACT_FAIL = "REMOVE_CONTACT_FAIL";

// Chats
export const CREATE_CHAT = "CREATE_CHAT";
export const CREATE_CHAT_SUCCESS = "CREATE_CHAT_SUCCESS";
export const CREATE_CHAT_FAIL = "CREATE_CHAT_FAIL";
export const FETCH_CHATS = "FETCH_CHATS";
export const FETCH_CHATS_SUCCESS = "FETCH_CHATS_SUCCESS";
export const FETCH_CHATS_FAIL = "FETCH_CHATS_FAIL";
export const SET_SEEN_CHAT = "SET_SEEN_CHAT";
export const NEW_MESSAGE_EVENT = "NEW_MESSAGE_EVENT";
export const CHANGE_LAST_MESSAGE = "CHANGE_LAST_MESSAGE";
export const ADD_CHAT_TO_FEED = "ADD_CHAT_TO_FEED";
export const ADD_CHAT_TO_FEED_SUCCESS = "ADD_CHAT_TO_FEED_SUCCESS";
export const ADD_CHAT_TO_FEED_FAIL = "ADD_CHAT_TO_FEED_FAIL";

// Chat
export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";
export const FETCH_CHAT = "FETCH_CHAT";
export const FETCH_CHAT_SUCCESS = "FETCH_CHAT_SUCCESS";
export const FETCH_CHAT_FAIL = "FETCH_CHAT_FAIL";
export const REMOVE_CURRENT_CHAT = "REMOVE_CURRENT_CHAT";

// Messages
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAIL = "FETCH_MESSAGES_FAIL";
export const FETCH_MESSAGE = "FETCH_MESSAGE";
export const FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS";
export const FETCH_MESSAGE_FAIL = "FETCH_MESSAGE_FAIL";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const FETCH_MORE_MESSAGES = "FETCH_MORE_MESSAGES";
export const FETCH_MORE_MESSAGES_SUCCESS = "FETCH_MORE_MESSAGES_SUCCESS";
export const FETCH_MORE_MESSAGES_FAIL = "FETCH_MORE_MESSAGES_FAIL";
export const ADD_ACTIVITY_TO_CHAT = "ADD_ACTIVITY_TO_CHAT";

// Notifications
export const FETCH_NOTIFICATIONS = "FETCH_NOTIFICATIONS";
export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
export const FETCH_NOTIFICATIONS_FAIL = "FETCH_NOTIFICATIONS_FAIL";
export const FETCH_MORE_NOTIFICATIONS = "FETCH_MORE_NOTIFICATIONS";
export const FETCH_MORE_NOTIFICATIONS_SUCCESS =
  "FETCH_MORE_NOTIFICATIONS_SUCCESS";
export const FETCH_MORE_NOTIFICATIONS_FAIL = "FETCH_MORE_NOTIFICATIONS_FAIL";
export const ADD_NOTIFICATION_TO_FEED = "ADD_NOTIFICATION_TO_FEED";
export const ADD_NOTIFICATION_TO_FEED_SUCCESS =
  "ADD_NOTIFICATION_TO_FEED_SUCCESS";
export const UPDATE_NOTIFICATION_TO_FEED_SUCCESS =
  "UPDATE_NOTIFICATION_TO_FEED_SUCCESS";
export const ADD_NOTIFICATION_TO_FEED_FAIL = "ADD_NOTIFICATION_TO_FEED_FAIL";

// Plans
export const FETCH_PLANS = "FETCH_PLANS";
export const FETCH_PLANS_SUCCESS = "FETCH_PLANS_SUCCESS";
export const FETCH_PLANS_FAIL = "FETCH_PLANS_FAIL";

// Offers
export const SEARCH_BUYERS = "SEARCH_BUYERS";
export const SEARCH_BUYERS_SUCCESS = "SEARCH_BUYERS_SUCCESS";
export const SEARCH_BUYERS_FAIL = "SEARCH_BUYERS_FAIL";
export const CREATE_OFFER = "CREATE_OFFER";
export const CREATE_OFFER_SUCCESS = "CREATE_OFFER_SUCCESS";
export const CREATE_OFFER_FAIL = "CREATE_OFFER_FAIL";
export const FETCH_OFFER = "FETCH_OFFER";
export const FETCH_OFFER_SUCCESS = "FETCH_OFFER_SUCCESS";
export const FETCH_OFFER_FAIL = "FETCH_OFFER_FAIL";
export const ACCEPT_OFFER = "ACCEPT_OFFER";
export const ACCEPT_OFFER_SUCCESS = "ACCEPT_OFFER_SUCCESS";
export const ACCEPT_OFFER_FAIL = "ACCEPT_OFFER_FAIL";

// Orders
export const FETCH_ORDERS = "FETCH_ORDERS";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";

// Order
export const FETCH_ORDER = "FETCH_ORDER";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAIL = "FETCH_ORDER_FAIL";
export const FETCH_ORDER_ACTIVITIES = "FETCH_ORDER_ACTIVITIES";
export const FETCH_ORDER_ACTIVITIES_SUCCESS = "FETCH_ORDER_ACTIVITIES_SUCCESS";
export const FETCH_ORDER_ACTIVITIES_FAIL = "FETCH_ORDER_ACTIVITIES_FAIL";
export const DELIVER_ORDER = "DELIVER_ORDER";
export const DELIVER_ORDER_SUCCESS = "DELIVER_ORDER_SUCCESS";
export const DELIVER_ORDER_FAIL = "DELIVER_ORDER_FAIL";
