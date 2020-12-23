import React from "react";

const SearchBar = ({ text }) => {
  return (
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input
          type="text"
          name="email"
          id="email"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md  sm:text-sm border-gray-300"
          placeholder={text}
        />
      </div>
      <button class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        {/* <!-- Heroicon name: sort-ascending --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="h-5 w-5 text-gray-400"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
