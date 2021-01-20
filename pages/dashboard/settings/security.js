import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import useAuthRequired from "hooks/useAuthRequired";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changePassword, resetChangePasswordErrors } from "redux/actions/auth";
import { useDispatch } from "react-redux";
import Spinner from "components/ui/Spinner";
const security = () => {
  const [cantRender, authReducer] = useAuthRequired();
  const { user } = authReducer;
  const dispatch = useDispatch();
  const changePasswordForm = useFormik({
    initialValues: {
      password: "",
      new_password: "",
      repeat_password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Current password is required")
        .min(8, "Current password must have at least 8 characters"),
      new_password: Yup.string()
        .required("New password is required")
        .min(8, "New password must have at least 8 characters"),
      repeat_password: Yup.string()
        .required("New password confirmation is required")
        .min(8, "New password confirmation must have at least 8 characters")
        .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // console.log(valores);
      dispatch(changePassword(values));
      resetForm({});
    },
  });
  useEffect(() => {
    dispatch(resetChangePasswordErrors());
  }, [changePasswordForm.values.password]);
  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form onSubmit={changePasswordForm.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Change password
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Change your password.
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Current password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={changePasswordForm.handleChange}
                      onBlur={changePasswordForm.handleBlur}
                      value={changePasswordForm.values.password}
                    />
                    {changePasswordForm.touched.password &&
                    changePasswordForm.errors.password ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{changePasswordForm.errors.password}</p>
                      </div>
                    ) : null}

                    {authReducer.change_password_error &&
                      authReducer.change_password_error.data.non_field_errors &&
                      authReducer.change_password_error.data.non_field_errors.map(
                        (message, i) => (
                          <div
                            key={i}
                            className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                          >
                            <p className="font-bold">Error</p>
                            <p>{message}</p>
                          </div>
                        )
                      )}
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="new_password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New password
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      id="new_password"
                      autoComplete="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={changePasswordForm.handleChange}
                      onBlur={changePasswordForm.handleBlur}
                      value={changePasswordForm.values.new_password}
                    />
                    {changePasswordForm.touched.new_password &&
                    changePasswordForm.errors.new_password ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{changePasswordForm.errors.new_password}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="repeat_password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm new password
                    </label>
                    <input
                      type="password"
                      name="repeat_password"
                      id="repeat_password"
                      autoComplete="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={changePasswordForm.handleChange}
                      onBlur={changePasswordForm.handleBlur}
                      value={changePasswordForm.values.repeat_password}
                    />
                    {changePasswordForm.touched.repeat_password &&
                    changePasswordForm.errors.repeat_password ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{changePasswordForm.errors.repeat_password}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </>
  );
};

export default security;
