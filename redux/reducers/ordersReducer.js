import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  orders: { results: [] },
  error: null,
};
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.ordersReducer };
    case FETCH_ORDERS:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        is_loading: false,
        orders: action.payload,
        error: null,
      };
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
