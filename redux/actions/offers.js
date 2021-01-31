import axios from "axios";
import {
  SEARCH_BUYERS,
  SEARCH_BUYERS_SUCCESS,
  SEARCH_BUYERS_FAIL,
  CREATE_OFFER,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAIL,
  FETCH_OFFER,
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
  ACCEPT_OFFER,
  ACCEPT_OFFER_SUCCESS,
  ACCEPT_OFFER_FAIL,
} from "../types";
import { createAlert } from "./alerts";
import { tokenConfig } from "./auth";

export const fetchOffer = (offer_id) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_OFFER,
  });
  await axios
    .get(`${process.env.HOST}/api/offers/${offer_id}/`, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_OFFER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", err.response.data));
      dispatch({
        type: FETCH_OFFER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

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

export const createOffer = (
  offer,
  handleCloseSendOfferModal,
  resetForm,
  handleUnselectBuyer,
  handleUnsetBuyerEmail
) => async (dispatch, getState) => {
  await dispatch({
    type: CREATE_OFFER,
  });
  await axios
    .post(`${process.env.HOST}/api/offers/`, offer, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: CREATE_OFFER_SUCCESS,
        payload: res.data,
      });
      handleCloseSendOfferModal();
      resetForm({});
      handleUnselectBuyer();
      handleUnsetBuyerEmail();
      dispatch(createAlert("SUCCESS", "Offer successfully created"));
    })
    .catch((err) => {
      dispatch({
        type: CREATE_OFFER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const acceptOffer = (data) => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_OFFER,
  });
  console.log(data);
  await axios
    .post(`${process.env.HOST}/api/orders/`, data, tokenConfig(getState))
    .then(async (res) => {
      await dispatch({
        type: FETCH_OFFER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(createAlert("ERROR", err.response.data));
      dispatch({
        type: FETCH_OFFER_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
