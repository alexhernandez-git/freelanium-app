import React, { useState } from "react";
import SearchBuyers from "./SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";

const SendOfferModal = ({ sendOfferModalRef, openSendOfferModal }) => {
  const formik = useFormik({
    initialValues: {
      buyer: "",
      title: "",
      description: "",
      total_offer_amount: 0,
      delivery_time: 0,
      two_payments_order: false,
      first_payment: 0,
      days_for_delivery: 0,
      send_offer_by_email: false,
      buyer_email: "",
    },
    //   validationSchema: Yup.object({

    // }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const handleSetBuyer = (buyer_id) => {
    formik.setFieldValue("send_offer_by_email", false);
    formik.setFieldValue("buyer", buyer_id);
  };
  const handleSetBuyerEmail = (buyer_email) => {
    formik.setFieldValue("send_offer_by_email", true);
    formik.setFieldValue("buyer_email", buyer_email);
  };

  return (
    <div
      className={`${
        !openSendOfferModal && "hidden"
      } fixed z-10 inset-0 overflow-y-auto `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={sendOfferModalRef}
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div className="sm:pb-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Send offer
                  </h3>
                </div>
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <span className="pr-2 bg-white text-sm text-gray-500">
                      Buyer
                    </span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-gray-200">
                    <label
                      for="username"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      User
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <SearchBuyers
                        handleSetBuyer={handleSetBuyer}
                        handleSetBuyerEmail={handleSetBuyerEmail}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <span className="pr-2 bg-white text-sm text-gray-500">
                        Offer info
                      </span>
                    </div>
                  </div>
                  <div className="bg-white space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3">
                        <label
                          for="company_website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="Title"
                            autocomplete="given-name"
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows="3"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-5 border-none pb-4 pt-4">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                  <label
                    for="first_name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Total Offer Amount
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      placeholder="$10000 max"
                      className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
                  <label
                    for="last_name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Delivery time
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="7 days"
                      autocomplete="family-name"
                      className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-gray-200 sm:pt-5">
                  <div className="mt-1 sm:mt-0 sm:col-span-2 sm:col-start-2">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="two_payments_order"
                          name="two_payments_order"
                          type="checkbox"
                          onChange={formik.handleChange}
                          handleBlur={formik.handleBlur}
                          value={formik.values.two_payments_order}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="two_payments_order"
                          className="font-medium text-gray-700"
                        >
                          Two payments order
                        </label>
                        <p className="text-gray-500">
                          Offers the possibility of making a payment now and
                          another on delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {formik.values.two_payments_order && (
                <>
                  <div className="relative border-none">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-start">
                      <span className="pr-2 bg-white text-sm text-gray-500">
                        Two payments order
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6 sm:space-y-5 border-none pb-4 pt-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                      <label
                        for="first_name"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        First payment
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div>
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autocomplete="given-name"
                            placeholder="$10000 max"
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          This payment will be paid to you directly when the
                          buyer accepts the offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
            >
              Send offer
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOfferModal;
