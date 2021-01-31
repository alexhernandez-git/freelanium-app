import currencies from "data/currencies";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "redux/actions/auth";
const Header = ({ step }) => {
  const dispatch = useDispatch();
  const handleChangeCurrency = (e) => {
    dispatch(changeCurrency(e.target.value));
  };
  const [defaultValue, setDefaultValue] = useState(null);
  const authReducer = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (authReducer.currency) {
      setDefaultValue(authReducer.currency);
    }
  }, [authReducer.currency]);
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
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
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">
                          03
                        </span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        Access to dasboard
                      </span>
                    </span>
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <div className="relative">
              <select
                id="currency"
                name="currency"
                className="cursor-pointer appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                onChange={handleChangeCurrency}
              >
                {currencies.map((currency) =>
                  currency.code === defaultValue ? (
                    <option selected value={currency.code}>
                      {currency.code}
                    </option>
                  ) : (
                    <option value={currency.code}>{currency.code}</option>
                  )
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
