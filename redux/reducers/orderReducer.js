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
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  order: null,
  error: null,
  is_loading_activities: false,
  activities: [],
  activities_error: null,
  delivering_order: false,
  delivery_error: null,
  requesting_cancelation: false,
  request_cancelation_error: null,
};
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.orderReducer };
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

    case DELIVER_ORDER:
      return {
        ...state,
        delivering_order: true,
      };
    case DELIVER_ORDER_SUCCESS:
      return {
        ...state,
        delivering_order: false,
        delivery_error: null,
      };
    case DELIVER_ORDER_FAIL:
      return {
        ...state,
        delivering_order: false,
        delivery_error: action.payload,
      };
    case ADD_DELIVERY_TO_ORDER:
      return {
        ...state,
        activities: [
          {
            id: Math.random().toString(36).substring(7),
            type: "DE",
            activity: {
              id: Math.random().toString(36).substring(7),
              delivery: {
                ...action.payload,
              },
              status: "PE",
            },
            created: new Date(),
          },
          ...state.activities,
        ],
      };
    case CANCELATION_REQUEST:
      return {
        ...state,
        requesting_cancelation: true,
      };
    case CANCELATION_REQUEST_SUCCESS:
      return {
        ...state,
        requesting_cancelation: false,
        request_cancelation_error: null,
      };
    case CANCELATION_REQUEST_FAIL:
      return {
        ...state,
        requesting_cancelation: false,
        request_cancelation_error: action.payload,
      };
    case ADD_CANCELATION_REQUEST_TO_ORDER:
      return {
        ...state,
        activities: [
          {
            id: Math.random().toString(36).substring(7),
            type: "CA",
            activity: {
              id: Math.random().toString(36).substring(7),
              cancel_order: {
                ...action.payload,
              },
              status: "PE",
            },
            created: new Date(),
          },
          ...state.activities,
        ],
      };
    default:
      return state;
  }
}
