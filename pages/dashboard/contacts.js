import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import InviteContactForm from "components/pages/dashboard/contacts/InviteContactForm";
import SearchContacts from "components/pages/dashboard/contacts/SearchContacts";
import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import useAuthRequired from "hooks/useAuthRequired";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Dashboard/Layout";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAvailableContacts,
  fetchContacts,
  fetchContactsPagination,
  searchContacts,
} from "redux/actions/contacts";

import Pagination from "components/ui/Pagination";
import Spinner from "components/ui/Spinner";

export default function Home() {
  const [cantRender, authReducer, initialData] = useAuthRequired();
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (search != "") {
      const timeoutId = setTimeout(async () => {
        setIsSearching(true);
        await dispatch(searchContacts(search));

        await dispatch(fetchAvailableContacts(search));
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setIsSearching(false);
    }
  }, [search]);
  const handleSearchContacts = async () => {
    if (search != "") {
      setIsSearching(true);

      await dispatch(searchContacts(search));

      await dispatch(fetchAvailableContacts(search));
    }
  };
  const [inviteContact, setInviteContact] = useState(false);
  const handleShowInviteContact = () => {
    setInviteContact(true);
  };
  const handleHideInviteContact = () => {
    if (inviteContact) {
      setInviteContact(false);
    }
  };
  const inviteContactRef = useRef();

  useOutsideClick(inviteContactRef, () => handleHideInviteContact());

  useEffect(() => {
    if (initialData) {
      const handleFetchContacts = async () => await dispatch(fetchContacts());
      handleFetchContacts();
    }
  }, [initialData]);

  const contactsReducer = useSelector((state) => state.contactsReducer);

  const handleChangePage = (url) => {
    dispatch(fetchContactsPagination(url));
    window.scrollTo(0, 0);
  };
  const handleHideSearching = () => {
    setIsSearching(false);
  };
  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <Layout
      pageName={!isSearching && "Contacts"}
      goBack={isSearching && handleHideSearching}
      searchBar="Search Contacts"
      searchState={{ search, setSearch }}
      onSearchClick={handleSearchContacts}
    >
      {isSearching ? (
        <>
          <SearchContacts handleShowInviteContact={handleShowInviteContact} />
        </>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={handleShowInviteContact}
              type="button"
              className={`inline-flex items-center px-3 py-2 border border-transparent 
            text-sm leading-4 font-medium rounded-md shadow-sm text-white 
            bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none`}
            >
              Invite Contacts
            </button>
          </div>
          {!contactsReducer.is_loading &&
            contactsReducer.contacts &&
            contactsReducer.contacts.results.length == 0 && (
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      You don't have contacts.
                      <a
                        onClick={handleShowInviteContact}
                        className="cursor-pointer ml-2 font-medium underline  text-blue-700 hover:text-blue-600"
                      >
                        Invite your contacts.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
            <>
              {contactsReducer.contacts &&
                contactsReducer.contacts.results.length > 0 &&
                contactsReducer.contacts.results.map((contact) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact.contact_user}
                    id={contact.id}
                  />
                ))}
            </>
          </ul>
          {contactsReducer.contacts &&
            (contactsReducer.contacts.previous ||
              contactsReducer.contacts.next) && (
              <Pagination
                previous={contactsReducer.contacts.previous}
                next={contactsReducer.contacts.next}
                changePage={handleChangePage}
              />
            )}
        </>
      )}
      <InviteContactForm
        inviteContact={inviteContact}
        inviteContactRef={inviteContactRef}
        handleHideInviteContact={handleHideInviteContact}
      />
    </Layout>
  );
}
