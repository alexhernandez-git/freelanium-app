import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  isEmailAvailable,
  isUsernameAvailable,
  register_buyer,
  resetEmailAvailable,
  resetUsernameAvailable,
} from "redux/actions/auth";
import RegisterForm from "components/Forms/RegisterForm";
const RegisterLayout = ({ isSeller, token }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const authReducer = useSelector((state) => state.authReducer);
  const { is_authenticated } = authReducer;

  useEffect(() => {
    if (is_authenticated) {
      router.push("/dashboard");
    }
  }, [is_authenticated]);

  return (
    <main className="bg-gray-800 flex items-center my-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                {isSeller ? (
                  <>
                    <span className="">Ecosystem to charge</span>{" "}
                    <span className="text-cyan-400 ">your customers</span>
                  </>
                ) : (
                  <>
                    <span className="">Have more control in</span>{" "}
                    <span className="text-cyan-400 ">your projects</span>
                  </>
                )}
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {!isSeller &&
                  `With our order tracking system the seller will not get the money
                until he has delivered a good job, so if it is not as you
                expect, you can agree to a refund`}
              </p>
              {isSeller ? (
                <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">
                  Get your 14 days free trial
                </p>
              ) : (
                <>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-normal sm:mt-10">
                    <span className="font-bold">5%</span> transaction costs
                  </p>
                  <p className="mt-2 text-sm text-white uppercase tracking-wide font-normal">
                    and absolutely{" "}
                    <span className="font-bold">free dashboard</span> to manage
                    your orders
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                <div className="">
                  <RegisterForm isSeller={isSeller} token={token} />
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

export default RegisterLayout;
