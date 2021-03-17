import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  isUsernameAvailable,
  register_seller,
  resetAuthErrors,
  resetEmailAvailable,
  resetUsernameAvailable,
} from "redux/actions/auth";
import Spinner from "components/ui/Spinner";
const registerPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);
  const {
    is_authenticated,
    email_available,
    username_available_error,
  } = authReducer;

  const formik = useFormik({
    initialValues: {
      email: email_available,
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username name is required"),
      email: Yup.string().required("Email is required"),
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
      dispatch(register_seller(values, router));
    },
  });

  useEffect(() => {
    if (!email_available) {
      router.back();
    }
    dispatch(resetEmailAvailable());
  }, []);
  useEffect(() => {
    if (is_authenticated) {
      router.push("/dashboard");
    }
  }, [is_authenticated]);
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
  return authReducer.registing ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      <nav aria-label="Progress" className="bg-gray-50 p-4">
        <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          <li className="md:flex-1">
            <a
              href="#"
              className="group pl-4 py-2 flex flex-col border-l-4 border-cyan-600 hover:border-cyan-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            >
              <span className="text-xs text-cyan-600 font-semibold uppercase group-hover:text-cyan-800">
                Step 1
              </span>
              <span className="text-sm font-medium">Insert your email</span>
            </a>
          </li>

          <li className="md:flex-1">
            <a
              href="#"
              className="pl-4 py-2 flex flex-col border-l-4 border-cyan-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              aria-current="step"
            >
              <span className="text-xs text-cyan-600 font-semibold uppercase">
                Step 2
              </span>
              <span className="text-sm font-medium">Application form</span>
            </a>
          </li>
          {/* <li className="md:flex-1">
            <a
              href="#"
              className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
            >
              <span className="text-xs text-gray-500 font-semibold uppercase group-hover:text-gray-700">
                Step 3
              </span>
              <span className="text-sm font-medium">Preview</span>
            </a>
          </li> */}
        </ol>
      </nav>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Some Assembly Required
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            <span className="font-medium text-cyan-600">
              Start your 14-day free trial
            </span>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {authReducer.error &&
              authReducer.error.data.username &&
              authReducer.error.data.username.map((message, i) => (
                <div
                  key={i}
                  className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                >
                  <p>{message}</p>
                </div>
              ))}
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="first_name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                </div>
              </div>
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.first_name}</p>
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="last_name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                </div>
              </div>
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.last_name}</p>
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                </div>
              </div>
              {username_available_error &&
                username_available_error.data.non_field_errors &&
                username_available_error.data.non_field_errors.map(
                  (message, i) => (
                    <div
                      key={i}
                      className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    >
                      <p className="font-bold">Username</p>
                      <p>{message}</p>
                    </div>
                  )
                )}
              {formik.touched.username && formik.errors.username ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.username}</p>
                </div>
              ) : null}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
              {authReducer &&
                authReducer?.register_error?.data?.non_field_errors &&
                authReducer.register_error.data.non_field_errors.map(
                  (message, i) => (
                    <div
                      key={i}
                      className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    >
                      <p>{message}</p>
                    </div>
                  )
                )}
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm password
                </label>
                <div className="mt-1">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password_confirmation}
                  />
                </div>
              </div>
              {formik.touched.password_confirmation &&
              formik.errors.password_confirmation ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>{formik.errors.password_confirmation}</p>
                </div>
              ) : null}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  CONTINUE
                </button>
                <div class="pt-5">
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                    >
                      Terms
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                    >
                      Data Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                    >
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default registerPage;
