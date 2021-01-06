import {
  CREATE_CHAT,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAIL,
  FETCH_CHATS,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAIL,
  SET_CURRENT_CHAT,
  REMOVE_CURRENT_CHAT,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  is_loading: false,
  chats: [],
  error: null,
  creating_chat: false,
  create_chat_error: null,
  current_chat: null,
};
export default function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case FETCH_CHATS:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        is_loading: false,
        chats: action.payload,
        error: null,
      };
    case FETCH_CHATS_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };
    case CREATE_CHAT:
      return {
        ...state,
        creating_chat: true,
      };
    case CREATE_CHAT_SUCCESS:
      return {
        ...state,
        creating_chat: false,
        create_chat_error: null,
      };
    case CREATE_CHAT_FAIL:
      return {
        ...state,
        creating_chat: false,
        create_chat_error: action.payload,
      };
    case SET_CURRENT_CHAT:
      return {
        ...state,
        current_chat: action.payload,
      };
    case REMOVE_CURRENT_CHAT:
      return {
        ...state,
        current_chat: null,
      };
    default:
      return state;
  }
}
