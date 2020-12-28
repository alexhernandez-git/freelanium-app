import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register_buyer } from "redux/actions/auth";
const BuyerRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);
  const { isAuthenticated } = authReducer;

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Email is not valid")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
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
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <main className="bg-gray-800 flex items-center my-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="">Have more control in</span>{" "}
                <span className="text-indigo-400 ">your projects</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                With our order tracking system the seller will not get the money
                until he has delivered a good job, and if it is not as you
                expect, you can agree to a refund
              </p>
              <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                And it is absolutely free
              </p>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                <div className="">
                  {authReducer.error &&
                    authReducer.error.data.username &&
                    authReducer.error.data.username.map((message, i) => (
                      <div
                        key={i}
                        className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                      >
                        <p className="font-bold">Username</p>
                        <p>{message}</p>
                      </div>
                    ))}
                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                      <h3 className="text-center text-2xl font-extrabold text-gray-700">
                        Get access to your own{" "}
                        <span className="block text-indigo-400">
                          buyer dashboard
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
                      <label
                        htmlFor="password_confirmation"
                        className="sr-only"
                      >
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
                </div>
              </div>
              <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                  By signing up, you agree to our{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Terms
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Data Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Cookies Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyerRegister;
