import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import Spinner from "components/ui/Spinner";
import Link from "next/link";
import { useSelector } from "react-redux";
import ContactSearchCard from "./ContactSearchCard";

const SearchContacts = ({ handleShowInviteContact }) => {
  const contactsReducer = useSelector((state) => state.contactsReducer);

  return (
    <>
      <nav
        className="relative h-full overflow-y-auto w-full"
        aria-label="Directory"
      >
        <div className="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Your contacts</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          {contactsReducer.is_loading_search && (
            <div className="flex bg-white justify-center py-2">
              <Spinner />
            </div>
          )}
          {contactsReducer.contacts_search.results &&
            contactsReducer.contacts_search.results.length > 0 &&
            contactsReducer.contacts_search.results.map((contact) => (
              <ContactSearchCard
                key={contact.id}
                contact={contact.contact_user}
                myContact={true}
              />
            ))}
          {contactsReducer.contacts_search.results?.length == 0 && (
            <span className="text-sm text-gray-500 px-6">
              No available contacts
            </span>
          )}
        </ul>

        <div className="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Contacts available</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          {contactsReducer.is_loading_available_contacts && (
            <div className="flex bg-white justify-center py-2">
              <Spinner />
            </div>
          )}
          {contactsReducer.available_contacts.results &&
            contactsReducer.available_contacts.results.length > 0 &&
            contactsReducer.available_contacts.results.map((contact) => (
              <ContactSearchCard
                key={contact.id}
                contact={contact}
                myContact={false}
              />
            ))}
          {contactsReducer.available_contacts.results?.length == 0 && (
            <span className="text-sm text-gray-500 px-6 my-2">
              No available contacts
            </span>
          )}
        </ul>
        <div className="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>Can't find your contact?</h3>
        </div>
        <ul className="relative z-0 divide-y divide-gray-200">
          <li className="bg-white">
            <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
              <div>
                <button
                  onClick={handleShowInviteContact}
                  type="button"
                  className={`inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none`}
                >
                  Invite your contact
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SearchContacts;
