import React from "react";

export const InfoBadge = ({ children, className }) => {
  return (
    <span
      className={`${className} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800`}
    >
      {children}
    </span>
  );
};
