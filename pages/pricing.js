import Layout from "components/Layout/Layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const pricing = () => {
  const [openTryItFree, setOpenTryItFree] = useState(false);
  const handleOpenTryFree = () => {
    setOpenTryItFree(true);
  };
  const handleCloseTryFree = () => {
    setOpenTryItFree(false);
  };
  const [priceLabel, setPriceLabel] = useState("");

  const authReducer = useSelector((state) => state.authReducer);
  const plansReducer = useSelector((state) => state.plansReducer);
  useEffect(() => {
    if (
      !plansReducer.is_loading &&
      plansReducer.plans &&
      authReducer.currency
    ) {
      const currency = authReducer.currency;
      const currentPlan = plansReducer.plans.find(
        (plan) => plan.currency == currency && plan.type == "BA"
      );
      setPriceLabel(currentPlan.price_label);
    }
  }, [authReducer.currency, plansReducer.is_loading]);

  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Layout
        openTryItFree={openTryItFree}
        handleCloseTryFree={handleCloseTryFree}
      >
        <div className="bg-white mt-12">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="pb-16 xl:flex xl:items-center xl:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                  <span className="text-gray-900">
                    Everything you need for{" "}
                  </span>
                  <span className="text-cyan-600">{priceLabel} a month</span>
                </h1>
                <p className="mt-5 text-xl text-gray-500">
                  And if you don't use the platform for a month, the{" "}
                  <span className="font-bold">next one will be free</span>
                </p>
              </div>
              <a
                onClick={handleOpenTryFree}
                className="cursor-pointer mt-8 w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-cyan-700 sm:mt-10 sm:w-auto xl:mt-0"
              >
                Get started today
              </a>
            </div>
            <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
              <div>
                <h2 className="text-base font-semibold text-cyan-600 tracking-wide uppercase">
                  Everything you need
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  All-in-one platform
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Save your contacts, send offers, reach agreements, chatting,
                  charge customers and much more.
                </p>
              </div>
              <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                <ul className="divide-y divide-gray-200">
                  <li className="py-4 flex md:py-0 md:pb-4">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Easy offer agreements.
                    </span>
                  </li>

                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Multiple charge options.
                    </span>
                  </li>

                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      No hidden fees.
                    </span>
                  </li>

                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Chat rooms.
                    </span>
                  </li>
                </ul>
                <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                  <li className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Orders list view.
                    </span>
                  </li>
                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Invite contacts.
                    </span>
                  </li>
                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Orders control.
                    </span>
                  </li>

                  <li className="py-4 flex">
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">
                      Notifications.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default pricing;
