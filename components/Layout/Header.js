import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </Link>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                id="main-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
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
        <div class="hidden md:flex md:space-x-10">
          <Link href="/">
            <a class="font-medium text-gray-500 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/features">
            <a class="font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>
          </Link>
          <Link href="/pricing">
            <a class="font-medium text-gray-500 hover:text-gray-900">Pricing</a>
          </Link>
        </div>
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span class="inline-flex rounded-md shadow">
            <Link href="/login">
              <a class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Log in
              </a>
            </Link>
          </span>
          <span class="inline-flex rounded-md shadow ml-3">
            <Link href="/login">
              <a class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Join
              </a>
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

const MobileHeader = () => {
  return (
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
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
          <div class="px-2 pt-2 pb-3" role="none">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Home
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Features
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem"
            >
              Pricing
            </a>
          </div>
          <div role="none">
            <a
              href="#"
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
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
