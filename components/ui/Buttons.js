import React from "react";

export const PrimaryButton = ({ children, className, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`inline-flex items-center px-3 py-2 border border-transparent 
              text-sm leading-4 font-medium rounded-md shadow-sm text-white 
              bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none ${className}`}
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
