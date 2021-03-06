import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_DASHBOARD_ORDERS,
  FETCH_DASHBOARD_ORDERS_SUCCESS,
  FETCH_DASHBOARD_ORDERS_FAIL,
} from "../types";

export const fetchDashboardOrders = (status = "ACTIVE") => async (
  dispatch,
  getState
) => {
  await dispatch({
    type: FETCH_DASHBOARD_ORDERS,
  });
  let query;
  switch (status) {
    case "ACTIVE":
      query = `${process.env.HOST}/api/orders/active_orders/`;
      break;
    case "COMPLETED":
      query = `${process.env.HOST}/api/orders/completed_orders/`;
      break;

    case "CANCELLED":
      query = `${process.env.HOST}/api/orders/cancelled_orders/`;
      break;
  }
  await axios
    .get(query, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_DASHBOARD_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(async (err) => {
      await dispatch({
        type: FETCH_DASHBOARD_ORDERS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
