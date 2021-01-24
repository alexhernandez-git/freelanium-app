import { FIND_BUYERS, FIND_BUYERS_SUCCESS, FIND_BUYERS_FAIL } from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  finding_buyers: false,
  error: false,
  finding_buyers: false,
  buyers: null,
  find_buyers_error: null,
};
export default function offersReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case FIND_BUYERS:
      return {
        ...state,
        finding_buyers: true,
      };
    case FIND_BUYERS_SUCCESS:
      return {
        ...state,
        finding_buyers: false,
        buyers: action.payload,
        find_buyers_error: null,
      };
    case FIND_BUYERS_FAIL:
      return {
        ...state,
        finding_buyers: false,
        find_buyers_error: action.payload,
      };

    default:
      return state;
  }
}
