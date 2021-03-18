import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_FAIL,
} from "../types";

export const fetchActivities = (search = "") => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_ACTIVITIES,
  });
  await axios
    .get(`${process.env.HOST}/api/activities/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_ACTIVITIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ACTIVITIES_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const fetchActivitiesPagination = (url) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: FETCH_ACTIVITIES,
  });
  await axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_ACTIVITIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ACTIVITIES_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
