import axios from "axios";
import { tokenConfig } from "./auth";
import {
  CREATE_CHAT,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAIL,
  FETCH_CHATS,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAIL,
  SET_CURRENT_CHAT,
  NEW_MESSAGE_EVENT,
  CHANGE_LAST_MESSAGE,
} from "../types";
import { createNotification } from "./notifications";
import { fetchChat } from "./chat";

export const fetchChats = () => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_CHATS,
  });
  await axios
    .get(`${process.env.HOST}/api/chats/`, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_CHATS_SUCCESS,
        payload: res.data,
      });
      const current_chat = getState().chatsReducer.current_chat;
      if (current_chat) {
        console.log("entra");
        await dispatch(fetchChat(current_chat.id));
      } else {
        await dispatch(fetchChat(res.data[0].id));
      }
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHATS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const getOrCreateChat = (user_id, push) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: CREATE_CHAT,
  });
  console.log(user_id);
  await axios
    .post(
      `${process.env.HOST}/api/chats/`,
      { to_user: user_id },
      tokenConfig(getState)
    )
    .then(async (res) => {
      if (res.status == 201) {
        await dispatch({
          type: CREATE_CHAT_SUCCESS,
          payload: res.data,
        });
      }
      await dispatch({ type: SET_CURRENT_CHAT, payload: res.data });
      push("/dashboard/messages");
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CHAT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Something went wrong"));
    });
};

export const newMessageEvent = (chat__id, message__text) => async (
  dispatch
) => {
  dispatch({
    type: NEW_MESSAGE_EVENT,
    payload: { chat__id: chat__id, message__text: message__text },
  });
};

export const changeLastMessage = (chat__id, message__text) => async (
  dispatch
) => {
  console.log(chat__id, message__text);
  dispatch({
    type: CHANGE_LAST_MESSAGE,
    payload: { chat__id: chat__id, message__text: message__text },
  });
};
