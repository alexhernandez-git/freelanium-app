import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import useAuthRequired from "hooks/useAuthRequired";
import Link from "next/link";
import React, { useState } from "react";
import moment from "moment";
import AddBillingInformationForm from "components/Forms/AddBillingInformationForm";
const billing = () => {
  const [cantRender, authReducer] = useAuthRequired();
  const [addBillingInformation, setAddBillingInformation] = useState(false);
  const handleOpenAddBilling = () => {
    setAddBillingInformation(true);
  };
  return !cantRender ? (
    "Loading..."
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        {authReducer.user.default_payment_method ? (
          <>
            <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              <section aria-labelledby="payment_details_heading">
                <form action="#" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="bg-white py-6 px-4 sm:p-6">
                      <div>
                        <h2
                          id="payment_details_heading"
                          class="text-lg leading-6 font-medium text-gray-900"
                        >
                          Payment details
                        </h2>
                        <p class="mt-1 text-sm text-gray-500">
                          Update your billing information. Please note that
                          updating your location could affect your tax rates.
                        </p>
                      </div>

                      <div class="mt-6 grid grid-cols-4 gap-6">
                        <div class="col-span-4 sm:col-span-2">
                          <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autocomplete="cc-given-name"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-4 sm:col-span-2">
                          <label
                            for="last_name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autocomplete="cc-family-name"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-4 sm:col-span-2">
                          <label
                            for="email_address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autocomplete="email"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-4 sm:col-span-1">
                          <label
                            for="expiration_date"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Expration date
                          </label>
                          <input
                            type="text"
                            name="expiration_date"
                            id="expiration_date"
                            autocomplete="cc-exp"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            placeholder="MM / YY"
                          />
                        </div>

                        <div class="col-span-4 sm:col-span-1">
                          <label
                            for="security_code"
                            class="flex items-center text-sm font-medium text-gray-700"
                          >
                            <span>Security code</span>
                            <svg
                              class="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </label>
                          <input
                            type="text"
                            name="security_code"
                            id="security_code"
                            autocomplete="cc-csc"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          />
                        </div>

                        <div class="col-span-4 sm:col-span-2">
                          <label
                            for="country"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <select
                            id="country"
                            name="country"
                            autocomplete="country"
                            class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div class="col-span-4 sm:col-span-2">
                          <label
                            for="postal_code"
                            class="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autocomplete="postal-code"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              <section aria-labelledby="plan_heading">
                <form action="#" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h2
                          id="plan_heading"
                          class="text-lg leading-6 font-medium text-gray-900"
                        >
                          Plan
                        </h2>
                      </div>

                      <fieldset>
                        <legend class="sr-only">Pricing plans</legend>
                        <ul class="relative bg-white rounded-md -space-y-px">
                          <li>
                            <div class="relative border rounded-md border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                              <label class="flex items-center text-sm cursor-pointer">
                                <input
                                  name="pricing_plan"
                                  type="radio"
                                  class="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                                  aria-describedby="plan-option-pricing-1 plan-option-limit-1"
                                  checked
                                />
                                <span class="ml-3 font-medium text-gray-900">
                                  Single Plan
                                </span>
                              </label>
                              <p
                                id="plan-option-pricing-1"
                                class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                              >
                                <span class="font-medium">$9.99 / mo</span>
                              </p>
                              <p
                                id="plan-option-limit-1"
                                class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                              >
                                Ilimited orders
                              </p>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              <section aria-labelledby="billing_history_heading">
                <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 sm:px-6">
                    <h2
                      id="billing_history_heading"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Billing history
                    </h2>
                  </div>
                  <div class="mt-6 flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden border-t border-gray-200">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Description
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Amount
                                </th>

                                <th
                                  scope="col"
                                  class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  <span class="sr-only">View receipt</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                              <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  1/1/2020
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  Business Plan - Annual Billing
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  CA$109.00
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href="#"
                                    class="text-orange-600 hover:text-orange-900"
                                  >
                                    View receipt
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <>
            {addBillingInformation ? (
              <AddBillingInformationForm />
            ) : (
              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      {/* <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              Plan
              </h3>
            </div> */}

                      <div>
                        <div className="bg-gray-900 rounded-lg">
                          <div className="pt-12 sm:pt-16 lg:pt-24">
                            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                              <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                                <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                                  Plan
                                </h2>
                                <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                                  Single plan, all features
                                </p>
                                {/*
              <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Harum sequi unde repudiandae natus.
            </p> */}
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 pb-5 bg-gray-50 sm:mt-12 lg:mt-16 sm:pb-8">
                            <div className="relative">
                              <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
                              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md sm:w-96 mx-auto space-y-4 lg:max-w-5xl  lg:space-y-0">
                                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                      <div>
                                        <h3
                                          className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                                          id="tier-standard"
                                        >
                                          single plan
                                        </h3>
                                      </div>
                                      {/* <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                            $14
                            <span className="ml-1 text-2xl font-medium text-gray-500">
                            /mo
                            </span>
                          </div>*/}
                                      <p className="mt-5 text-md text-gray-500">
                                        <span className="font-bold">
                                          $14 /mo
                                        </span>{" "}
                                        after the trial
                                      </p>
                                      <p className="mt-3 text-md text-gray-500">
                                        Trial ends at{" "}
                                        <span className="font-bold">
                                          {moment(
                                            authReducer.user
                                              .free_trial_expiration
                                          ).format("DD of MMMM YYYY")}
                                        </span>{" "}
                                      </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                      <ul className="space-y-4">
                                        <li className="flex items-start">
                                          <div className="flex-shrink-0">
                                            <svg
                                              className="h-6 w-6 text-green-500"
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
                                          </div>
                                          <p className="ml-3 text-base text-gray-700">
                                            No fees
                                          </p>
                                        </li>
                                        <li className="flex items-start">
                                          <div className="flex-shrink-0">
                                            <svg
                                              className="h-6 w-6 text-green-500"
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
                                          </div>
                                          <p className="ml-3 text-base text-gray-700">
                                            Secure payments
                                          </p>
                                        </li>

                                        <li className="flex items-start">
                                          <div className="flex-shrink-0">
                                            <svg
                                              className="h-6 w-6 text-green-500"
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
                                          </div>
                                          <p className="ml-3 text-base text-gray-700">
                                            Project managment
                                          </p>
                                        </li>

                                        <li className="flex items-start">
                                          <div className="flex-shrink-0">
                                            <svg
                                              className="h-6 w-6 text-green-500"
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
                                          </div>
                                          <p className="ml-3 text-base text-gray-700">
                                            Client portofolio
                                          </p>
                                        </li>
                                      </ul>
                                      {/* <div className="rounded-md shadow">
                                            <a
                                            href="#"
                                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                                            aria-describedby="tier-standard"
                                            >
                                            Get started
                                            </a>
                                          </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                              <div className="max-w-md mx-auto lg:max-w-5xl">
                                <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                                  <div className="flex-1">
                                    <div>
                                      <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                                        Add your billing information
                                      </h3>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-600">
                                      You haven't entered your billing
                                      information yet, but you will be able to
                                      continue using your free trial days even
                                      after entering your details. Once the
                                      trial period ends, you will be charged the
                                      amount corresponding to the plan.
                                    </div>
                                  </div>
                                  <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                                    {/* <Link href="/settings/billing-information">
                          <a
                                href="#"
                                className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                                aria-describedby="tier-growth"
                                >
                                Start your trial
                                </a>
                              </Link> */}
                                    <span
                                      onClick={handleOpenAddBilling}
                                      className="cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600  hover:bg-indigo-700"
                                    >
                                      Add Billing Information
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button
                              type="submit"
                              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                              Save
                              </button>
                            </div> */}
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </SettingsLayout>
    </>
  );
};

export default billing;
