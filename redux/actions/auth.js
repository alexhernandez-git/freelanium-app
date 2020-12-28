import axios from "axios";
import Swal from "sweetalert2";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  STRIPE_CONNECTED,
  STRIPE_CONNECTED_SUCCESS,
  STRIPE_CONNECTED_FAIL,
  REGISTER,
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
} from "../types";

// SET TOKEN
// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });
  axios
    .get(`${process.env.HOST}/api/users/get_user/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const login = (data) => (dispatch, getState) => {
  console.log(data);
  axios
    .post(`${process.env.HOST}/api/users/login/`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const isEmailAvailable = (email) => (dispatch, getState) => {
  dispatch({ type: IS_EMAIL_AVAILABLE });
  axios
    .post(`${process.env.HOST}/api/users/is_email_available/`, email)
    .then((res) => {
      dispatch({
        type: IS_EMAIL_AVAILABLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: IS_EMAIL_AVAILABLE_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const resetEmailAvailable = () => (dispatch, getState) => {
  dispatch({ type: RESET_EMAIL_AVAILABLE });
};
export const isUsernameAvailable = (email) => (dispatch, getState) => {
  dispatch({ type: IS_USERNAME_AVAILABLE });
  axios
    .post(`${process.env.HOST}/api/users/is_username_available/`, email)
    .then((res) => {
      dispatch({
        type: IS_USERNAME_AVAILABLE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: IS_USERNAME_AVAILABLE_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const resetUsernameAvailable = () => (dispatch, getState) => {
  dispatch({ type: RESET_USERNAME_AVAILABLE });
};

export const register_seller = (data) => (dispatch, getState) => {
  axios
    .post(`${process.env.HOST}/api/users/signup_seller/`, data)
    .then((res) => {
      dispatch({
        type: REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const register_buyer = (data) => (dispatch, getState) => {
  axios
    .post(`${process.env.HOST}/api/users/signup_buyer/`, data)
    .then((res) => {
      dispatch({
        type: REGISTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const updateUser = (user) => (dispatch, getState) => {
  console.log("user", user);
  dispatch({ type: UPDATE_USER });
  axios
    .patch(
      `${process.env.HOST}/api/users/${getState().authReducer.user.id}/`,
      user,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const changePassword = (data) => (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: CHANGE_PASSWORD,
  });
  axios
    .post(
      `${process.env.HOST}/api/users/change_password/`,
      data,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      Swal.fire({
        title: "Contraseña actualizada!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const connectStripe = (authCode) => (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: STRIPE_CONNECTED,
  });
  axios
    .post(
      `${process.env.HOST}/api/users/stripe_connect/`,
      { code: authCode },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: STRIPE_CONNECTED_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: STRIPE_CONNECTED_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const toggleView = () => (dispatch, getState) => {
  const view = getState().authReducer.user.seller_view;

  dispatch({
    type: TOOGLE_VIEWS,
    payload: !view,
  });
  axios
    .patch(
      `${process.env.HOST}/api/users/${getState().authReducer.user.id}/`,
      { seller_view: !view },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const resetAuthErrors = () => (dispatch, getState) => {
  dispatch({
    type: RESET_AUTH_ERRORS,
  });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  let token = getState().authReducer.access_token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
