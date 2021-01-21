import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_INVOICES,
  FETCH_INVOICES_SUCCESS,
  FETCH_INVOICES_FAIL,
} from "../types";

export const fetchSellerInvoces = () => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_INVOICES,
  });
  await axios
    .get(`${process.env.HOST}/api/users/list_invoices`, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_INVOICES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_INVOICES_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
