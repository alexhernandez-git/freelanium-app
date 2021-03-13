import getSymbolFromCurrency from "currency-symbol-map";
import React from "react";
import { useSelector } from "react-redux";

const ProductInfo = ({ offer }) => {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <div>
      {offer?.type === "TP" && (
        <div className="mb-3">
          <span className="text-gray-500">Two Payments</span>
        </div>
      )}

      {offer?.type === "RO" && (
        <div className="mb-3">
          <span className="text-gray-500">Recurrent Subscription</span>
        </div>
      )}
      <h1 className="text-2xl font-bold text-gray-900">{offer?.title}</h1>
      <div className="mt-4 md:flex justify-between">
        <div>
          <p className="mt text-sm text-gray-500">{offer?.description}</p>
        </div>
        <p className="hidden md:flex pl-20 pr-5 font-medium text-gray-600">
          {getSymbolFromCurrency(authReducer.currency)}
          {offer?.subtotal}
          {offer?.type === "RO" && (
            <span className="font-normal">
              {offer?.interval_subscription === "AN" ? "/year" : "/month"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
