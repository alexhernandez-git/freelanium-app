import axios from "axios";
import { tokenConfig } from "./auth";
import { FETCH_CHAT, FETCH_CHAT_SUCCESS, FETCH_CHAT_FAIL } from "../types";
import { createNotification } from "./notifications";
import { fetchMessages } from "./messages";

export const fetchChat = (id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_CHAT,
  });
  await axios
    .get(`${process.env.HOST}/api/chats/${id}`, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_CHAT_SUCCESS,
        payload: res.data,
      });
      await dispatch(fetchMessages(res.data.id));
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHAT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
