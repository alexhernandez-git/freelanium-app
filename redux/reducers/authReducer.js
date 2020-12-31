import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  RESET_CHANGE_PASSWORD_ERRORS,
  CHANGE_EMAIL,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAIL,
  SET_STRIPE_CUSTOMER_DATA,
  STRIPE_CONNECTED,
  STRIPE_CONNECTED_SUCCESS,
  STRIPE_CONNECTED_FAIL,
  RESET_AUTH_ERRORS,
  TOOGLE_VIEWS,
  IS_EMAIL_AVAILABLE,
  IS_EMAIL_AVAILABLE_SUCCESS,
  IS_EMAIL_AVAILABLE_FAIL,
  RESET_EMAIL_AVAILABLE,
  IS_USERNAME_AVAILABLE,
  IS_USERNAME_AVAILABLE_SUCCESS,
  IS_USERNAME_AVAILABLE_FAIL,
  RESET_USERNAME_AVAILABLE,
  SEND_VERIFICATION_EMAIL,
  SEND_VERIFICATION_EMAIL_SUCCESS,
  SEND_VERIFICATION_EMAIL_FAIL,
  VERIFY_ACCOUNT,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_FAIL,
  VALIDATE_CHANGE_EMAIL,
  VALIDATE_CHANGE_EMAIL_SUCCESS,
  VALIDATE_CHANGE_EMAIL_FAIL,
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../types";
const initialState = {
  access_token: process.browser && localStorage.getItem("access_token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  error: null,
  is_updating_user: false,
  update_user_error: null,
  is_changing_password: false,
  change_password_error: null,
  is_changing_email: false,
  change_email_error: null,
  stripe_connecting: false,
  stripe_connecting_error: null,
  email_available_loading: false,
  email_available: false,
  email_available_error: null,
  username_available_loading: false,
  username_available: false,
  username_available_error: null,
  sending_verification_email: false,
  send_verification_email_error: null,
  verifing_account: false,
  verify_account_error: null,
  validating_change_email: false,
  validate_change_email_error: null,
  sending_forget_password_email: false,
  forget_password_error: null,
  resetting_password: false,
  reset_password_error: null,
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      //   console.log(action.payload);
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        ...action.payload,
      };
    case LOGIN_SUCCESS:
      process.browser &&
        localStorage.setItem("access_token", action.payload.access_token);
      return {
        ...state,
        user: action.payload.user,
        rating: action.payload.rating,
        access_token: action.payload.access_token,
        isAuthenticated: true,
        isLoading: false,
        haveAccess: action.payload.have_access,
        error: !action.payload.have_access
          ? { data: { detail: "You don't have access" } }
          : null,
      };
    case IS_EMAIL_AVAILABLE:
      return {
        ...state,
        email_available_loading: true,
      };
    case IS_EMAIL_AVAILABLE_SUCCESS:
      return {
        ...state,
        email_available: action.payload.email,
        email_available_error: null,
      };
    case IS_EMAIL_AVAILABLE_FAIL:
      return {
        ...state,
        email_available: false,
        email_available_error: action.payload,
      };
    case RESET_EMAIL_AVAILABLE:
      return {
        ...state,
        email_available: false,
        email_available_error: null,
      };
    case IS_USERNAME_AVAILABLE:
      return {
        ...state,
        username_available_loading: true,
      };
    case IS_USERNAME_AVAILABLE_SUCCESS:
      return {
        ...state,
        username_available: action.payload.message,
        username_available_error: null,
      };
    case IS_USERNAME_AVAILABLE_FAIL:
      return {
        ...state,
        username_available: false,
        username_available_error: action.payload,
      };
    case RESET_USERNAME_AVAILABLE:
      return {
        ...state,
        username_available: false,
        username_available_error: null,
      };

    case REGISTER:
      process.browser &&
        localStorage.setItem("access_token", action.payload.access_token);

      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isAuthenticated: true,
        isLoading: false,
        haveAccess: action.payload.have_access,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      process.browser && localStorage.removeItem("access_token");
      return {
        ...state,
        access_token: null,
        user: null,
        rating: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case RESET_AUTH_ERRORS:
      return {
        ...state,
        error: null,
      };
    case TOOGLE_VIEWS:
      return {
        ...state,
        user: {
          ...state.user,
          seller_view: action.payload,
        },
      };
    case SEND_VERIFICATION_EMAIL:
      return {
        ...state,
        sending_verification_email: true,
      };
    case SEND_VERIFICATION_EMAIL_SUCCESS:
      return {
        ...state,
        sending_verification_email: false,
        send_verification_email_error: null,
      };
    case SEND_VERIFICATION_EMAIL_FAIL:
      return {
        ...state,
        sending_verification_email: false,
        send_verification_email_error: action.payload,
      };
    case VERIFY_ACCOUNT:
      return {
        ...state,
        verifing_account: true,
      };
    case VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        verifing_account: false,
        user: {
          ...state.user,
          is_verified: true,
        },
        verify_account_error: null,
      };
    case VERIFY_ACCOUNT_FAIL:
      return {
        ...state,
        verifing_account: false,
        verify_account_error: action.payload,
      };
    case VALIDATE_CHANGE_EMAIL:
      return {
        ...state,
        validating_change_email: true,
      };
    case VALIDATE_CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        validating_change_email: false,
        user: {
          ...state.user,
          email: action.payload.email,
        },
        validate_change_email_error: null,
      };
    case VALIDATE_CHANGE_EMAIL_FAIL:
      return {
        ...state,
        validating_change_email: false,
        validate_change_email_error: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        sending_forget_password_email: true,
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        sending_forget_password_email: false,
        user: {
          ...state.user,
          email: action.payload.email,
        },
        forget_password_error: null,
      };
    case FORGET_PASSWORD_FAIL:
      return {
        ...state,
        sending_forget_password_email: false,
        forget_password_error: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetting_password: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetting_password: false,
        user: {
          ...state.user,
          email: action.payload.email,
        },
        reset_password_error: null,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        resetting_password: false,
        reset_password_error: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        is_updating_user: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        is_updating_user: false,
        user: action.payload,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        is_updating_user: false,
        update_user_error: action.payload,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        is_changing_email: true,
      };
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        is_changing_email: false,
      };
    case CHANGE_EMAIL_FAIL:
      return {
        ...state,
        is_changing_email: false,
        change_email_error: action.payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        is_changing_password: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        is_changing_password: false,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        is_changing_password: false,
        change_password_error: action.payload,
      };
    case RESET_CHANGE_PASSWORD_ERRORS:
      return {
        ...state,
        change_password_error: null,
      };
    case SET_STRIPE_CUSTOMER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          stripe_customer_id: action.payload.customer_id,
          payment_methods: action.payload.payment_methods,
        },
      };

    case STRIPE_CONNECTED:
      return {
        ...state,
        stripe_connecting: true,
      };
    case STRIPE_CONNECTED_SUCCESS:
      return {
        ...state,
        stripe_connecting: false,
        user: {
          ...state.user,
          stripe_account_id: action.payload.stripe_account_id,
          stripe_dashboard_url: action.payload.stripe_dashboard_url,
        },
      };
    case STRIPE_CONNECTED_FAIL:
      return {
        ...state,
        stripe_connecting: false,
        stripe_connecting_error: action.payload,
      };

    default:
      return state;
  }
}
