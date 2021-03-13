import {
  SEARCH_BUYERS,
  SEARCH_BUYERS_SUCCESS,
  SEARCH_BUYERS_FAIL,
  CREATE_OFFER,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAIL,
  FETCH_OFFER,
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
  ACCEPT_OFFER,
  ACCEPT_OFFER_SUCCESS,
  ACCEPT_OFFER_FAIL,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: true,
  offer: null,
  error: null,
  creating_offer: false,
  create_offer_error: null,
  searching_buyers: false,
  buyers: null,
  search_buyers_error: null,
  accepting_offer: false,
  order_accepted: false,
  accept_offer_error: null,
};
export default function offersReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    //   return { ...state, ...action.payload.offersReducer };
    case FETCH_OFFER:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_OFFER_SUCCESS:
      return {
        ...state,
        is_loading: false,
        offer: action.payload,
        error: null,
      };
    case FETCH_OFFER_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };
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
        create_offer_error: action.payload,
      };
    case CREATE_OFFER:
      return {
        ...state,
        creating_offer: true,
      };
    case CREATE_OFFER_SUCCESS:
      return {
        ...state,
        creating_offer: false,
        create_offer_error: null,
      };
    case CREATE_OFFER_FAIL:
      return {
        ...state,
        creating_offer: false,
        create_offer_error: action.payload,
      };
    case ACCEPT_OFFER:
      return {
        ...state,
        accepting_offer: true,
      };
    case ACCEPT_OFFER_SUCCESS:
      return {
        ...state,
        accepting_offer: false,
        order_accepted: action.payload,
        accept_offer_error: null,
      };
    case ACCEPT_OFFER_FAIL:
      return {
        ...state,
        accepting_offer: false,
        accept_offer_error: action.payload,
      };
    default:
      return state;
  }
}
