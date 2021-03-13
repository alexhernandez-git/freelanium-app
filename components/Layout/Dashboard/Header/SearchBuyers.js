import Spinner from "components/ui/Spinner";
import useOutsideClick from "hooks/useOutsideClick";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBuyers } from "redux/actions/offers";
import { useFormik } from "formik";
import * as Yup from "yup";

const SearchBuyers = ({
  errors,
  touched,
  searchFormik,
  search,
  setSearch,
  buyerSelected,
  handleSelectBuyer,
  handleUnselectBuyer,
  isEmailSetted,
  handleUnsetBuyerEmail,
  formik,
  openBuyersListRef,
  handleShowBuyersList,
  openBuyersList,
  openEmailInput,
  openEmailInputRef,
  handleShowEmailInput,
}) => {
  const offersReducer = useSelector((state) => state.offersReducer);
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <>
      <form id="search-buyers-form" autoComplete="off"></form>
      <form
        id="set-email-form"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      ></form>
      <div ref={openBuyersListRef}>
        {isEmailSetted && (
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">{formik.values.email}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 cursor-pointer"
              onClick={handleUnsetBuyerEmail}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        {buyerSelected && (
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">
              {buyerSelected.username}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 cursor-pointer"
              onClick={handleUnselectBuyer}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
        {!buyerSelected && !isEmailSetted && (
          <div className="">
            <div className="relative">
              <input
                type="text"
                name="search_buyers"
                onFocus={handleShowBuyersList}
                id="search_buyers"
                value={search}
                placeholder="Search user"
                form={"search-buyers-form"}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                className={
                  touched && errors
                    ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                }
              />
              {touched && errors && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            {touched && errors && (
              <p class="mt-2 text-sm text-red-600" id="days_for_delivery-error">
                {errors}
              </p>
            )}
            {offersReducer.searching_buyers && (
              <div className="absolute top-2 right-2">
                <Spinner />
              </div>
            )}
          </div>
        )}
        <div className={`${!openBuyersList && "hidden"} relative`}>
          <div className="absolute  bg-white w-full z-40 shadow rounded mt-1 ">
            <ul className="relative z-0 divide-y divide-gray-200 max-h-80 overflow-auto mt-2">
              {offersReducer.buyers?.results.length === 0 ||
                (offersReducer.buyers?.results.length === 1 &&
                  offersReducer.buyers?.results[0]?.id ===
                    authReducer.user?.id && (
                    <li className="bg-white">
                      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <span className="text-gray-600 text-sm w-full text-center">
                          No buyers found
                        </span>
                      </div>
                    </li>
                  ))}
              {offersReducer.buyers?.results.map(
                (buyer) =>
                  buyer.id !== authReducer.user?.id && (
                    <li
                      className="bg-white"
                      key={buyer.id}
                      onClick={handleSelectBuyer.bind(self, buyer)}
                    >
                      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                        <div className="flex-shrink-0">
                          {buyer.picture ? (
                            <img
                              className="inline-block h-10 w-10 rounded-full"
                              src={
                                new RegExp(process.env.HOST).test(buyer.picture)
                                  ? buyer.picture
                                  : process.env.HOST + buyer.picture
                              }
                              alt=""
                            />
                          ) : (
                            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></span>
                            <p className="text-sm font-medium text-gray-900">
                              {buyer.first_name} {buyer.last_name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {buyer.username}
                            </p>
                          </a>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
            <ul className="space-y-3">
              <div
                className={`${
                  !openEmailInput && "hidden"
                } p-3 border border-gray-200 rounded m-2`}
                ref={openEmailInputRef}
              >
                <div className="space-y-6">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        form={"set-email-form"}
                        className={
                          searchFormik.touched.email &&
                          searchFormik.errors.email
                            ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                            : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        }
                        placeholder="you@example.com"
                        aria-describedby="email-description"
                        value={searchFormik.values.email}
                        onChange={searchFormik.handleChange}
                        onBlur={searchFormik.handleBlur}
                      />
                      {searchFormik.touched.email && searchFormik.errors.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    {searchFormik.touched.email && searchFormik.errors.email && (
                      <p class="mt-2 text-sm text-red-600" id="email-error">
                        {searchFormik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      form={"set-email-form"}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <li
                className={`${
                  openEmailInput && "hidden"
                } bg-white shadow overflow-hidden  p-2 sm:rounded-md `}
              >
                <button
                  onClick={handleShowEmailInput}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Send offer by email
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBuyers;
