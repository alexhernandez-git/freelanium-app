import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import { useDispatch } from "react-redux";
import { addContact } from "redux/actions/contacts";
const ContactSearchCard = ({ contact, myContact }) => {
  const { username, picture, id } = contact;
  const dispatch = useDispatch();
  const handleAddContact = () => {
    dispatch(addContact(id));
  };
  return (
    <li className="bg-white">
      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
        <div className="flex-shrink-0">
          {picture ? (
            <img className="h-10 w-10 rounded-full" src={picture} alt="" />
          ) : (
            <span className="inline-block w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <a className="focus:outline-none">
            <p className="text-sm font-medium text-gray-900">{username}</p>
            {/* <p className="text-sm text-gray-500 truncate">Co-Founder / CEO</p> */}
          </a>
        </div>
        <div>
          {myContact ? (
            <PrimaryButton>Send message</PrimaryButton>
          ) : (
            <div className="flex">
              <PrimaryButton className="mr-3">Send message</PrimaryButton>
              <SecondaryButton
                className="cursor-pointer"
                onClick={handleAddContact}
              >
                Add to contacts
              </SecondaryButton>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ContactSearchCard;
