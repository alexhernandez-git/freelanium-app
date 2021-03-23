import { useAlert } from "hooks/useAlert";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendVerificationEmail } from "redux/actions/auth";
import { createAlert } from "redux/actions/alerts";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Layout = ({
  children,
  searchBar,
  noPadding,
  noPaddingY,
  searchState,
  onSearchClick,
  goBack,
  pageName = "",
}) => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleSendVerificationEmail = () => {
    dispatch(sendVerificationEmail());
    dispatch(createAlert("SUCCESS", "Validation email sent"));
  };
  const authReducer = useSelector((state) => state.authReducer);
  const { user } = authReducer;
  return (
    <>
      {alert}
      <div className="min-h-screen bg-gray-100">
        <header>
          <Header />
        </header>
        {user && !user.is_verified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Account not validated.{" "}
                  <a
                    onClick={handleSendVerificationEmail}
                    className="cursor-pointer font-medium underline text-yellow-700 hover:text-yellow-600"
                  >
                    Send validation email.
                  </a>{" "}
                  For our users security if the account is not validated can be
                  cancelled.
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={
            !noPadding
              ? `${
                  router.pathname !== "/dashboard" && "max-w-7xl  2xl:max-w-3/4"
                } mx-auto sm:px-6 lg:px-8`
              : " "
          }
        >
          <div className={!noPadding && !noPaddingY ? "py-10" : " "}>
            <div
              className={
                searchBar
                  ? "mx-auto items-center sm:flex justify-between p-4 sm:p-0"
                  : ""
              }
            >
              {goBack ? (
                <span
                  className="cursor-pointer text-gray-600 flex items-center"
                  onClick={goBack}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    fill="none"
                    className="h-5 w-5 text-gray-600 mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Go back
                </span>
              ) : (
                <h1 className="text-center sm:text-left text-3xl font-bold leading-tight text-gray-600">
                  {pageName}
                </h1>
              )}
              <div className="m-3 block sm:hidden"></div>
              {searchBar && (
                <>
                  <SearchBar
                    text={searchBar}
                    searchState={searchState}
                    onSearchClick={onSearchClick}
                  />
                </>
              )}
            </div>
            <main>
              {/* <!-- Replace with your content --> */}
              <div
                className={
                  !noPadding
                    ? `px-4 ${!noPaddingY ? "py-8" : "lg:py-8"}  sm:px-0`
                    : " "
                }
              >
                {children}
              </div>
              {/* <!-- /End replace --> */}
            </main>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
