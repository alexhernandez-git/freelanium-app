import { Header, MobileHeader } from "components/Layout/Header";
import Layout from "components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

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
      <Head>
        <title>Freelanium</title>
      </Head>
      <Layout
        openTryItFree={openTryItFree}
        handleCloseTryFree={handleCloseTryFree}
      >
        <main className="mt-16 mx-auto max-w-7xl 2xl:max-w-3/4 px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Ecosystem to</span>{" "}
              <span className="block text-cyan-600 xl:inline">
                charge your customers
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Full ecosystem to charge your customers with{" "}
              <span className="font-bold">
                order tracker, multiple charge options
              </span>
              , <span className="font-bold">no charge fees</span> and so much
              more{" "}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  onClick={handleOpenTryFree}
                  className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
                >
                  Try it free
                </a>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
            </div>
          </div>
        </main>
        <div className="relative  pt-16">
          <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl  2xl:max-w-3/4">
            {/* <div>
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                Serverless
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                No server? No problem.
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
            </div> */}
            <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
              <img
                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto"
                src="/static/images/freelaniumsc1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl  2xl:max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
                Transactions
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to charge your customers
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                You will have your space prepared to chat, negotiate agreements
                and charge your clients
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
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
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      World wide
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Charge your clients from all over the world.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
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
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      No hidden fees
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      0% commissions on all your orders, only 5% + $0.3 USD
                      transaction costs.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
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
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      All in one
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Save your contacts, send offers, reach agreements,
                      chatting, charge customers and much more.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700 text-white">
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
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Charge options
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      4 options for charge your customers, the one payment, the
                      holding payment, the two payments, and the recurrent
                      order.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-cyan-50 mt-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">Are you a buyer?</span>
              <span className="block text-cyan-600">
                Make payments for your projects safely through our platform
              </span>
            </h2>
            <div className="mt-8 lg:ml-3 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/buyers">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:bg-cyan-700">
                    Register as buyer
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default index;
