import React from "react";

const InfoBadge = ({ text, className }) => {
  return (
    <span
      class={`${className} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800`}
    >
      {text}
    </span>
  );
};

export { InfoBadge };
