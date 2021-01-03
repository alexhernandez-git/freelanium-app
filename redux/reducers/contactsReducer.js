import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAIL,
  FETCH_AVAILABLE_CONTACTS,
  FETCH_AVAILABLE_CONTACTS_SUCCESS,
  FETCH_AVAILABLE_CONTACTS_FAIL,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  REMOVE_CONTACT,
  REMOVE_CONTACT_SUCCESS,
  REMOVE_CONTACT_FAIL,
  SEARCH_CONTACTS,
  SEARCH_CONTACTS_SUCCESS,
  SEARCH_CONTACTS_FAIL,
} from "../types";
const initialState = {
  is_loading: false,
  contacts: {
    results: [],
  },
  error: null,
  is_loading_search: false,
  contacts_search: {
    results: [],
  },
  search_error: null,
  is_loading_available_contacts: false,
  available_contacts: {
    results: [],
  },
  available_contacts_error: null,
  adding_contact: false,
  adding_contact_error: null,
  removing_contact: false,
  removing_contact_error: null,
};
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        is_loading: false,
        contacts: action.payload,
        error: null,
      };
    case FETCH_CONTACTS_FAIL:
      return {
        ...state,
        is_loading: false,
        error: action.payload,
      };
    case FETCH_AVAILABLE_CONTACTS:
      return {
        ...state,
        is_loading_available_contacts: true,
      };
    case FETCH_AVAILABLE_CONTACTS_SUCCESS:
      return {
        ...state,
        is_loading_available_contacts: false,
        available_contacts: action.payload,
        available_contacts_error: null,
      };
    case FETCH_AVAILABLE_CONTACTS_FAIL:
      return {
        ...state,
        is_loading_available_contacts: false,
        available_contacts_error: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        adding_contact: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        adding_contact: false,
        contacts: [...state.contacts.results, action.payload],
        adding_contact_error: null,
      };
    case ADD_CONTACT_FAIL:
      return {
        ...state,
        adding_contact: false,
        adding_contact_error: action.payload,
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        removing_contact: true,
      };
    case REMOVE_CONTACT_SUCCESS:
      return {
        ...state,

        removing_contact: false,
        contacts: state.contacts.results.filter(
          (contact) => contact.id !== action.payload
        ),
        removing_contact_error: null,
      };
    case REMOVE_CONTACT_FAIL:
      return {
        ...state,

        removing_contact: false,
        removing_contact_error: action.payload,
      };
    case SEARCH_CONTACTS:
      return {
        ...state,

        is_loading_search: true,
      };
    case SEARCH_CONTACTS_SUCCESS:
      console.log("action payload", action.payload);

      return {
        ...state,
        is_loading_search: false,
        contacts_search: action.payload,
        error_search: null,
      };
    case SEARCH_CONTACTS_FAIL:
      return {
        ...state,
        is_loading_search: false,
        error_search: action.payload,
      };
    default:
      return state;
  }
}
