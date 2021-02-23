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
  CANCELATION_REQUEST,
  CANCELATION_REQUEST_SUCCESS,
  CANCELATION_REQUEST_FAIL,
  CANCEL_CANCELATION_REQUEST,
  CANCEL_CANCELATION_REQUEST_SUCCESS,
  CANCEL_CANCELATION_REQUEST_FAIL,
  ACCEPT_CANCELATION_REQUEST,
  ACCEPT_CANCELATION_REQUEST_SUCCESS,
  ACCEPT_CANCELATION_REQUEST_FAIL,
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
  cancelling_cancelation_request: false,
  cancel_cancelation_request_error: null,
  accepting_cancelation_request: false,
  accept_cancelation_request_error: null,
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
        delivery_error: null,
      };
    case DELIVER_ORDER_FAIL:
      return {
        ...state,
        delivering_order: false,
        delivery_error: action.payload,
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
        request_cancelation_error: null,
      };
    case CANCELATION_REQUEST_FAIL:
      return {
        ...state,
        requesting_cancelation: false,
        request_cancelation_error: action.payload,
      };
    case CANCEL_CANCELATION_REQUEST:
      return {
        ...state,
        cancelling_cancelation_request: true,
      };
    case CANCEL_CANCELATION_REQUEST_SUCCESS:
      return {
        ...state,
        cancelling_cancelation_request: false,
        activities: [
          {
            id: Math.random().toString(36).substring(7),
            type: "CA",
            activity: {
              id: Math.random().toString(36).substring(7),
              cancel_order: {
                ...action.payload,
              },
              status: "CA",
            },
            created: new Date(),
          },
          ...state.activities,
        ],
        cancel_cancelation_request_error: null,
      };
    case CANCEL_CANCELATION_REQUEST_FAIL:
      return {
        ...state,
        cancelling_cancelation_request: false,
        cancel_cancelation_request_error: action.payload,
      };
    case ACCEPT_CANCELATION_REQUEST:
      return {
        ...state,
        accepting_cancelation_request: true,
      };
    case ACCEPT_CANCELATION_REQUEST_SUCCESS:
      return {
        ...state,
        accepting_cancelation_request: false,
        activities: [
          {
            id: Math.random().toString(36).substring(7),
            type: "CA",
            activity: {
              id: Math.random().toString(36).substring(7),
              cancel_order: {
                ...action.payload,
              },
              status: "AC",
            },
            created: new Date(),
          },
          ...state.activities,
        ],
        accept_cancelation_request_error: null,
      };
    case ACCEPT_CANCELATION_REQUEST_FAIL:
      return {
        ...state,
        accepting_cancelation_request: false,
        accept_cancelation_request_error: action.payload,
      };
    default:
      return state;
  }
}
