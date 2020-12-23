import ContactCard from "components/pages/Contacts/ContactCard";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageName="Contacts" searchBar="Search Contacts">
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      </ul>
    </Layout>
  );
}
