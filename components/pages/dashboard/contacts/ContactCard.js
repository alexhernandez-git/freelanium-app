import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ContactCard = ({ contact }) => {
  const {
    username,
    first_name,
    last_name,
    email,
    picture,
    is_seller,
  } = contact;
  const authReducer = useSelector((state) => state.authReducer);
  const { seller_view } = authReducer.is_authenticated && authReducer.user;
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 w-72 sm:mr-3 mb-3">
      <Link href="/dashboard/profile">
        <div className="flex-1 flex flex-col p-8 cursor-pointer">
          {/* w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full */}
          {picture ? (
            <img
              className="flex-shrink-0 mx-auto inline-block w-32 h-32 rounded-full"
              src={
                new RegExp(process.env.HOST).test(picture)
                  ? user.picture
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
            <Link href="/dashboard/messages">
              <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
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
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
