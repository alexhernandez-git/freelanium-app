import axios from "axios";
import { tokenConfig } from "./auth";
import {
  CREATE_CHAT,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAIL,
  FETCH_CHATS,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAIL,
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
      await dispatch(fetchChat(res.data[0].id));
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHATS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const createChat = (user_id) => async (dispatch, getState) => {
  dispatch({
    type: CREATE_CHAT,
  });
  await axios
    .post(
      `${process.env.HOST}/api/contacts/`,
      { contact_user_id: user_id },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch(createNotification("SUCCESS", "User added to contacts"));

      dispatch({
        type: CREATE_CHAT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CHAT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Something has gone wrong"));
    });
};
