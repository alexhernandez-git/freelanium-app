import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgetPassword, login } from "redux/actions/auth";
import useRedirectIfIsAuthenticated from "hooks/useRedirectIfIsAuthenticated";
import { useAlert } from "hooks/useAlert";
const loginPage = () => {
  useRedirectIfIsAuthenticated();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, isAuthenticated } = authReducer;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not valid")
        .required("Email can't be empty"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      dispatch(login(values));
    },
  });

  // Redirect if login success
  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/dashboard");
      }
    }
  }, [isLoading, isAuthenticated]);

  const [forgotPassword, setForgotPassword] = useState(false);
  const handleOpenForgotPassword = () => {
    setForgotPassword(true);
  };
  const handleCloseForgotPassword = () => {
    setForgotPassword(false);
  };

  const resetPasswordForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not valid")
        .required("Email can't be empty"),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch(forgetPassword(values));
      resetForm({});
    },
  });

  const alert = useAlert();
  return (
    <>
      {alert}
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {forgotPassword ? "Forgot password" : "Sign in to your account"}
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a>
        </p> */}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {forgotPassword ? (
              <>
                <div
                  className="text-gray-500 flex items-center mb-5 cursor-pointer"
                  onClick={handleCloseForgotPassword}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="mr-2 w-4 h-4 "
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="text-sm">Go back</span>
                </div>
                {authReducer.forget_password_error &&
                  authReducer.forget_password_error?.data?.non_field_errors &&
                  authReducer.forget_password_error?.data?.non_field_errors.map(
                    (message, i) => (
                      <div
                        key={i}
                        className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                      >
                        <p>{message}</p>
                      </div>
                    )
                  )}
                <form
                  className="space-y-6"
                  onSubmit={resetPasswordForm.handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={resetPasswordForm.handleChange}
                        onBlur={resetPasswordForm.handleBlur}
                        value={resetPasswordForm.values.email}
                      />
                    </div>
                  </div>
                  {resetPasswordForm.touched.email &&
                  resetPasswordForm.errors.email ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{resetPasswordForm.errors.email}</p>
                    </div>
                  ) : null}

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                {authReducer.error &&
                  authReducer.error.data.non_field_errors &&
                  authReducer.error.data.non_field_errors.map((message, i) => (
                    <div
                      key={i}
                      className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                    >
                      <p>{message}</p>
                    </div>
                  ))}
                {authReducer.error && authReducer.error.data.detail && (
                  <div className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p>Invalid credentials</p>
                  </div>
                )}
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{formik.errors.email}</p>
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
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                    </div>
                  </div>

                  {formik.touched.password && formik.errors.password ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{formik.errors.password}</p>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        onClick={handleOpenForgotPassword}
                        className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default loginPage;
