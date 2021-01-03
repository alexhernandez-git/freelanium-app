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
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="text-center text-2xl font-extrabold text-gray-700">
          Get access to your own{" "}
          <span className="block text-indigo-400">
            {isSeller ? "seller" : "buyer"} dashboard
          </span>
        </h3>
      </div>
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          placeholder="Username"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
      </div>
      {username_available_error &&
        username_available_error.data.non_field_errors.map((message, i) => (
          <div
            key={i}
            className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          >
            <p className="font-bold">Error</p>
            <p>{message}</p>
          </div>
        ))}
      {formik.touched.username && formik.errors.username ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.username}</p>
        </div>
      ) : null}
      <div>
        <label htmlFor="first_name" className="sr-only">
          First name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          autoComplete="first_name"
          placeholder="First name"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
        />
      </div>
      {formik.touched.first_name && formik.errors.first_name ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.first_name}</p>
        </div>
      ) : null}
      <div>
        <label htmlFor="last_name" className="sr-only">
          Last name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          autoComplete="last_name"
          placeholder="Last name"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
        />
      </div>
      {formik.touched.last_name && formik.errors.last_name ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.last_name}</p>
        </div>
      ) : null}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      {email_available_error &&
        email_available_error.data.non_field_errors &&
        email_available_error.data.non_field_errors.map((message, i) => (
          <div
            key={i}
            className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          >
            <p className="font-bold">Error</p>
            <p>{message}</p>
          </div>
        ))}
      {formik.touched.email && formik.errors.email ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.email}</p>
        </div>
      ) : null}
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.password}</p>
        </div>
      ) : null}
      <div>
        <label htmlFor="password_confirmation" className="sr-only">
          Password
        </label>
        <input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          placeholder="Password confirmation"
          autoComplete="password_confirmation"
          className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password_confirmation}
        />
      </div>
      {formik.touched.password_confirmation &&
      formik.errors.password_confirmation ? (
        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{formik.errors.password_confirmation}</p>
        </div>
      ) : null}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create your account
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
