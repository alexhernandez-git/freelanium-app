import React from "react";

const ProductInfo = ({ offer }) => {
  return (
    <div>
      {offer.order_type === "TP" && (
        <div className="mb-3">
          <span className="text-gray-500">Two Payments</span>
        </div>
      )}

      {offer.order_type === "RO" && (
        <div className="mb-3">
          <span className="text-gray-500">Recurrent Subscription</span>
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-900">{offer.title}</h1>
      <div className="mt-4 md:flex justify-between">
        <div>
          <p className="mt text-sm text-gray-500">{offer.description}</p>
        </div>
        <p className="hidden md:flex pl-20 pr-5 font-bold">
          ${offer.total_amount}{" "}
          {offer.order_type === "RO" && (
            <span className="ml-1 font-normal">
              {offer.interval_subscription === "AN" ? "/year" : "/month"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
