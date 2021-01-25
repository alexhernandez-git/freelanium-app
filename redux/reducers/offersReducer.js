import {
  SEARCH_BUYERS,
  SEARCH_BUYERS_SUCCESS,
  SEARCH_BUYERS_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: false,
  error: null,
  searching_buyers: false,
  buyers: null,
  search_buyers_error: null,
};
export default function offersReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case SEARCH_BUYERS:
      return {
        ...state,
        searching_buyers: true,
      };
    case SEARCH_BUYERS_SUCCESS:
      return {
        ...state,
        searching_buyers: false,
        buyers: action.payload,
        search_buyers_error: null,
      };
    case SEARCH_BUYERS_FAIL:
      return {
        ...state,
        searching_buyers: false,
        search_buyers_error: action.payload,
      };

    default:
      return state;
  }
}
