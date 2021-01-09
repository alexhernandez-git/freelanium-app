import {
  CREATE_CHAT,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAIL,
  FETCH_CHATS,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAIL,
  SET_CURRENT_CHAT,
  REMOVE_CURRENT_CHAT,
  SET_SEEN_CHAT,
  CHANGE_LAST_MESSAGE,
  NEW_MESSAGE_EVENT,
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
    case CHANGE_LAST_MESSAGE:
      // Select the chat to pass to first
      const changeChatSelected = state.chats.find(
        (chat) => chat.id == action.payload.chat__id
      );

      // Set the chats state array into a const to mutate
      const newChangeChatsArray = state.chats;

      // Get the selected chat index
      const changeChatIndex = newChangeChatsArray.findIndex(
        (chat) => chat.id === changeChatSelected.id
      );

      // Delete the chat selected from chats array
      newChangeChatsArray.splice(changeChatIndex, 1);

      // Insert the chat selected in the first place
      newChangeChatsArray.unshift(changeChatSelected);

      return {
        ...state,
        chats: newChangeChatsArray.map((chat) =>
          chat.id == action.payload.chat__id
            ? { ...chat, last_message: action.payload.message__text }
            : chat
        ),
      };
    case SET_SEEN_CHAT:
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id == action.payload
            ? { ...chat, last_message_seen: true }
            : chat
        ),
      };
    case NEW_MESSAGE_EVENT:
      // Select the chat to pass to first
      const chatSelected = state.chats.find(
        (chat) => chat.id == action.payload.chat__id
      );

      // Set the chats state array into a const to mutate
      const newChatsArray = state.chats;

      // Get the selected chat index
      const chatIndex = newChatsArray.findIndex(
        (chat) => chat.id === chatSelected.id
      );

      // Delete the chat selected from chats array
      newChatsArray.splice(chatIndex, 1);

      // Insert the chat selected in the first place
      newChatsArray.unshift(chatSelected);

      return {
        ...state,
        chats: newChatsArray.map((chat) =>
          chat.id == action.payload.chat__id
            ? {
                ...chat,
                last_message_seen: false,
                last_message: action.payload.message__text,
              }
            : chat
        ),
      };

    default:
      return state;
  }
}
