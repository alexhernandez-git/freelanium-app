import SettingsLayout from "components/pages/settings/SettingsLayout";
import Link from "next/link";
import React from "react";

const billing = () => {
  return (
    <>
      {/* Asside */}
      <SettingsLayout>
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
                  <div class="bg-gray-900 rounded-lg">
                    <div class="pt-12 sm:pt-16 lg:pt-24">
                      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                            Plan
                          </h2>
                          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                            Single plan, all features
                          </p>
                          {/*
                          <p class="text-xl text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Harum sequi unde repudiandae natus.
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                      <div class="relative">
                        <div class="absolute inset-0 h-3/4 bg-gray-900"></div>
                        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div class="max-w-md w-96 mx-auto space-y-4 lg:max-w-5xl  lg:space-y-0">
                            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                <div>
                                  <h3
                                    class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                                    id="tier-standard"
                                  >
                                    single plan
                                  </h3>
                                </div>
                                {/* <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                                  $14
                                  <span class="ml-1 text-2xl font-medium text-gray-500">
                                    /mo
                                  </span>
                                </div>*/}
                                <p class="mt-5 text-md text-gray-500">
                                  <span className="font-bold">$14 /mo</span>{" "}
                                  after the trial
                                </p>
                                <p class="mt-3 text-md text-gray-500">
                                  Trial ends at{" "}
                                  <span className="font-bold">
                                    14th of December 2021
                                  </span>{" "}
                                </p>
                              </div>
                              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                                <ul class="space-y-4">
                                  <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                      <svg
                                        class="h-6 w-6 text-green-500"
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
                                    </div>
                                    <p class="ml-3 text-base text-gray-700">
                                      No fees
                                    </p>
                                  </li>
                                  <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                      <svg
                                        class="h-6 w-6 text-green-500"
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
                                    </div>
                                    <p class="ml-3 text-base text-gray-700">
                                      Secure payments
                                    </p>
                                  </li>

                                  <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                      <svg
                                        class="h-6 w-6 text-green-500"
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
                                    </div>
                                    <p class="ml-3 text-base text-gray-700">
                                      Project managment
                                    </p>
                                  </li>

                                  <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                      <svg
                                        class="h-6 w-6 text-green-500"
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
                                    </div>
                                    <p class="ml-3 text-base text-gray-700">
                                      Client portofolio
                                    </p>
                                  </li>
                                </ul>
                                {/* <div class="rounded-md shadow">
                                  <a
                                    href="#"
                                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
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
                      <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                        <div class="max-w-md mx-auto lg:max-w-5xl">
                          <div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                            <div class="flex-1">
                              <div>
                                <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                                  Add your billing information
                                </h3>
                              </div>
                              <div class="mt-4 text-sm text-gray-600">
                                You haven't entered your billing information
                                yet, but you will be able to continue using your
                                free trial days even after entering your
                                details. Once the trial period ends, you will be
                                charged the amount corresponding to the plan.
                              </div>
                            </div>
                            <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                              {/* <Link href="/settings/billing-information">
                                <a
                                  href="#"
                                  class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                                  aria-describedby="tier-growth"
                                >
                                  Start your trial
                                </a>
                              </Link> */}
                              <Link href="/settings/billing-information">
                                <a class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600  hover:bg-indigo-700">
                                  Add Billing Information
                                </a>
                              </Link>
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
      </SettingsLayout>
    </>
  );
};

export default billing;
