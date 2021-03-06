import {
  FETCH_DASHBOARD_ORDERS,
  FETCH_DASHBOARD_ORDERS_SUCCESS,
  FETCH_DASHBOARD_ORDERS_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  orders: [],
  error: null,
};
export default function dashboardOrdersReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.ordersReducer };
    case FETCH_DASHBOARD_ORDERS:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_DASHBOARD_ORDERS_SUCCESS:
      return {
        ...state,
        is_loading: false,
        orders: action.payload,
        error: null,
      };
    case FETCH_DASHBOARD_ORDERS_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
