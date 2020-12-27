import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import Head from "next/head";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Home() {
  return (
    <Layout pageName="Contacts" searchBar="Search Contacts">
      <ul class="flex flex-wrap justify-center">
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
