import axios from "axios";
import { tokenConfig } from "./auth";
import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
  SEARCH_CONTACTS,
  SEARCH_CONTACTS_SUCCESS,
  SEARCH_CONTACTS_FAIL,
  FETCH_AVAILABLE_CONTACTS,
  FETCH_AVAILABLE_CONTACTS_SUCCESS,
  FETCH_AVAILABLE_CONTACTS_FAIL,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  REMOVE_CONTACT,
  REMOVE_CONTACT_SUCCESS,
  REMOVE_CONTACT_FAIL,
} from "../types";
import { createNotification } from "./notifications";

export const fetchContacts = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_CONTACTS,
  });
  axios
    .get(`${process.env.HOST}/api/contacts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CONTACTS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
export const fetchContactsPagination = (url) => (dispatch, getState) => {
  dispatch({
    type: FETCH_CONTACTS,
  });
  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CONTACTS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const searchContacts = (search = "") => (dispatch, getState) => {
  dispatch({
    type: SEARCH_CONTACTS,
  });
  axios
    .get(
      `${process.env.HOST}/api/contacts/?search=${search}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: SEARCH_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_CONTACTS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const fetchAvailableContacts = (search = "") => (dispatch, getState) => {
  dispatch({
    type: FETCH_AVAILABLE_CONTACTS,
  });
  axios
    .get(
      `${process.env.HOST}/api/users/list_contacts_available/?search=${search}`,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_AVAILABLE_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_AVAILABLE_CONTACTS_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};

export const addContact = (user_id) => (dispatch, getState) => {
  dispatch({
    type: ADD_CONTACT,
  });
  axios
    .post(
      `${process.env.HOST}/api/contacts/`,
      { contact_user_id: user_id },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch(createNotification("SUCCESS", "User added to contacts"));

      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_CONTACT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createNotification("ERROR", "Something has gone wrong"));
    });
};

export const removeContact = (contact_id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CONTACT,
  });
  axios
    .delete(
      `${process.env.HOST}/api/contacts/${contact_id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: REMOVE_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REMOVE_CONTACT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
    });
};
