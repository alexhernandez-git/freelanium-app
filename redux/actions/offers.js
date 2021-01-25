import axios from "axios";
import {
  SEARCH_BUYERS,
  SEARCH_BUYERS_SUCCESS,
  SEARCH_BUYERS_FAIL,
} from "../types";

export const searchBuyers = (search = "") => async (dispatch, getState) => {
  await dispatch({
    type: SEARCH_BUYERS,
  });
  await axios
    .get(`${process.env.HOST}/api/users/?search=${search}`)
    .then(async (res) => {
      await dispatch({
        type: SEARCH_BUYERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_BUYERS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
