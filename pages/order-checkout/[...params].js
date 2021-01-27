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
  const [offer, setOffer] = useState({
    buyer: "",
    send_offer_by_email: true,
    buyer_email: "antonio@gmail.com",
    days_for_delivery: "4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo nostrum dicta expedita et, at iste voluptas quisquam error, voluptate omnis nisi ullam harum dolorum, fuga voluptatum reiciendis aperiam doloribus!",
    first_payment: 0,
    interval_subscription: "AN",
    order_type: "TP",
    title: "Academia de Yoga",
    total_amount: "434.44",
  });
  return (
    <div>
      {/* Header */}
      <Header step={step} />
      {/* body */}
      <div>
        {/* Product description */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2 p-3 md:p-0">
            {step == 0 && <ProductInfo offer={offer} />}
            {step == 1 && (
              <>
                {isAuthenticated ? (
                  <PaymentMethodComponent offer={offer} />
                ) : (
                  <BuyerInformation
                    handleAuthenticate={handleAuthenticate}
                    offer={offer}
                  />
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
                offer={offer}
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
