import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
const FreeTrialPlan = ({ handleOpenAddBilling }) => {
  const authReducer = useSelector((state) => state.authReducer);
  return (
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
                              <span className="font-bold">$14 /mo</span> after
                              the trial
                            </p>
                            <p className="mt-3 text-md text-gray-500">
                              Trial ends at{" "}
                              <span className="font-bold">
                                {moment(
                                  authReducer.user?.free_trial_expiration
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
                                  No hidden fees
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
                            You haven't entered your billing information yet,
                            but you will be able to continue using your free
                            trial days even after entering your details. Once
                            the trial period ends, you will be charged the
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
        </div>
      </form>
    </div>
  );
};

export default FreeTrialPlan;
