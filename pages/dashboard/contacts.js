import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import InviteContactForm from "components/pages/dashboard/contacts/InviteContactForm";
import SearchContacts from "components/pages/dashboard/contacts/SearchContacts";
import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Dashboard/Layout";
import useOutsideClick from "hooks/useOutsideClick";

export default function Home() {
  const [cantRender, authReducer] = useAuthRequired();
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search != "") {
      const timeoutId = setTimeout(() => {
        setIsSearching(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setIsSearching(false);
    }
  }, [search]);
  const [inviteContact, setInviteContact] = useState(false);
  const handleShowInviteContact = () => {
    console.log("entra");
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
    console.log(inviteContact);
  }, [inviteContact]);
  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout
      pageName={isSearching ? "Search Contacts" : "Contacts"}
      searchBar="Search / Add Contacts"
      searchState={{ search, setSearch }}
    >
      <ul className="flex flex-wrap justify-center">
        {isSearching ? (
          <>
            <SearchContacts handleShowInviteContact={handleShowInviteContact} />
          </>
        ) : (
          <>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </>
        )}
      </ul>
      <InviteContactForm
        inviteContact={inviteContact}
        inviteContactRef={inviteContactRef}
        handleHideInviteContact={handleHideInviteContact}
      />
    </Layout>
  );
}
