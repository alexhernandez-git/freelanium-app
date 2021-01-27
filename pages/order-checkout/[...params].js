import BuyerInformation from "components/pages/order-checkout/BuyerInformation";
import Header from "components/pages/order-checkout/Header";
import OrderSummary from "components/pages/order-checkout/OrderSummary";
import PaymentMethodComponent from "components/pages/order-checkout/PaymentMethod";
import ProductInfo from "components/pages/order-checkout/ProductInfo";
import { useRouter } from "next/router";
import React, { useState } from "react";

const OrderCheckout = () => {
  const router = useRouter();
  const { params } = router.query;
  const [step, setStep] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };
  const hanldeGoToStepTwo = () => {
    setStep(1);
  };
  return (
    <div>
      {/* Header */}
      <Header step={step} />
      {/* body */}
      <div>
        {/* Product description */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2 p-3 md:p-0">
            {step == 0 && <ProductInfo />}
            {step == 1 && (
              <>
                {isAuthenticated ? (
                  <PaymentMethodComponent />
                ) : (
                  <BuyerInformation handleAuthenticate={handleAuthenticate} />
                )}
              </>
            )}
          </div>
          <section
            aria-labelledby="timeline-title"
            className="lg:col-start-3 lg:col-span-1"
          >
            {(step == 0 || step == 1) && (
              <OrderSummary
                step={step}
                hanldeGoToStepTwo={hanldeGoToStepTwo}
                isAuthenticated={isAuthenticated}
              />
            )}
          </section>
        </div>
        {/* Price card */}
        <div></div>
      </div>
    </div>
  );
};

export default OrderCheckout;
