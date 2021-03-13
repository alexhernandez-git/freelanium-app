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
import { createAlert } from "./alerts";

export const fetchContacts = () => async (dispatch, getState) => {
  await dispatch({
    type: FETCH_CONTACTS,
  });
  await axios
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
export const fetchContactsPagination = (url) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_CONTACTS,
  });
  await axios
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

export const searchContacts = (search = "") => async (dispatch, getState) => {
  console.log("entra search contacts");
  dispatch({
    type: SEARCH_CONTACTS,
  });
  await axios
    .get(
      `${process.env.HOST}/api/contacts/?search=${search}`,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log("res-data contacts", res.data);
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

export const fetchAvailableContacts = (search = "") => async (
  dispatch,
  getState
) => {
  dispatch({
    type: FETCH_AVAILABLE_CONTACTS,
  });
  await axios
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

export const addContact = (user_id) => async (dispatch, getState) => {
  dispatch({
    type: ADD_CONTACT,
  });
  await axios
    .post(
      `${process.env.HOST}/api/contacts/`,
      { contact_user_id: user_id },
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);
      dispatch(createAlert("SUCCESS", "User added to contacts"));

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
      dispatch(createAlert("ERROR", "Something has gone wrong"));
    });
};

export const removeContact = (contact_id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CONTACT,
  });
  await axios
    .delete(
      `${process.env.HOST}/api/contacts/${contact_id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res.data);

      dispatch({
        type: REMOVE_CONTACT_SUCCESS,
        payload: contact_id,
      });
      dispatch(createAlert("SUCCESS", "Contact succesfully removed"));
    })
    .catch((err) => {
      dispatch({
        type: REMOVE_CONTACT_FAIL,
        payload: { data: err.response.data, status: err.response.status },
      });
      dispatch(createAlert("ERROR", "Error happened at remove contact"));
    });
};
