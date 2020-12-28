import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmailAvailable, resetEmailAvailable } from "redux/actions/auth";
import { useRouter } from "next/router";

const Header = ({ openTryItFree, handleCloseTryFree }) => {
  const router = useRouter();

  const authReducer = useSelector((state) => state.authReducer);
  const {
    isLoading,
    isAuthenticated,
    email_available,
    email_available_error,
  } = authReducer;
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not valid")
        .required("Email can't be empty"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      console.log(values);
      if (email_available) {
        router.push("/register");
      }
    },
  });

  const handleShowModal = () => {
    setShowModal(true);
    formik.setErrors({});
  };

  const handleHideModal = () => {
    if (showModal) {
      setShowModal(false);
      handleCloseTryFree();
      dispatch(resetEmailAvailable());
      formik.resetForm();
    }
  };

  useEffect(() => {
    setShowModal(openTryItFree);
  }, [openTryItFree]);
  const modalRef = useRef();
  useOutsideClick(modalRef, () => handleHideModal());
  // Mobile menu
  const mobileMenuRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleCloseMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  useOutsideClick(mobileMenuRef, () => handleCloseMobileMenu());

  React.useEffect(() => {
    dispatch(resetEmailAvailable());
    if (formik.values.email != "") {
      const timeoutId = setTimeout(() => {
        dispatch(isEmailAvailable({ email: formik.values.email }));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formik.values.email]);

  return (
    <>
      <div className="max-w-7xl 2xl:max-w-3/4 mx-auto px-4 sm:px-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a href="#" className="flex items-center">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10 mr-2"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                  <span className="text-2xl font-bold text-gray-700">
                    FullOrderTracker
                  </span>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={handleToggleMobileMenu}
                  type="button"
                  className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open main menu</span>
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            <Link href="/">
              <a className="font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
            </Link>
            <Link href="/features">
              <a className="font-medium text-gray-500 hover:text-gray-900">
                Features
              </a>
            </Link>
            <Link href="/pricing">
              <a className="font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </Link>
          </div>
          {!isLoading && isAuthenticated ? (
            <>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow ml-3">
                  <Link href="/dashboard">
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                      Go to Dashboard
                    </span>
                  </Link>
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <Link href="/buyers">
                  <a className="hidden lg:block font-medium text-gray-500 hover:text-gray-900 mr-3">
                    Are you a buyer?
                  </a>
                </Link>
                <span className="inline-flex rounded-md shadow">
                  <Link href="/login">
                    <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                      Log in
                    </a>
                  </Link>
                </span>
                <span className="inline-flex rounded-md shadow ml-3">
                  <span
                    onClick={handleShowModal}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                  >
                    Try it free
                  </span>
                </span>
              </div>
            </>
          )}
        </nav>
      </div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div
        className={`${
          showModal ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              ref={modalRef}
            >
              <div>
                <div className="text-center">
                  <h3
                    className="text-2xl  leading-6 font-bold text-gray-900 "
                    id="modal-headline"
                  >
                    Try platform for 14 days
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Immediate access. No credit card required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div>
                  <div className="mt-1">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      {email_available_error &&
                        email_available_error.data.non_field_errors.map(
                          (message, i) => (
                            <p
                              key={i}
                              className="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {message}
                            </p>
                          )
                        )}
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className={
                            (formik.touched.email && formik.errors.email) ||
                            email_available_error
                              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                              : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          }
                          placeholder="you@example.com"
                          aria-describedby="email-description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {((formik.touched.email && formik.errors.email) ||
                          email_available_error) && (
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

                      {formik.touched.email && formik.errors.email ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        ref={mobileMenuRef}
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <button
                onClick={handleCloseMobileMenu}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-2 pt-2 pb-3" role="none">
              <Link href="/">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Home
                </a>
              </Link>
              <Link href="/features">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Features
                </a>
              </Link>
              <Link href="/pricing">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Pricing
                </a>
              </Link>
              <Link href="/customers">
                <a
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Are you a customer?
                </a>
              </Link>
            </div>
            <div role="none">
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                role="menuitem"
              >
                Log in on
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
