import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_ORDER,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_ACTIVITIES,
  FETCH_ORDER_ACTIVITIES_SUCCESS,
  FETCH_ORDER_ACTIVITIES_FAIL,
  DELIVER_ORDER,
  DELIVER_ORDER_SUCCESS,
  DELIVER_ORDER_FAIL,
  ADD_DELIVERY_TO_ORDER,
  CANCELATION_REQUEST,
  CANCELATION_REQUEST_SUCCESS,
  CANCELATION_REQUEST_FAIL,
  ADD_CANCELATION_REQUEST_TO_ORDER,
} from "../types";
import { createAlert } from "./alerts";

export const fetchOrder = (id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_ORDER,
  });
  await axios
    .get(`${process.env.HOST}/api/orders/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ORDER_FAIL,
        payload: { data: err.response?.data, status: err.response?.status },
      });
    });
};

export const fetchOrderActivities = (id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_ORDER_ACTIVITIES,
  });
  await axios
    .get(
      `${process.env.HOST}/api/orders/${id}/activities/`,
      tokenConfig(getState)
    )
    .then(async (res) => {
      await dispatch({
        type: FETCH_ORDER_ACTIVITIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ORDER_ACTIVITIES_FAIL,
        payload: { data: err.response?.data, status: err.response?.status },
      });
    });
};

export const deliveryOrder = (
  values,
  resetForm,
  handleCloseDeliveryOrderModal
) => async (dispatch, getState) => {
  await dispatch({
    type: DELIVER_ORDER,
  });

  await axios
    .post(
      `${process.env.HOST}/api/orders/${
        getState().orderReducer.order.id
      }/deliveries/`,
      values,
      tokenConfig(getState)
    )
    .then(async (res) => {
      try {
        await dispatch({
          type: ADD_DELIVERY_TO_ORDER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
      try {
        await dispatch({
          type: DELIVER_ORDER_SUCCESS,
        });
      } catch (error) {
        console.log(error);
      }

      await resetForm({});
      await handleCloseDeliveryOrderModal();
      try {
        await dispatch(createAlert("SUCCESS", "Order successfully delivered"));
      } catch (error) {
        console.log(error);
      }
    })
    .catch(async (err) => {
      await dispatch({
        type: DELIVER_ORDER_FAIL,
        payload: { data: err.response?.data, status: err.response?.status },
      });
    });
};

export const requestCancelation = (
  values,
  resetForm,
  handleCloseRequestCancelationModal
) => async (dispatch, getState) => {
  await dispatch({
    type: CANCELATION_REQUEST,
  });

  await axios
    .post(
      `${process.env.HOST}/api/orders/${
        getState().orderReducer.order.id
      }/cancel-orders/`,
      values,
      tokenConfig(getState)
    )
    .then(async (res) => {
      try {
        await dispatch({
          type: ADD_CANCELATION_REQUEST_TO_ORDER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
      try {
        await dispatch({
          type: CANCELATION_REQUEST_SUCCESS,
        });
      } catch (error) {
        console.log(error);
      }

      await resetForm({});
      await handleCloseRequestCancelationModal();
      try {
        await dispatch(createAlert("SUCCESS", "Order cancelation requested"));
      } catch (error) {
        console.log(error);
      }
    })
    .catch(async (err) => {
      await dispatch({
        type: CANCELATION_REQUEST_FAIL,
        payload: { data: err.response?.data, status: err.response?.status },
      });
    });
};
