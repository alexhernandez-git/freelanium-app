import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import SearchContacts from "components/pages/dashboard/contacts/SearchContacts";
import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Dashboard/Layout";

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
  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout
      pageName={isSearching ? "Search Contacts" : "Contacts"}
      searchBar="Search / Add Contacts"
      searchState={{ search, setSearch }}
    >
      <ul class="flex flex-wrap justify-center">
        {isSearching ? (
          <>
            <SearchContacts />
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
    </Layout>
  );
}
