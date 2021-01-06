import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  ADD_MESSAGE,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: false,
  messages: {
    results: [],
  },
  first_loading: false,
  error: null,
};
export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case FETCH_MESSAGES:
      return {
        ...state,
        is_loading: true,
        first_loading: false,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        is_loading: false,
        messages: action.payload,
        error: null,
        first_loading: true,
      };
    case FETCH_MESSAGES_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
        first_loading: false,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          results: [...state.messages.results, action.payload],
        },
      };
    default:
      return state;
  }
}
