import {
  FETCH_INVOICES,
  FETCH_INVOICES_SUCCESS,
  FETCH_INVOICES_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: false,
  invoices: [],
  error: null,
};
export default function sellerInvoicesReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.sellerInvoicesReducer };
    case FETCH_INVOICES:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_INVOICES_SUCCESS:
      return {
        ...state,
        is_loading: false,
        invoices: action.payload.data,
        error: null,
      };
    case FETCH_INVOICES_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
