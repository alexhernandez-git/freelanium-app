import axios from "axios";

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
  RESET_CHANGE_PASSWORD_ERRORS,
  CHANGE_EMAIL,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAIL,
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
  INVITE_USER,
  INVITE_USER_SUCCESS,
  INVITE_USER_FAIL,
  RESET_INVITE_USER,
} from "../types";
import { createNotification } from "./notifications";

// SET TOKEN
// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });
  await axios
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
export const login = (data) => async (dispatch, getState) => {
  console.log(data);
  await axios
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

export const isEmailAvailable = (email) => async (dispatch, getState) => {
  dispatch({ type: IS_EMAIL_AVAILABLE });
  await axios
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

export const resetEmailAvailable = () => async (dispatch, getState) => {
  dispatch({ type: RESET_EMAIL_AVAILABLE });
};
export const isUsernameAvailable = (email) => async (dispatch, getState) => {
  dispatch({ type: IS_USERNAME_AVAILABLE });
  await axios
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

export const resetUsernameAvailable = () => async (dispatch, getState) => {
  dispatch({ type: RESET_USERNAME_AVAILABLE });
};

export const register_seller = (data) => async (dispatch, getState) => {
  await axios
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

export const register_buyer = (data) => async (dispatch, getState) => {
  await axios
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

export const logout = () => async (dispatch, getState) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const sendVerificationEmail = () => async (dispatch, getState) => {
  dispatch({ type: SEND_VERIFICATION_EMAIL });
  await axios
    .get(
      `${process.env.HOST}/api/users/send_verification_email/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: SEND_VERIFICATION_EMAIL_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEND_VERIFICATION_EMAIL_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const verifyAccount = (token, router) => async (dispatch, getState) => {
  dispatch({ type: VERIFY_ACCOUNT });
  await axios
    .post(`${process.env.HOST}/api/users/verify/`, { token: token })
    .then((res) => {
      dispatch({
        type: VERIFY_ACCOUNT_SUCCESS,
      });
      dispatch(createNotification("SUCCESS", res.data.message));
      router.push("/");
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_ACCOUNT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Error at verify your account"));
      router.push("/");
    });
};

export const validateChangeEmail = (token, router) => async (
  dispatch,
  getState
) => {
  dispatch({ type: VALIDATE_CHANGE_EMAIL });
  await axios
    .post(`${process.env.HOST}/api/users/validate_change_email/`, {
      token: token,
    })
    .then((res) => {
      dispatch({
        type: VALIDATE_CHANGE_EMAIL_SUCCESS,
        payload: res.data,
      });
      dispatch(createNotification("SUCCESS", res.data.message));
      router.push("/");
    })
    .catch((err) => {
      dispatch({
        type: VALIDATE_CHANGE_EMAIL_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Error at verify your account"));
      router.push("/");
    });
};
export const forgetPassword = (values) => async (dispatch, getState) => {
  dispatch({ type: FORGET_PASSWORD });
  await axios
    .post(`${process.env.HOST}/api/users/forget_password/`, values)
    .then((res) => {
      dispatch({
        type: FORGET_PASSWORD_SUCCESS,
        payload: res.data,
      });
      dispatch(createNotification("SUCCESS", "Reset password email sent"));
    })
    .catch((err) => {
      dispatch({
        type: FORGET_PASSWORD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const resetPassword = (values, router) => async (dispatch, getState) => {
  dispatch({ type: RESET_PASSWORD });
  await axios
    .post(`${process.env.HOST}/api/users/reset_password/`, values)
    .then((res) => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: res.data,
      });
      dispatch(createNotification("SUCCESS", "Password succesfully changed"));
      router.push("/login");
    })
    .catch((err) => {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Error at change your password"));
      router.push("/login");
    });
};

export const updateUser = (user) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USER });
  await axios
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
      dispatch(createNotification("SUCCESS", "Successfully saved!"));
      dispatch(resetUsernameAvailable());
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Save error!"));
    });
};

export const updateUserPicture = (picture) => async (dispatch, getState) => {
  const fd = new FormData();
  fd.append("picture", picture, picture.name);
  dispatch({ type: UPDATE_USER });
  await axios
    .patch(
      `${process.env.HOST}/api/users/${getState().authReducer.user.id}/`,
      fd,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
      dispatch(createNotification("SUCCESS", "Picture successfully saved!"));
      dispatch(resetUsernameAvailable());
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Save picture error!"));
    });
};

export const changePassword = (data) => async (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: CHANGE_PASSWORD,
  });
  await axios
    .post(
      `${process.env.HOST}/api/users/change_password/`,
      data,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);

      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
      dispatch(createNotification("SUCCESS", "Password succesfully changed"));
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const resetChangePasswordErrors = () => async (dispatch) => {
  dispatch({ type: RESET_CHANGE_PASSWORD_ERRORS });
};

export const changeEmail = (data) => async (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: CHANGE_EMAIL,
  });
  await axios
    .post(
      `${process.env.HOST}/api/users/change_email/`,
      data,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);

      dispatch({
        type: CHANGE_EMAIL_SUCCESS,
      });
      dispatch(createNotification("SUCCESS", "Change email sent"));
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_EMAIL_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const connectStripe = (authCode) => async (dispatch, getState) => {
  console.log(data);
  dispatch({
    type: STRIPE_CONNECTED,
  });
  await axios
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

export const toggleView = () => async (dispatch, getState) => {
  const view = getState().authReducer.user.seller_view;

  dispatch({
    type: TOOGLE_VIEWS,
    payload: !view,
  });
  await axios
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

export const inviteUser = (
  values,
  resetForm,
  handleHideInviteContact
) => async (dispatch, getState) => {
  dispatch({
    type: INVITE_USER,
  });
  await axios
    .post(
      `${process.env.HOST}/api/users/invite_user/`,
      values,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: INVITE_USER_SUCCESS,
        payload: res.data,
      });
      resetForm({});
      dispatch(resetInviteUser());
      dispatch(createNotification("SUCCESS", "Invitation has sent"));
      handleHideInviteContact();
    })
    .catch((err) => {
      dispatch({
        type: INVITE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const resetInviteUser = (values) => async (dispatch, getState) => {
  dispatch({
    type: RESET_INVITE_USER,
  });
};
export const resetAuthErrors = () => async (dispatch, getState) => {
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
