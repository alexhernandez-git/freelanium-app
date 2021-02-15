import {
  FETCH_ORDER,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_ACTIVITIES,
  FETCH_ORDER_ACTIVITIES_SUCCESS,
  FETCH_ORDER_ACTIVITIES_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  order: null,
  error: null,
  is_loading_activities: false,
  activities: [],
  activities_error: null,
};
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case FETCH_ORDER:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        is_loading: false,
        order: action.payload,
        error: null,
      };
    case FETCH_ORDER_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };
    case FETCH_ORDER_ACTIVITIES:
      return {
        ...state,
        is_loading_activities: true,
      };
    case FETCH_ORDER_ACTIVITIES_SUCCESS:
      return {
        ...state,
        is_loading_activities: false,
        activities: action.payload,
        activities_error: null,
      };
    case FETCH_ORDER_ACTIVITIES_FAIL:
      return {
        ...state,
        is_loading_activities: false,
        activities_error: action.payload,
      };

    default:
      return state;
  }
}
