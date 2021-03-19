import { Header, MobileHeader } from "components/Layout/Header";
import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import Link from "next/link";
import RegisterLayout from "components/Layout/RegisterLayout";

const index = () => {
  const [openTryItFree, setOpenTryItFree] = useState(false);
  const handleOpenTryFree = () => {
    setOpenTryItFree(true);
  };
  const handleCloseTryFree = () => {
    setOpenTryItFree(false);
  };
  return (
    <>
      <Layout
        openTryItFree={openTryItFree}
        handleCloseTryFree={handleCloseTryFree}
      >
        <RegisterLayout />
        <main className="mt-16 mx-auto max-w-7xl 2xl:max-w-3/4 px-4 sm:mt-24">
          <div className="bg-gray-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <svg
                className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="784"
                  fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                />
              </svg>

              <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A better way to pay for your projects.
                  </h2>
                </div>
                <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                  <div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      {/* <svg
                        className="h-6 w-6"
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg> */}
                      <svg
                        className="h-6 w-6"
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="mt-5">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Free to use
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Get access to your dashboard and track your orders.
                      </dd>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <div className="mt-5">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Worldwide transfers
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Handle the purchase of your project from professionals
                        anywhere.
                      </dd>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <div className="mt-5">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Control about your project
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Have control over your project, finish the order only if
                        you accept the delivery.
                      </dd>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      <svg
                        className="h-6 w-6"
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="mt-5">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Message system
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Communicate with all the sellers you want through the
                        chat, reach agreements, execute actions, etc.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default index;
