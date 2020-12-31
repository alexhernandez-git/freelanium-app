import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changePassword, login, resetPassword } from "redux/actions/auth";
import useRedirectIfIsAuthenticated from "hooks/useRedirectIfIsAuthenticated";
import { useNotification } from "hooks/useNotification";
const loginPage = () => {
  useRedirectIfIsAuthenticated();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const { isLoading, isAuthenticated } = authReducer;
  const router = useRouter();
  const { token } = router.query;

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long ")
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      dispatch(resetPassword({ ...values, token: token }, router));
    },
  });
  const notification = useNotification();

  return (
    <>
      {notification}
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create new password
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      autoComplete="current-confirm_password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirm_password}
                    />
                  </div>
                </div>

                {formik.touched.confirm_password &&
                formik.errors.confirm_password ? (
                  <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.confirm_password}</p>
                  </div>
                ) : null}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change password
                  </button>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default loginPage;
