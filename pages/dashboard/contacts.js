import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import InviteContactForm from "components/pages/dashboard/contacts/InviteContactForm";
import SearchContacts from "components/pages/dashboard/contacts/SearchContacts";
import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
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

export default function Home() {
  const [cantRender, authReducer] = useAuthRequired();
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
    if (!authReducer.is_loading && authReducer.is_authenticated) {
      const handleFetchContacts = async () => await dispatch(fetchContacts());
      handleFetchContacts();
    }
  }, [authReducer.is_loading]);

  const contactsReducer = useSelector((state) => state.contactsReducer);

  const handleChangePage = (url) => {
    dispatch(fetchContactsPagination(url));
    window.scrollTo(0, 0);
  };
  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout
      pageName={isSearching ? "Search Contacts" : "Contacts"}
      searchBar="Search / Add Contacts"
      searchState={{ search, setSearch }}
    >
      {isSearching ? (
        <>
          <SearchContacts handleShowInviteContact={handleShowInviteContact} />
        </>
      ) : (
        <>
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
