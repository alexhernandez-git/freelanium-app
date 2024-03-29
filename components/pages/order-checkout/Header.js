import currencies from "data/currencies";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "redux/actions/auth";
const Header = ({ step }) => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-normal hidden sm:block">
                <img
                  src="../../../static/images/freelanium_logo.png"
                  className="w-20 h-20"
                />
              </span>
            </div>
            <div
              className="hidden sm:ml-6 sm:flex sm:space-x-8"
              aria-label="Progress"
            >
              <ol className="rounded-md divide-y divide-gray-300 flex divide-y-0">
                <li className="relative flex-1 flex border-none">
                  <span className="group flex items-center w-full">
                    <span className="px-6 py-1 flex items-center text-sm font-medium">
                      {step == 0 && (
                        <span
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full"
                          aria-current="step"
                        >
                          <span className="text-cyan-600">01</span>
                        </span>
                      )}
                      {(step == 1 || step == 2) && (
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full group-hover:bg-cyan-800">
                          <svg
                            className="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                      <span
                        className={
                          step == 0
                            ? "ml-4 text-sm font-medium text-cyan-600"
                            : "ml-4 text-sm font-medium text-gray-900"
                        }
                      >
                        Order Details
                      </span>
                    </span>
                  </span>

                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vector-effect="non-scaling-stroke"
                        stroke="currentcolor"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </li>

                <li className="relative flex-1 flex border-none">
                  <span className="px-6 py-1 flex items-center text-sm font-medium">
                    {step == 0 && (
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">
                          02
                        </span>
                      </span>
                    )}
                    {step == 1 && (
                      <span
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full"
                        aria-current="step"
                      >
                        <span className="text-cyan-600">02</span>
                      </span>
                    )}
                    {step == 2 && (
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full group-hover:bg-cyan-800">
                        <svg
                          className="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                    <span
                      className={
                        (step == 0 &&
                          "ml-4 text-gray-500 group-hover:text-gray-900") ||
                        (step == 1 &&
                          "ml-4 text-sm font-medium text-cyan-600") ||
                        (step == 2 && "ml-4 text-sm font-medium text-gray-900")
                      }
                    >
                      Confirm & Pay
                    </span>
                  </span>

                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vector-effect="non-scaling-stroke"
                        stroke="currentcolor"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </li>

                <li className="relative flex-1 flex border-none">
                  <span className="group flex items-center">
                    <span className="px-6 py-1 flex items-center text-sm font-medium">
                      {step < 2 && (
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="text-gray-500 group-hover:text-gray-900">
                            03
                          </span>
                        </span>
                      )}
                      {step == 2 && (
                        <span
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full"
                          aria-current="step"
                        >
                          <span className="text-cyan-600">03</span>
                        </span>
                      )}
                      <span
                        className={
                          (step < 2 &&
                            "ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900") ||
                          (step == 2 &&
                            "ml-4 text-sm font-medium text-cyan-600")
                        }
                      >
                        Access to dasboard
                      </span>
                    </span>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
