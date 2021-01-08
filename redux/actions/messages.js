import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  ADD_MESSAGE,
  CHANGE_LAST_MESSAGE,
  FETCH_MORE_MESSAGES,
  FETCH_MORE_MESSAGES_SUCCESS,
  FETCH_MORE_MESSAGES_FAIL,
} from "../types";
import { createNotification } from "./notifications";

export const fetchMessages = (id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_MESSAGES,
  });
  await axios
    .get(`${process.env.HOST}/api/chats/${id}/messages/`, tokenConfig(getState))
    .then(async (res) => {
      const results = await res.data.results.reverse();
      res.data.results = results;
      await dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_MESSAGES_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const addMessage = (data) => async (dispatch, getState) => {
  await dispatch({
    type: ADD_MESSAGE,
    payload: data,
  });
  await dispatch({
    type: CHANGE_LAST_MESSAGE,
    payload: { message: data.text, id: getState().chatReducer.chat.id },
  });
};

export const fetchMoreMessages = (chatRef, lastHeight) => async (
  dispatch,
  getState
) => {
  const url = getState().messagesReducer.messages.next;
  console.log(getState().messagesReducer.messages.next);
  if (url) {
    dispatch({
      type: FETCH_MORE_MESSAGES,
    });
    await axios
      .get(url, tokenConfig(getState))
      .then(async (res) => {
        const results_mm = await res.data.results.reverse();
        res.data.results = results_mm;
        await dispatch({
          type: FETCH_MORE_MESSAGES_SUCCESS,
          payload: res.data,
        });
        let scrollHeight = chatRef.current.scrollHeight;
        let newHeight = scrollHeight - lastHeight;
        chatRef.current.scrollTo(0, newHeight);
      })
      .catch((err) => {
        dispatch({
          type: FETCH_MORE_MESSAGES_FAIL,
          payload: { data: err.response.data, status: err.response.status },
        });
      });
  }
};
