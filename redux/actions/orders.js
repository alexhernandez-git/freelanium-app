import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
} from "../types";

export const fetchOrders = (search = "") => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_ORDERS,
  });
  await axios
    .get(
      `${process.env.HOST}/api/orders/?search=${search}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ORDERS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const fetchOrdersPagination = (url) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_ORDERS,
  });
  await axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ORDERS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
