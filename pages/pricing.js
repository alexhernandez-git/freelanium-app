import Layout from "components/Layout/Layout";
import React, { useState } from "react";

const pricing = () => {
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
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span class="text-gray-900">Everything you need for </span>
                <span class="text-indigo-600">$14 a month</span>
              </h1>
              <p class="mt-5 text-xl text-gray-500">
                Includes every feature we offer plus unlimited projects and
                unlimited users.
              </p>
            </div>
            <a
              onClick={handleOpenTryFree}
              class="cursor-pointer mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started today
            </a>
          </div>
          <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Everything you need
              </h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900">
                All-in-one platform
              </p>
              <p class="mt-4 text-lg text-gray-500">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
                elementum blandit et.
              </p>
            </div>
            <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul class="divide-y divide-gray-200">
                <li class="py-4 flex md:py-0 md:pb-4">
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
                  <span class="ml-3 text-base text-gray-500">
                    Vitae in pulvinar odio id utobortis in inter.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Sed sed id viverra viverra augue eget massa.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Urna, gravida amet, a, integer venenatis.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Lobortis sed pharetra amet vitae eleifend.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Ullamcorper blandit a consequat donec elit aoreet.
                  </span>
                </li>
              </ul>
              <ul class="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                <li class="py-4 flex md:border-t-0 md:py-0 md:pb-4">
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
                  <span class="ml-3 text-base text-gray-500">
                    Vitae in pulvinar odio id utobortis in inter.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Sed sed id viverra viverra augue eget massa.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Urna, gravida amet, a, integer venenatis.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Lobortis sed pharetra amet vitae eleifend.
                  </span>
                </li>

                <li class="py-4 flex">
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
                  <span class="ml-3 text-base text-gray-500">
                    Ullamcorper blandit a consequat donec elit aoreet.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default pricing;
