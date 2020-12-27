import ContactCard from "components/pages/dashboard/contacts/ContactCard";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
import Layout from "../../components/Layout/Dashboard/Layout";

export default function Home() {
  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    "Loading..."
  ) : (
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
