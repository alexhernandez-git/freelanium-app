import React from "react";

export const PrimaryButton = ({ children, className, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`${className} inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${
                disabled && "opacity-25"
              }`}
    >
      {children}
    </button>
  );
};
export const SecondaryButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none `}
    >
      {children}
    </button>
  );
};
