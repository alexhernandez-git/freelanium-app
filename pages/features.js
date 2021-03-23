import Layout from "components/Layout/Layout";
import React, { useState } from "react";

const features = () => {
  const [openTryItFree, setOpenTryItFree] = useState(false);
  const handleOpenTryFree = () => {
    setOpenTryItFree(true);
  };
  const handleCloseTryFree = () => {
    setOpenTryItFree(false);
  };
  return (
    <Layout
      openTryItFree={openTryItFree}
      handleCloseTryFree={handleCloseTryFree}
    >
      <div className="bg-white mt-12">
        <div className="max-w-7xl 2xl:max-w-3/4  mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-cyan-600 uppercase tracking-wide">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              All-in-one platform
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Save your contacts, send offers, reach agreements, chats, charge
              customers and much more.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    No hidden fees
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    0% commissions on all your orders.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Multiple charge options
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    3 options for charge your customers, the normal, the two
                    payments, and the recurrent.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Invite contacts
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Invite and store all your contacts.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Orders list view
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Control all the history of your orders.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Easy offer agreements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    An agile agreements system provided by the most successful
                    freelancers platforms.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Chat rooms
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Not just a chat, is the most vailable tool for your
                    comunication with your customers.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Notifications
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    All the activity will be registered and notification to you.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Orders control
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Securely charge your customers, with our money withholding
                    system the customers always will pay at the beginning.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="bg-cyan-50">
        <div className="max-w-7xl 2xl:max-w-3/4 mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-cyan-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                onClick={handleOpenTryFree}
                className="cursor-pointer mt-8 w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-cyan-700 sm:mt-10 sm:w-auto xl:mt-0"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default features;
