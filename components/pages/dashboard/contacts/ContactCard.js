import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ContactCard = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { seller_view } = authReducer.isAuthenticated && authReducer.user;
  return (
    <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 w-72 sm:mr-3 mb-3">
      <Link href="/dashboard/profile">
        <div class="flex-1 flex flex-col p-8 cursor-pointer">
          <img
            class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          />
          <h3 class="mt-6 text-gray-900 text-sm font-medium">Jane Cooper</h3>
          {seller_view && (
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Title</dt>
              {/* <dd class="text-gray-500 text-sm">Paradigm Representative</dd> */}
              <dt class="sr-only">Role</dt>
              <dd class="mt-3">
                <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Buyer
                </span>
              </dd>
            </dl>
          )}
        </div>
      </Link>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="-ml-px w-0 flex-1 flex">
            <Link href="/dashboard/messages">
              <a class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                {/* <!-- Heroicon name: phone --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span class="ml-3">Send message</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
