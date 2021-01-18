import React from "react";
import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmailAvailable, resetEmailAvailable } from "redux/actions/auth";
import { useRouter } from "next/router";
const EmailForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authReducer = useSelector((state) => state.authReducer);
  const { email_available, email_available_error } = authReducer;
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not valid")
        .required("Email can't be empty"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      console.log(values);
      if (email_available) {
        router.push("/register");
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="text-center">
          <h3
            className="text-2xl  leading-6 font-bold text-gray-900 "
            id="modal-headline"
          >
            Try platform for 14 days
          </h3>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Immediate access. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div>
          <div className="mt-1">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              {email_available_error &&
                email_available_error.data.non_field_errors.map(
                  (message, i) => (
                    <p
                      key={i}
                      className="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {message}
                    </p>
                  )
                )}
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={
                    (formik.touched.email && formik.errors.email) ||
                    email_available_error
                      ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                      : "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  }
                  placeholder="you@example.com"
                  aria-describedby="email-description"
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
              {!formik.errors.email && email_available ? (
                <p className="mt-2 text-sm text-green-600" id="email-error">
                  Email available
                </p>
              ) : null}
              {formik.touched.email && formik.errors.email ? (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
