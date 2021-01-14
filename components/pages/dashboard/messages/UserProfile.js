import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const UserProfile = ({ handleCloseProfile = null }) => {
  const router = useRouter();
  const goToMessages = () => {
    router.push("/dashboard/messages");
  };
  const chatReducer = useSelector((state) => state.chatReducer);

  return (
    <article className="bg-white pb-10">
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              {chatReducer.chat?.to_user?.picture ? (
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={
                    new RegExp(process.env.HOST).test(
                      chatReducer.chat?.to_user?.picture
                    )
                      ? chatReducer.chat?.to_user?.picture
                      : process.env.HOST + chatReducer.chat?.to_user?.picture
                  }
                  alt=""
                />
              ) : (
                <span className="h-24 w-24 ring-4 ring-white sm:h-32 sm:w-32 rounded-full overflow-hidden bg-gray-100">
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
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {chatReducer.chat?.to_user?.username}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  onClick={
                    handleCloseProfile ? handleCloseProfile : goToMessages
                  }
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Message</span>
                </button>
                {/* <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call</span>
                </button> */}
              </div>
            </div>
          </div>
          <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {chatReducer.chat?.to_user?.username}
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="#"
                className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                aria-current="page"
              >
                Profile
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Calendar
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              >
                Recognition
              </a>
            </nav>
          </div>
        </div>
      </div> */}

      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {/* <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900">(555) 123-4567</dd>
          </div> */}

          {/* <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">
              ricardocooper@example.com
            </dd>
          </div> */}

          {/* <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Senior Front-End Developer
            </dd>
          </div> */}

          {/* <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Team</dt>
            <dd className="mt-1 text-sm text-gray-900">Product Development</dd>
          </div> */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">From</dt>
            <dd className="mt-1 text-sm text-gray-900">Spain</dd>
          </div>

          {/* <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Sits</dt>
            <dd className="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Salary</dt>
            <dd className="mt-1 text-sm text-gray-900">$145,000</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Birthday</dt>
            <dd className="mt-1 text-sm text-gray-900">June 8, 1990</dd>
          </div> */}

          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 max-w-prose text-sm text-gray-900">
              <p>
                {chatReducer.chat?.to_user?.about
                  ? chatReducer.chat?.to_user?.about
                  : "No content"}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default UserProfile;
