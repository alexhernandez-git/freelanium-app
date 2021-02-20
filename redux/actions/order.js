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
} from "../types";

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
    .then((res) => {
      dispatch({
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
    .then((res) => {
      dispatch({
        type: DELIVER_ORDER_SUCCESS,
      });
      resetForm({});
      handleCloseDeliveryOrderModal();
    })
    .catch((err) => {
      dispatch({
        type: DELIVER_ORDER_FAIL,
        payload: { data: err.response?.data, status: err.response?.status },
      });
    });
};
