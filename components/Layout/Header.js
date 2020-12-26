import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = ({ openTryItFree, handleCloseTryFree }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    if (showModal) {
      setShowModal(false);
      handleCloseTryFree();
    }
  };

  useEffect(() => {
    setShowModal(openTryItFree);
  }, [openTryItFree]);
  const modalRef = useRef();
  useOutsideClick(modalRef, () => handleHideModal());
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
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
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
        </nav>
      </div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div
        className={`${
          showModal ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
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
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="Email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link href="/register">
                <a>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-lg"
                  >
                    Continue
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileHeader = () => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Home
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Features
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Pricing
            </a>
          </div>
          <div role="none">
            <a
              href="#"
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              role="menuitem"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header, MobileHeader };
