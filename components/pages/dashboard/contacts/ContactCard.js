import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/actions/contacts";
import { getOrCreateChat } from "redux/actions/chats";
import { useRouter } from "next/router";
const ContactCard = ({ contact, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { username, picture, is_seller } = contact;
  const authReducer = useSelector((state) => state.authReducer);
  const { seller_view } = authReducer.is_authenticated && authReducer.user;
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const handleOptionsToggle = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  const handleOptionsClose = () => {
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
    }
  };
  const optionsRef = useRef();
  useOutsideClick(optionsRef, () => handleOptionsClose());

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModalClose = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };
  const modalRef = useRef();
  useOutsideClick(modalRef, () => handleModalClose());

  const handleRemoveContact = () => {
    dispatch(removeContact(id));
  };
  const handleGetOrCreateChat = () => {
    dispatch(getOrCreateChat(contact.id, router.push));
  };
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-end p-3">
        <div className="inline-block relative text-left transition">
          <div>
            <button
              onMouseDown={handleOptionsToggle}
              className=" rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="sr-only">Open options</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          <div
            ref={optionsRef}
            className={`${
              isOptionsOpen ? "block" : "hidden"
            } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                onMouseDown={handleModalToggle}
                className="cursor-pointer group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Remove contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            ref={modalRef}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Remove contact
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This user will be removed from your contacts list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleRemoveContact}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Remove
              </button>
              <button
                onClick={handleModalClose}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link href="/dashboard/profile">
        <div className="flex-1 flex flex-col p-8 cursor-pointer border-b border-gray-200">
          {/* w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full */}
          {picture ? (
            <img
              className="flex-shrink-0 mx-auto inline-block w-32 h-32 rounded-full"
              src={
                new RegExp(process.env.HOST).test(picture)
                  ? picture
                  : process.env.HOST + picture
              }
              alt=""
            />
          ) : (
            <span className="flex-shrink-0 mx-auto inline-block w-32 h-32 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
          <h3 className="mt-6 text-gray-900 text-sm font-medium">{username}</h3>
          {seller_view && (
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              {/* <dd className="text-gray-500 text-sm">Paradigm Representative</dd> */}
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                {is_seller ? (
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    Seller
                  </span>
                ) : (
                  <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
                    Buyer
                  </span>
                )}
              </dd>
            </dl>
          )}
        </div>
      </Link>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="-ml-px w-0 flex-1 flex">
            <a
              onClick={handleGetOrCreateChat}
              className="cursor-pointer relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              {/* <!-- Heroicon name: phone --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span className="ml-3">Send message</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
