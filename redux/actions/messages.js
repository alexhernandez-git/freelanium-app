import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
} from "../types";
import { createNotification } from "./notifications";

export const fetchMessages = (id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_MESSAGES,
  });
  await axios
    .get(`${process.env.HOST}/api/chats/${id}/messages/`, tokenConfig(getState))
    .then(async (res) => {
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
