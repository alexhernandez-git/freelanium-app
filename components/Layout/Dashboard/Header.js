import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { logout, toggleView } from "redux/actions/auth";
const Header = () => {
  const authReducer = useSelector((state) => state.authReducer);

  // Dispatch
  const dispatch = useDispatch();
  const handleToggleView = () => {
    dispatch(toggleView());
    router.push("/dashboard");
  };

  const router = useRouter();
  const dropdownMenuRef = useRef();
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const handleToggleDropdownMenu = () => {
    setDropdownMenuOpen(!dropdownMenuOpen);
  };
  const handleCloseDropdownMenu = () => {
    if (dropdownMenuOpen) {
      setDropdownMenuOpen(false);
    }
  };
  useOutsideClick(dropdownMenuRef, () => handleCloseDropdownMenu());
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
  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  };

  return (
    <>
      <nav className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  onClick={handleToggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  <svg
                    className="block h-6 w-6"
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
                  {/* <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                  <svg
                    className="hidden h-6 w-6"
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
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                <Link href="/dashboard">
                  <a
                    className={
                      router.pathname === "/dashboard"
                        ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                  >
                    Dashboard
                  </a>
                </Link>
                <Link href="/dashboard/orders">
                  <a
                    className={
                      /\/order?/.test(router.pathname)
                        ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                  >
                    Orders
                  </a>
                </Link>
                <Link href="/dashboard/messages">
                  <a
                    className={
                      router.pathname === "/dashboard/messages"
                        ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                  >
                    Messages
                  </a>
                </Link>
                <Link href="/dashboard/contacts">
                  <a
                    className={
                      router.pathname === "/dashboard/contacts"
                        ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                  >
                    Contacts
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-5">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium  text-green-500">
                  Credits: $2
                </span>
              </div>
              {authReducer.user && authReducer.user.seller_view ? (
                <>
                  <div className="flex-shrink-0 mr-5">
                    <Link href="/dashboard/settings/billing">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 cursor-pointer">
                        Free Trial
                      </span>
                    </Link>
                  </div>
                  <div className="flex-shrink-0 ">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {/* <!-- Heroicon name: plus --> */}
                      <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      <span>Send Offer</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {authReducer.user && authReducer.user.is_seller && (
                    <div className="flex-shrink-0">
                      <span
                        onClick={handleToggleView}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 cursor-pointer"
                      >
                        Back to seller
                      </span>
                    </div>
                  )}
                </>
              )}
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                {/* <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button> */}

                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={handleToggleDropdownMenu}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {/* <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                  <div
                    ref={dropdownMenuRef}
                    className={`${
                      dropdownMenuOpen ? "block" : "hidden"
                    } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50`}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        tom@example.com
                      </p>
                    </div>
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link href="/dashboard/settings">
                        <a
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Account settings
                        </a>
                      </Link>
                      {authReducer.user && authReducer.user.seller_view ? (
                        <>
                          <Link href="/dashboard/settings/billing">
                            <a
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              Plan & Billing
                            </a>
                          </Link>
                          <Link href="/dashboard/settings/earnings">
                            <a
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              Earnings
                            </a>
                          </Link>
                          <span
                            onClick={handleToggleView}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                            role="menuitem"
                          >
                            Go to buyer
                          </span>
                        </>
                      ) : (
                        <>
                          {authReducer.user && !authReducer.user.is_seller && (
                            <Link href="/dashboard/settings/earnings">
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Become a seller
                              </a>
                            </Link>
                          )}
                        </>
                      )}
                      {/* <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      >
                      License
                    </a> */}
                    </div>
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
        <div
          ref={mobileMenuRef}
          className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
            <Link href="/dashboard">
              <a
                className={
                  router.pathname === "/dashboard"
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                }
              >
                Dashboard
              </a>
            </Link>
            <Link href="/dashboard/orders">
              <a
                className={
                  /\/order?/.test(router.pathname)
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                }
              >
                Orders
              </a>
            </Link>
            <Link href="/dashboard/messages">
              <a
                className={
                  router.pathname === "/dashboard/messages"
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                }
              >
                Messages
              </a>
            </Link>
            <Link href="/dashboard/contacts">
              <a
                className={
                  router.pathname === "/dashboard/contacts"
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                }
              >
                Contacts
              </a>
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium text-gray-500">
                  tom@example.com
                </div>
              </div>
              {/* <button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button> */}
            </div>
            <div className="mt-3 space-y-1">
              <Link href="/dashboard/settings">
                <a className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6">
                  Account settings
                </a>
              </Link>
              <Link href="/">
                <a className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6">
                  Sign out
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
