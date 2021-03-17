import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  isEmailAvailable,
  isUsernameAvailable,
  register_buyer,
  register_seller,
  resetAuthErrors,
  resetEmailAvailable,
  resetUsernameAvailable,
} from "redux/actions/auth";
const RegisterForm = ({ isSeller, token }) => {
  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);
  const { username_available_error, email_available_error } = authReducer;
  const initialValues = {
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
  };
  if (token) {
    initialValues.invitation_token = token;
  }
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
      invitation_token: Yup.string(),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      console.log(values);
      if (isSeller) {
        dispatch(register_seller(values));
      } else {
        dispatch(register_buyer(values));
      }
    },
  });
  React.useEffect(() => {
    dispatch(resetEmailAvailable());
    if (formik.values.email != "") {
      const timeoutId = setTimeout(() => {
        dispatch(isEmailAvailable({ email: formik.values.email }));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formik.values.email]);
  React.useEffect(() => {
    dispatch(resetUsernameAvailable());
    if (formik.values.username != "") {
      const timeoutId = setTimeout(() => {
        dispatch(isUsernameAvailable({ username: formik.values.username }));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formik.values.username]);
  useEffect(() => {
    if (authReducer?.register_error?.data?.non_field_errors) {
      dispatch(resetAuthErrors());
    }
  }, [formik.values.password]);
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="text-center text-2xl font-extrabold text-gray-700">
          Get access to your own{" "}
          <span className="block text-cyan-400">
            {isSeller ? "seller" : "buyer"} dashboard
          </span>
        </h3>
      </div>
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            placeholder="Username"
            className={
              (formik.touched.username && formik.errors.username) ||
              username_available_error
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
          username_available_error.data.non_field_errors.map((message, i) => (
            <p class="mt-2 text-sm text-red-600" id="username-error">
              {message}
            </p>
          ))}
      </div>

      <div>
        <label htmlFor="first_name" className="sr-only">
          First name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="first_name"
            placeholder="First name"
            className={
              formik.touched.first_name && formik.errors.first_name
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
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

      <div>
        <label htmlFor="last_name" className="sr-only">
          Last name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="last_name"
            placeholder="Last name"
            className={
              formik.touched.last_name && formik.errors.last_name
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
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

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={
              (formik.touched.email && formik.errors.email) ||
              email_available_error
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
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
        {((formik.touched.email && formik.errors.email) ||
          email_available_error) && (
          <p class="mt-2 text-sm text-red-600" id="email-error">
            {formik.errors.email}
          </p>
        )}
        {email_available_error &&
          email_available_error.data.non_field_errors &&
          email_available_error.data.non_field_errors.map((message, i) => (
            <p class="mt-2 text-sm text-red-600" id="email-error">
              {message}
            </p>
          ))}
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={
              (formik.touched.password && formik.errors.password) ||
              authReducer?.register_error?.data?.non_field_errors
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {((formik.touched.password && formik.errors.password) ||
            authReducer?.register_error?.data?.non_field_errors) && (
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
        {authReducer &&
          authReducer?.register_error?.data?.non_field_errors &&
          authReducer.register_error.data.non_field_errors.map((message, i) => (
            <p class="mt-2 text-sm text-red-600" id="email-error">
              {message}
            </p>
          ))}
        {formik.touched.password && formik.errors.password && (
          <p class="mt-2 text-sm text-red-600" id="password-error">
            {formik.errors.password}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password_confirmation" className="sr-only">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="Password confirmation"
            autoComplete="password_confirmation"
            className={
              formik.touched.password_confirmation &&
              formik.errors.password_confirmation
                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
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

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Create your account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
