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
        .get(
          `https://api.exchangeratesapi.io/${
            offersReducer.offer.rate_date
              ? offersReducer.offer.rate_date
              : "latest"
          }?base=USD`
        )
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

  useEffect(() => {
    if (offersReducer.order_accepted) {
      setStep(2);
    }
  }, [offersReducer.accepting_offer]);
  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };
  return !initialDataReducer.initial_data_fetched || !offersReducer.offer ? (
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
        <div
          className={
            step < 2
              ? "mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
              : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          }
        >
          {step == 2 && (
            <div className="">
              <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Payment successful
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your order number is:
                        </p>
                        <p className="text-sm text-gray-500 font-bold">
                          {offersReducer.order_accepted?.id}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      onClick={handleGoToDashboard}
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Go to your dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {step < 2 && (
            <>
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
            </>
          )}
        </div>
        {/* Price card */}
      </div>
    </div>
  );
};

export default OrderCheckout;
