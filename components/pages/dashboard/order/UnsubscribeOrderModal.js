import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "../../../Layout/Dashboard/Header/SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDispatch, useSelector } from "react-redux";
import { createOffer, searchBuyers } from "redux/actions/offers";
import useOutsideClick from "hooks/useOutsideClick";
import { requestCancelation, unsubscribeOrder } from "redux/actions/order";
import Spinner from "components/ui/Spinner";

const UnsubscribeOrderModal = ({
  unsubscribeOrderModalRef,
  openUnsubscribeOrderModal,
  handleCloseUnsubscribeOrderModal,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const orderReducer = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      reason: "",
    },
    validationSchema: Yup.object({
      reason: Yup.string().max(1000).required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch(
        unsubscribeOrder(values, resetForm, handleCloseUnsubscribeOrderModal)
      );
    },
  });

  return (
    <div
      className={`${
        !openUnsubscribeOrderModal && "hidden"
      } fixed z-10 inset-0 overflow-y-auto `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <form id="send-offer-form" onSubmit={formik.handleSubmit}>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            ref={unsubscribeOrderModalRef}
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {orderReducer.unsubscribing_order && (
              <div className="absolute right-6">
                <Spinner />
              </div>
            )}
            <div>
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div className="sm:pb-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Unsubscribe Order{" "}
                    </h3>
                  </div>

                  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div className="bg-white space-y-6">
                      <div>
                        <label
                          for="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Reason
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <textarea
                            type="text"
                            name="reason"
                            form="send-offer-form"
                            id="reason"
                            className={
                              formik.touched.reason && formik.errors.reason
                                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            }
                            placeholder="Reasons"
                            aria-describedby="reason-reason"
                            value={formik.values.reason}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.reason && formik.errors.reason && (
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
                        {formik.touched.reason && formik.errors.reason && (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="reason-error"
                          >
                            {formik.errors.reason}
                          </p>
                        )}
                        {/* <p className="mt-2 text-sm text-gray-500">
                        Brief reason for your profile. URLs are
                        hyperlinked.
                      </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
              >
                Unsubscribe from Order
              </button>
              <button
                type="button"
                onClick={handleCloseUnsubscribeOrderModal}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UnsubscribeOrderModal;
