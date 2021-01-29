import BuyerInformation from "components/pages/order-checkout/BuyerInformation";
import Header from "components/pages/order-checkout/Header";
import OrderSummary from "components/pages/order-checkout/OrderSummary";
import PaymentMethodComponent from "components/pages/order-checkout/PaymentMethod";
import ProductInfo from "components/pages/order-checkout/ProductInfo";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByJwt } from "redux/actions/auth";
const OrderCheckout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { params } = router.query;
  const [step, setStep] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };
  const hanldeGoToStepTwo = () => {
    setStep(1);
  };
  const initialDataReducer = useSelector((state) => state.initialDataReducer);
  const authReducer = useSelector((state) => state.authReducer);
  const offersReducer = useSelector((state) => state.offersReducer);
  const { offer } = offersReducer;

  useEffect(() => {
    if (!offersReducer.is_loading) {
      if (offersReducer.offer) {
      } else {
        router.push("/");
      }
    }
  }, [offersReducer.is_loading]);

  return !initialDataReducer.initial_data_fetched ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
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
                {authReducer.is_authenticated ? (
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
                isAuthenticated={authReducer.is_authenticated}
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
