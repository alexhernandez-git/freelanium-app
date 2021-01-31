import axios from "axios";
import BuyerInformation from "components/pages/order-checkout/BuyerInformation";
import Header from "components/pages/order-checkout/Header";
import OrderSummary from "components/pages/order-checkout/OrderSummary";
import PaymentMethodComponent from "components/pages/order-checkout/PaymentMethod";
import ProductInfo from "components/pages/order-checkout/ProductInfo";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByJwt } from "redux/actions/auth";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { acceptOffer } from "redux/actions/offers";
const OrderCheckout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const formRef = useRef();
  const hanldeGoToStepTwo = () => {
    setStep(1);
  };
  const initialDataReducer = useSelector((state) => state.initialDataReducer);
  const authReducer = useSelector((state) => state.authReducer);
  const offersReducer = useSelector((state) => state.offersReducer);
  const [offer, setOffer] = useState({
    id: "",
    send_offer_by_email: false,
    buyer_email: "",
    buyer: "",
    seller: "",
    title: "",
    description: "",
    unit_amount: "",
    type: "",
    first_payment: "",
    payment_at_delivery: "",
    delivery_date: "",
    delivery_time: 0,
    accepted: false,
    interval_subscription: "",
  });
  useEffect(() => {
    if (!offersReducer.is_loading && offersReducer.offer) {
      axios
        .get("https://api.exchangeratesapi.io/latest?base=USD")
        .then((res) => {
          const currencyRate = res.data.rates[authReducer.currency];
          const subtotal = offersReducer.offer.unit_amount * currencyRate;
          const fixed_fee = 0.3 * currencyRate;
          const service_fee = (subtotal * 5) / 100 + fixed_fee;
          const unit_amount = subtotal + service_fee;
          let payment_at_delivery = 0;
          if (offersReducer.offer?.type == "TP") {
            payment_at_delivery =
              offersReducer.offer?.payment_at_delivery * currencyRate;
          }
          setOffer({
            ...offersReducer.offer,
            subtotal: subtotal.toFixed(2),
            service_fee: service_fee.toFixed(2),
            unit_amount: unit_amount.toFixed(2),
            payment_at_delivery: payment_at_delivery.toFixed(2),
          });
        })
        .catch((err) => console.log("entra"));
    }
  }, [offersReducer.is_loading, authReducer.currency]);
  useEffect(() => {
    if (!offersReducer.is_loading) {
      if (offersReducer.offer) {
      } else {
        router.push("/");
      }
    }
  }, [offersReducer.is_loading]);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeError, setStripeError] = useState(null);
  const stripeSubmit = async (values) => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setStripeError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setStripeError(null);

      dispatch(
        acceptOffer({
          ...values,
          offer: offer,
          payment_method_id: paymentMethod.id,
        })
      );
      // dispatch(
      //   attachPaymentMethod(
      //     { ...values, payment_method_id: paymentMethod.id },
      //     handleCloseAddPaymentMethod,
      //     resetForm
      //   )
      // );
    }
  };
  const formik = useFormik({
    initialValues: {
      card_name: "",
    },
    validationSchema: Yup.object({
      card_name: Yup.string()
        .max(150, "Name must be at most 150 characters")
        .required("Credit card name is required"),
    }),
    onSubmit: async (values) => {
      stripeSubmit(values);
    },
  });

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
                  <PaymentMethodComponent
                    offer={offer}
                    formik={formik}
                    stripeError={stripeError}
                    setStripeError={setStripeError}
                  />
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
                formik={formik}
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
