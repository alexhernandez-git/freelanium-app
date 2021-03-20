import axios from "axios";
import BuyerInformation from "components/pages/order-checkout/BuyerInformation";
import Header from "components/pages/order-checkout/Header";
import OrderSummary from "components/pages/order-checkout/OrderSummary";
import ProductInfo from "components/pages/order-checkout/ProductInfo";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { acceptOffer } from "redux/actions/offers";
import PaymentMethodForm from "components/Forms/PaymentMethodForm";
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
    used_credits: 0,
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
          console.log(offersReducer.offer);
          const currencyRate = res.data.rates[authReducer.currency];
          let subtotal = offersReducer.offer.unit_amount * currencyRate;
          if (offersReducer.offer?.type == "TP") {
            subtotal = offersReducer.offer.first_payment * currencyRate;
          }
          const fixed_fee = 0.3 * currencyRate;
          const service_fee = (subtotal * 5) / 100 + fixed_fee;
          let payment_at_delivery = 0;
          let first_payment = 0;
          if (offersReducer.offer?.type == "TP") {
            payment_at_delivery =
              offersReducer.offer?.payment_at_delivery * currencyRate;

            first_payment = offersReducer.offer.first_payment * currencyRate;
          }

          const unit_amount = subtotal + service_fee;
          const available_for_withdawal =
            (parseFloat(authReducer.user?.available_for_withdrawal) +
              parseFloat(authReducer.user?.pending_clearance)) *
            currencyRate;
          let used_credits = 0;
          if (available_for_withdawal > 0) {
            if (available_for_withdawal > subtotal) {
              used_credits = subtotal;
            } else {
              const diff = available_for_withdawal - subtotal;
              used_credits = subtotal + diff;
            }
          }
          setOffer({
            ...offersReducer.offer,
            first_payment: first_payment.toFixed(2),
            subtotal: subtotal.toFixed(2),
            service_fee: service_fee.toFixed(2),
            unit_amount: unit_amount.toFixed(2),
            payment_at_delivery: payment_at_delivery.toFixed(2),
            used_credits: used_credits.toFixed(2),
          });
        })
        .catch((err) => console.log("entra"));
    }
  }, [offersReducer.is_loading, authReducer.currency]);

  const [stripeError, setStripeError] = useState(null);
  console.log(authReducer.user?.default_payment_method);
  const formik = useFormik({
    initialValues: {
      payment_method_id: authReducer.user?.default_payment_method,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      payment_method_id: Yup.string().required("Payment method is required"),
    }),
    onSubmit: async (values) => {
      dispatch(
        acceptOffer({
          ...values,
          offer: offer,
        })
      );
    },
  });

  useEffect(() => {
    if (offersReducer.order_accepted) {
      setStep(2);
    }
  }, [offersReducer.accepting_offer]);

  return !initialDataReducer.initial_data_fetched || !offersReducer.offer ? (
    offersReducer.error ? (
      <div className="h-screen flex justify-center items-center text-gray-500">
        Offer not avaliable
      </div>
    ) : (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    )
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
                    <a
                      href="/dashboard"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Go to your dashboard
                    </a>
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
                      <PaymentMethodForm
                        offer={offer}
                        formikPaymentMethods={formik}
                        stripeError={stripeError}
                        setStripeError={setStripeError}
                      />
                    ) : (
                      <BuyerInformation offer={offer} />
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
