import Layout from "components/Layout/Layout";
import Head from "next/head";
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
    <>
      <Head>
        <title>Features</title>
      </Head>
      <Layout
        openTryItFree={openTryItFree}
        handleCloseTryFree={handleCloseTryFree}
      >
        <div className="bg-white mt-12 z-30">
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Notifications
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      All the activity will be registered and notification to
                      you.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
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
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div class="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
              <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Charge optons
              </h3>
              <p class="mt-3 text-lg text-gray-500">
                Freelanium provides 4 charging options to suit any scenario:
              </p>

              <dl class="mt-10 space-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      One payment order
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    The seller receives the money when the offer is accepted.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Holding payment order
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    The seller receives the money when the buyer accepts the
                    delivery.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Two payments order
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    There are two payments, one when accepting the order and the
                    other when accepting the delivery.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Recurrent payment order
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    The seller can create a monthly or annual subscription.
                  </dd>
                </div>
              </dl>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <img
                class="relative mx-auto rounded-lg shadow"
                width="490"
                src="/static/images/offeredited.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div className="bg-cyan-50 mt-12">
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
    </>
  );
};

export default features;
