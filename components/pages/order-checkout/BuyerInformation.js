import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isEmailAvailable,
  isUsernameAvailable,
  register_buyer,
  resetEmailAvailable,
  resetUsernameAvailable,
} from "redux/actions/auth";
import * as Yup from "yup";

const BuyerInformation = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { username_available_error, email_available_error } = authReducer;
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long ")
        .required("Password is required"),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      console.log(values);
      dispatch(register_buyer(values));
    },
  });

  useEffect(() => {
    dispatch(resetEmailAvailable());
    if (formik.values.email != "") {
      const timeoutId = setTimeout(() => {
        dispatch(isEmailAvailable({ email: formik.values.email }));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formik.values.email]);

  useEffect(() => {
    dispatch(resetUsernameAvailable());
    if (formik.values.username != "") {
      const timeoutId = setTimeout(() => {
        dispatch(isUsernameAvailable({ username: formik.values.username }));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formik.values.username]);
  return (
    <section aria-labelledby="payment_details_heading">
      <form onSubmit={formik.handleSubmit}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2
                id="payment_details_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Complete the form to track the order
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                We give you access to your dashboard to track your order, chat
                with the seller, and request a cancellation if is needed.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label
                  for="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="cc-given-name"
                      className={
                        formik.touched.first_name && formik.errors.first_name
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {formik.touched.first_name && formik.errors.first_name && (
                    <p class="mt-2 text-sm text-red-600" id="first_name-error">
                      {formik.errors.first_name}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  for="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autocomplete="cc-family-name"
                      className={
                        formik.touched.last_name && formik.errors.last_name
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {formik.touched.last_name && formik.errors.last_name && (
                    <p class="mt-2 text-sm text-red-600" id="last_name-error">
                      {formik.errors.last_name}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="email"
                      className={
                        (formik.touched.email && formik.errors.email) ||
                        email_available_error
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {((formik.touched.email && formik.errors.email) ||
                      email_available_error) && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p class="mt-2 text-sm text-red-600" id="email-error">
                      {formik.errors.email}
                    </p>
                  )}
                  {email_available_error &&
                    email_available_error.data?.non_field_errors.map(
                      (message, i) => (
                        <p
                          key={i}
                          class="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {message}
                        </p>
                      )
                    )}
                </div>
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  for="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autocomplete="username"
                      className={
                        (formik.touched.username && formik.errors.username) ||
                        username_available_error
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {((formik.touched.username && formik.errors.username) ||
                      username_available_error) && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {formik.touched.username && formik.errors.username && (
                    <p class="mt-2 text-sm text-red-600" id="username-error">
                      {formik.errors.username}
                    </p>
                  )}
                  {username_available_error &&
                    username_available_error.data?.non_field_errors.map(
                      (message, i) => (
                        <p
                          key={i}
                          class="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {message}
                        </p>
                      )
                    )}
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p class="mt-2 text-sm text-red-600" id="password-error">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  for="password_confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm password
                </label>
                <div className="mt-1 ">
                  <div className="relative">
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      className={
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                          ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                          : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password_confirmation}
                    />
                    {formik.touched.password_confirmation &&
                      formik.errors.password_confirmation && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                  </div>
                  {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation && (
                      <p
                        class="mt-2 text-sm text-red-600"
                        id="password_confirmation-error"
                      >
                        {formik.errors.password_confirmation}
                      </p>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <div className="flex justify-between items-center">
              <p class="text-xs leading-5 text-gray-500">
                By signing up, you agree to our{" "}
                <a href="#" class="font-medium text-gray-900 hover:underline">
                  Terms
                </a>
                ,{" "}
                <a href="#" class="font-medium text-gray-900 hover:underline">
                  Data Policy
                </a>{" "}
                and{" "}
                <a href="#" class="font-medium text-gray-900 hover:underline">
                  Cookies Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BuyerInformation;
