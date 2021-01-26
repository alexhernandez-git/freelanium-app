import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { changePaymentMethod, attachPaymentMethod } from "redux/actions/auth";
import Spinner from "components/ui/Spinner";

const PaymentMethodComponent = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeError, setStripeError] = useState(null);
  const stripeSubmit = async (values, resetForm) => {
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
        attachPaymentMethod(
          { ...values, payment_method_id: paymentMethod.id },
          handleCloseAddPaymentMethod,
          resetForm
        )
      );
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
    onSubmit: async (values, { resetForm }) => {
      stripeSubmit(values, resetForm);
    },
  });

  const handleCardElement = (e) => {
    console.log(e);
    setStripeError(e.error);
  };

  const [addPaymentMethod, setAddPaymentMethod] = useState(false);
  const handleOpenAddPaymentMethod = () => {
    if (!addPaymentMethod) {
      setAddPaymentMethod(true);
    }
  };
  const handleCloseAddPaymentMethod = (e) => {
    setAddPaymentMethod(false);
  };

  return (
    <section aria-labelledby="payment_details_heading">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6 relative rounded-tl-md rounded-tr-md">
            {authReducer.adding_payment_method && (
              <div className="absolute right-6">
                <Spinner />
              </div>
            )}
            <div>
              <h2
                id="payment_details_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Payment method
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="card_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="card_name"
                    form="new-payment-method-form"
                    id="card_name"
                    autoComplete="card_name"
                    className={
                      formik.touched.card_name && formik.errors.card_name
                        ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                        : "block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                    value={formik.values.card_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.card_name && formik.errors.card_name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {formik.touched.card_name && formik.errors.card_name && (
                  <p className="mt-2 text-sm text-red-600" id="card_name-error">
                    {formik.errors.card_name}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-3">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Info
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <CardElement
                    onChange={handleCardElement}
                    options={{ hidePostalCode: true }}
                    type="text"
                    name="card_number"
                    id="card_number"
                    autoComplete="given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {stripeError && (
                  <p className="mt-2 text-sm text-red-600">
                    {stripeError.message}
                  </p>
                )}
                {authReducer?.add_payment_method_error?.data
                  ?.non_field_errors &&
                  authReducer.add_payment_method_error.data.non_field_errors.map(
                    (error) => (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="card_name-error"
                      >
                        {error}
                      </p>
                    )
                  )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between items-center">
            <img
              src="/static/images/stripe-powered-by.png"
              alt="image"
              className="h-8"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default PaymentMethodComponent;
