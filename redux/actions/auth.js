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
  STRIPE_CONNECT,
  STRIPE_CONNECT_SUCCESS,
  STRIPE_CONNECT_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
  LOAD_USER_ERROR,
  SET_PENDING_NOTIFICATIONS,
  SET_PENDING_MESSAGES,
  UNSET_PENDING_NOTIFICATIONS,
  UNSET_PENDING_MESSAGES,
  ADD_BILLING_INFORMATION,
  ADD_BILLING_INFORMATION_SUCCESS,
  ADD_BILLING_INFORMATION_FAIL,
  CHANGE_PAYMENT_METHOD,
  CHANGE_PAYMENT_METHOD_SUCCESS,
  CHANGE_PAYMENT_METHOD_FAIL,
  CHANGE_CURRENCY,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_FAIL,
  REACTIVATE_SUBSCRIPTION,
  REACTIVATE_SUBSCRIPTION_SUCCESS,
  REACTIVATE_SUBSCRIPTION_FAIL,
  BECOME_A_SELLER,
  BECOME_A_SELLER_SUCCESS,
  BECOME_A_SELLER_FAIL,
  ADD_PAYMENT_METHOD,
  ADD_PAYMENT_METHOD_SUCCESS,
  ADD_PAYMENT_METHOD_FAIL,
} from "../types";
import { createAlert } from "./alerts";

// SET TOKEN
// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  await dispatch({ type: USER_LOADING });
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
        type: LOAD_USER_ERROR,
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

export const register_seller = (data, router) => async (dispatch, getState) => {
  dispatch({
    type: REGISTER,
  });
  const currency = getState().authReducer.currency;
  if (currency) {
    data.currency = currency;
  }
  await axios
    .post(`${process.env.HOST}/api/users/signup_seller/`, data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      router.push("/dashboard");
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const register_buyer = (data) => async (dispatch, getState) => {
  dispatch({
    type: REGISTER,
  });
  await axios
    .post(`${process.env.HOST}/api/users/signup_buyer/`, data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
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
  console.log(token);
  await axios
    .post(`${process.env.HOST}/api/users/verify/`, { token: token })
    .then((res) => {
      dispatch({
        type: VERIFY_ACCOUNT_SUCCESS,
      });
      dispatch(createAlert("SUCCESS", res.data.message));
      router.push("/");
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_ACCOUNT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Error at verify your account"));
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
      dispatch(createAlert("SUCCESS", res.data.message));
      router.push("/");
    })
    .catch((err) => {
      dispatch({
        type: VALIDATE_CHANGE_EMAIL_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Error at verify your account"));
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
      dispatch(createAlert("SUCCESS", "Reset password email sent"));
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
      dispatch(createAlert("SUCCESS", "Password succesfully changed"));
      router.push("/login");
    })
    .catch((err) => {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Error at change your password"));
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
      dispatch(createAlert("SUCCESS", "Successfully saved!"));
      dispatch(resetUsernameAvailable());
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Save error!"));
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
      dispatch(createAlert("SUCCESS", "Picture successfully saved!"));
      dispatch(resetUsernameAvailable());
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Save picture error!"));
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
      dispatch(createAlert("SUCCESS", "Password succesfully changed"));
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
      dispatch(createAlert("SUCCESS", "Change email sent"));
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_EMAIL_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const stripeConnect = (auth_code) => async (dispatch, getState) => {
  dispatch({
    type: STRIPE_CONNECT,
  });
  await axios
    .post(
      `${process.env.HOST}/api/users/stripe_connect/`,
      { auth_code: auth_code },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: STRIPE_CONNECT_SUCCESS,
        payload: res.data,
      });
      dispatch(createAlert("SUCCESS", "Connected with Stripe"));
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Error at connect with Stripe"));
      dispatch({
        type: STRIPE_CONNECT_FAIL,
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
      dispatch(createAlert("SUCCESS", "Invitation has sent"));
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
export const setPendingNotifications = () => async (dispatch, getState) => {
  dispatch({
    type: SET_PENDING_NOTIFICATIONS,
  });
};

export const setPendingMessages = () => async (dispatch, getState) => {
  dispatch({
    type: SET_PENDING_MESSAGES,
  });
};
export const unsetPendingNotifications = () => async (dispatch, getState) => {
  dispatch({
    type: UNSET_PENDING_NOTIFICATIONS,
  });
};

export const unsetPendingMessages = () => async (dispatch, getState) => {
  dispatch({
    type: UNSET_PENDING_MESSAGES,
  });
};

export const addBillingInformation = (values, payment_method) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: ADD_BILLING_INFORMATION,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/seller_add_payment_method/`,
      {
        ...values,
        payment_method_id: payment_method.id,
      },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_BILLING_INFORMATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Something went wrong with Stripe"));
      dispatch({
        type: ADD_BILLING_INFORMATION_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const loadCurrency = () => async (dispatch, getState) => {
  // User Loading
  const currency = localStorage.getItem("currency");
  if (currency) return;
  await axios
    .get(`${process.env.HOST}/api/users/get_currency/`)
    .then(async (res) => {
      await dispatch({
        type: CHANGE_CURRENCY,
        payload: res.data.currency,
      });
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_CURRENCY,
        payload: "USD",
      });
    });
};

export const changeCurrency = (currency) => async (dispatch, getState) => {
  await dispatch({
    type: CHANGE_CURRENCY,
    payload: currency,
  });
  if (getState().authReducer.is_authenticated) {
    await dispatch(updateUser({ currency: currency }));
  }
};

export const changePaymentMethod = (
  values,
  handleCloseChangePaymentMethod,
  resetForm
) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_PAYMENT_METHOD,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/seller_change_payment_method/`,
      values,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: CHANGE_PAYMENT_METHOD_SUCCESS,
        payload: res.data,
      });
      resetForm({});
      handleCloseChangePaymentMethod();
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Something went wrong"));
      dispatch({
        type: CHANGE_PAYMENT_METHOD_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const cancelSubscription = (handleHideModal) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: CANCEL_SUBSCRIPTION,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/seller_cancel_subscription/`,
      {},
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(
        createAlert("SUCCESS", "Your plan will cancel at end of billing cycle")
      );

      dispatch({
        type: CANCEL_SUBSCRIPTION_SUCCESS,
        payload: res.data,
      });
      handleHideModal();
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Something went wrong with Stripe"));
      dispatch({
        type: CANCEL_SUBSCRIPTION_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const reactivateSubscription = () => async (dispatch, getState) => {
  dispatch({
    type: REACTIVATE_SUBSCRIPTION,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/seller_reactivate_subscription/`,
      {},
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(
        createAlert("SUCCESS", "Your plan has been succesfully reactivated")
      );

      dispatch({
        type: REACTIVATE_SUBSCRIPTION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Something went wrong with Stripe"));
      dispatch({
        type: REACTIVATE_SUBSCRIPTION_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const becomeASeller = () => async (dispatch, getState) => {
  dispatch({
    type: BECOME_A_SELLER,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/become_a_seller/`,
      {},
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(
        createAlert("SUCCESS", "Your plan has been succesfully reactivated")
      );

      dispatch({
        type: BECOME_A_SELLER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", "Something went wrong with Stripe"));
      dispatch({
        type: BECOME_A_SELLER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const attachPaymentMethod = (
  values,
  handleCloseAddPaymentMethod,
  resetForm
) => async (dispatch, getState) => {
  dispatch({
    type: ADD_PAYMENT_METHOD,
  });
  await axios
    .patch(
      `${process.env.HOST}/api/users/attach_payment_method/`,
      values,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(
        createAlert("SUCCESS", "Your plan has been succesfully reactivated")
      );

      dispatch({
        type: ADD_PAYMENT_METHOD_SUCCESS,
        payload: res.data,
      });
      resetForm({});
      handleCloseAddPaymentMethod();
    })
    .catch((err) => {
      dispatch({
        type: ADD_PAYMENT_METHOD_FAIL,
        payload: { data: err.response?.data, status: err.response.status },
      });
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
