import React from "react";

const PrimaryButton = ({ text, className }) => {
  return (
    <button
      type="button"
      className={`${className} inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-indigo-500`}
    >
      Send an Offer
    </button>
  );
};
const SecondaryButton = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      class={`${className} inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none `}
    >
      {text}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
