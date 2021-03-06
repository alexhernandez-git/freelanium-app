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
      <div class="bg-white mt-12">
        <div class="max-w-7xl 2xl:max-w-3/4  mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 class="text-base font-semibold text-cyan-600 uppercase tracking-wide">
              Everything you need
            </h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900">
              All-in-one platform
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <div class="mt-12 lg:mt-0 lg:col-span-2">
            <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Invite team members
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    List view
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Keyboard shortcuts
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Calendars
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Notifications
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Boards
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Reporting
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
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
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Mobile app
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div class="bg-cyan-50">
        <div class="max-w-7xl 2xl:max-w-3/4 mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-cyan-600">
              Start your free trial today.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
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
