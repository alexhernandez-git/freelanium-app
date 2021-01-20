import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import currencies from "data/currencies";
import useAuthRequired from "hooks/useAuthRequired";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import countries from "data/countries";
import { useDispatch } from "react-redux";
import { addBillingInformation } from "redux/actions/auth";

const ChangePaymentMethodForm = ({ handleCloseChangePaymentMethod }) => {
  const dispatch = useDispatch();
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
      dispatch(addBillingInformation(values, paymentMethod));
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

  const handleCardElement = (e) => {
    console.log(e);
    setStripeError(e.error);
  };
  return (
    <section aria-labelledby="payment_details_heading">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="payment_details_heading"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Change payment method
              </h2>
            </div>

            <div class="mt-6 grid grid-cols-4 gap-6">
              <div class="col-span-4 sm:col-span-2">
                <label
                  htmlFor="card_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Credit Card Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="card_name"
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
            <div class="mt-6 grid grid-cols-4 gap-6">
              <div class="col-span-4 sm:col-span-3">
                <label
                  htmlFor="card_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Credit Card
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
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
            <button
              type="button"
              onClick={handleCloseChangePaymentMethod}
              class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600  border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ChangePaymentMethodForm;
