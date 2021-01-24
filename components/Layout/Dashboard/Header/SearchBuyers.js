import useOutsideClick from "hooks/useOutsideClick";
import React, { useRef, useState } from "react";

const SearchBuyers = () => {
  const [openBuyersList, setOpenBuyersList] = useState(false);
  const handleShowBuyersList = (e) => {
    e.preventDefault();
    setOpenBuyersList(true);
  };

  const openBuyersListRef = useRef();

  const handleCloseBuyersList = () => {
    if (openBuyersList) {
      setOpenBuyersList(false);
    }
  };

  useOutsideClick(openBuyersListRef, () => handleCloseBuyersList());

  const [openEmailInput, setOpenEmailInput] = useState(false);
  const handleShowEmailInput = () => {
    setOpenEmailInput(true);
  };
  const openEmailInputRef = useRef();

  const handleCloseEmailInput = () => {
    if (openEmailInput) {
      setOpenEmailInput(false);
    }
  };

  useOutsideClick(openEmailInputRef, () => handleCloseEmailInput());
  return (
    <div>
      <input
        type="text"
        name="first_name"
        onFocus={handleShowBuyersList}
        id="first_name"
        autoComplete={false}
        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
      />
      <div
        className={`${!openBuyersList && "hidden"} relative`}
        ref={openBuyersListRef}
      >
        <div className="absolute  bg-white w-full z-40 shadow rounded">
          <ul className="relative z-0 divide-y divide-gray-200">
            <li className="bg-white">
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900">
                      Leslie Abbott
                    </p>
                    <p className="text-sm text-gray-500 truncate">Leslie</p>
                  </a>
                </div>
              </div>
            </li>

            <li className="bg-white">
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900">
                      Hector Adams
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      VP, Marketing
                    </p>
                  </a>
                </div>
              </div>
            </li>

            <li className="bg-white">
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900">
                      Blake Alexander
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Account Coordinator
                    </p>
                  </a>
                </div>
              </div>
            </li>

            <li className="bg-white">
              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    <p className="text-sm font-medium text-gray-900">
                      Fabricio Andrews
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      Senior Art Director
                    </p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="space-y-3">
            <div
              className={`${
                !openEmailInput && "hidden"
              } p-3 border border-gray-200 rounded m-2`}
              ref={openEmailInputRef}
            >
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      autoFocus
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <li
              className={`${
                openEmailInput && "hidden"
              } bg-white shadow overflow-hidden  p-2 sm:rounded-md `}
            >
              <button
                onClick={handleShowEmailInput}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              >
                Send offer by email
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBuyers;
