import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  activities: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  error: null,
};
export default function activitiesReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.ordersReducer };
    case FETCH_ACTIVITIES:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        is_loading: false,
        activities: action.payload,
        error: null,
      };
    case FETCH_ACTIVITIES_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
