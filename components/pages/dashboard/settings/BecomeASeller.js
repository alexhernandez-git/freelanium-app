import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { becomeASeller } from "redux/actions/auth";
import Spinner from "components/ui/Spinner";
const BecomeASeller = ({ handleOpenAddBilling }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleBecomeASeller = () => {
    dispatch(becomeASeller());
  };
  const [priceLabel, setPriceLabel] = useState("");
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
    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div className="bg-gray-100">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                      Become a seller
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                      Try the 14 days free trial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                <div className="relative">
                  <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                      <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                          Single plan, all features
                        </h3>
                        <p className="mt-6 text-base text-gray-500">
                          Lorem ipsum dolor sit amet consect etur adipisicing
                          elit. Itaque amet indis perferendis blanditiis
                          repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-8">
                          <div className="flex items-center">
                            <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-cyan-600">
                              What's included
                            </h4>
                            <div className="flex-1 border-t-2 border-gray-200"></div>
                          </div>
                          <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                            <li className="flex items-start lg:col-span-1">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-green-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm text-gray-700">
                                No hidden fees
                              </p>
                            </li>

                            <li className="flex items-start lg:col-span-1">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-green-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm text-gray-700">
                                Easy offer agreements
                              </p>
                            </li>

                            <li className="flex items-start lg:col-span-1">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-green-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm text-gray-700">
                                Secure payments
                              </p>
                            </li>

                            <li className="flex items-start lg:col-span-1">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-green-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm text-gray-700">
                                Multiple charge options
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-medium text-gray-900">
                          Monthly subscription
                        </p>
                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                          <span>{priceLabel}</span>
                          <span className="ml-3 text-xl font-medium text-gray-500 uppercase">
                            {authReducer.user?.currency}
                          </span>
                        </div>
                        <p className="mt-4 text-sm">
                          <span className="text-gray-600">
                            No credit card needed
                          </span>
                        </p>
                        <div className="mt-6">
                          <div className="rounded-md shadow">
                            <span
                              onClick={handleBecomeASeller}
                              className="cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600  hover:bg-cyan-700"
                            >
                              {authReducer.becoming_a_seller && (
                                <span className="mr-3">
                                  <Spinner />
                                </span>
                              )}
                              Start 14 days free trial
                            </span>
                          </div>
                        </div>
                        {/* <div className="mt-4 text-sm">
                          <a href="#" className="font-medium text-gray-900">
                            Get a free sample
                            <span className="font-normal text-gray-500">
                              (20MB)
                            </span>
                          </a>
                        </div> */}
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

export default BecomeASeller;
