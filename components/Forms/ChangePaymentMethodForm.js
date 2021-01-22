import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import currencies from "data/currencies";
import useAuthRequired from "hooks/useAuthRequired";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { addBillingInformation, changePaymentMethod } from "redux/actions/auth";
import Spinner from "components/ui/Spinner";

const ChangePaymentMethodForm = ({
  handleCloseChangePaymentMethod,
  planPaymentMethod,
}) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
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
        changePaymentMethod(
          values,
          paymentMethod,
          handleCloseChangePaymentMethod
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
    onSubmit: async (values) => {
      stripeSubmit(values);
    },
  });

  const handleCardElement = (e) => {
    console.log(e);
    setStripeError(e.error);
  };

  const [addPaymentMethod, setAddPaymentMethod] = useState(false);
  const handleOpenAddPaymentMethod = () => {
    setAddPaymentMethod(true);
  };
  const [paymentMethods, setPaymentMethods] = useState([]);
  useEffect(() => {
    if (
      !authReducer.is_loading &&
      planPaymentMethod &&
      authReducer.user?.payment_methods
    ) {
      const paymentMethods = authReducer.user?.payment_methods.filter(
        (pm) => pm.id !== planPaymentMethod.id
      );
      setPaymentMethods(paymentMethods);
    }
  }, [planPaymentMethod]);
  const formikPaymentMethods = useFormik({
    initialValues: {
      payment_method_id: "",
    },
    validationSchema: Yup.object({
      payment_method_id: Yup.string().required("Payment method is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log(valores);
      console.log(values);
      // dispatch(inviteUser(values, resetForm, handleHideInviteContact));
    },
  });
  return addPaymentMethod ? (
    <section aria-labelledby="payment_details_heading">
      <form onSubmit={formik.handleSubmit}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6 relative">
            {authReducer.changing_payment_method && (
              <div className="absolute right-6">
                <Spinner />
              </div>
            )}
            <div>
              <h2
                id="payment_details_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Change payment method
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
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
            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-3">
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
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600  border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </section>
  ) : (
    <section aria-labelledby="payment_details_heading">
      <form onSubmit={formik.handleSubmit}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6 relative">
            {authReducer.changing_payment_method && (
              <div className="absolute right-6">
                <Spinner />
              </div>
            )}
            <div>
              <h2
                id="payment_details_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Change payment method
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-4">
                <fieldset>
                  <legend className="sr-only">Pricing plans</legend>
                  <ul className="relative bg-white rounded-md -space-y-px">
                    {paymentMethods.map((payment_method, index) => (
                      <li>
                        <div
                          className={`relative border ${
                            index === 0 && "rounded-tl-md rounded-tr-md"
                          } p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3`}
                        >
                          <label className="flex items-center text-sm cursor-pointer">
                            <input
                              name="payment_method_id"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
                              aria-describedby="plan-option-pricing-0 plan-option-limit-0"
                              onChange={formikPaymentMethods.handleChange}
                              onBlur={formikPaymentMethods.handleBlur}
                              value={payment_method.id}
                              checked={
                                formikPaymentMethods.values.payment_method_id ==
                                payment_method.id
                              }
                            />
                            <span className="ml-3 font-medium text-gray-900">
                              {payment_method.card.brand}
                            </span>
                          </label>
                          <p
                            id="plan-option-pricing-1"
                            className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                          >
                            <span className="font-medium">
                              **** **** **** {payment_method.card.last4}
                            </span>
                          </p>
                          {/* <div
                            id="plan-option-limit-1"
                            className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:flex justify-end items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              className="w-6 h-6 text-gray-600 cursor-pointer"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div> */}
                        </div>
                      </li>
                    ))}

                    <li>
                      <div
                        className="relative border border-gray-200 rounded-bl-md rounded-br-md px-4 py-2 cursor-pointer"
                        onClick={handleOpenAddPaymentMethod}
                      >
                        <p
                          id="plan-option-limit-2"
                          className="text-sm font-medium text-gray-600 text-center flex justify-center items-center"
                        >
                          Add new credit card
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </p>
                      </div>
                    </li>
                  </ul>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
            <button
              type="button"
              onClick={handleCloseChangePaymentMethod}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
