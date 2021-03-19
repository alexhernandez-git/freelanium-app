import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "./SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDispatch, useSelector } from "react-redux";
import { createOffer, searchBuyers } from "redux/actions/offers";
import useOutsideClick from "hooks/useOutsideClick";

const SendOfferModal = ({
  sendOfferModalRef,
  openSendOfferModal,
  handleCloseSendOfferModal,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      send_offer_by_email: false,
      buyer: "",
      buyer_email: "",
      title: "",
      description: "",
      unit_amount: "",
      delivery_time: null,
      first_payment: null,
      type: "NO",
      interval_subscription: "MO",
    },
    validationSchema: Yup.object({
      send_offer_by_email: Yup.boolean(),
      buyer: Yup.string().when("send_offer_by_email", {
        is: false,
        then: Yup.string().required("Buyer payment is required"),
      }),
      buyer_email: Yup.string().when("send_offer_by_email", {
        is: true,
        then: Yup.string().required("Buyer email payment is required"),
      }),
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      unit_amount: Yup.number()
        .typeError("Total offer amount must be a number")
        .positive("Total offer amount must be greater than zero")
        .required("Total offer amount time is required"),
      delivery_time: Yup.number()
        .nullable()
        .when("type", {
          is: "NO",
          then: Yup.number()
            .typeError("Delivery time must be a number")
            .positive("Delivery time must be greater than zero")

            .required("Delivery time is required"),
        })
        .when("type", {
          is: "TP",
          then: Yup.number()

            .typeError("Delivery time must be a number")
            .positive("Delivery time must be greater than zero")

            .required("Delivery time is required"),
        }),
      first_payment: Yup.number()
        .nullable()
        .when("type", {
          is: "TP",
          then: Yup.number()
            .typeError("First payment must be a number")
            .positive("First payment must be greater than zero")
            .required("First payment is required"),
        })
        .lessThan(
          Yup.ref("unit_amount"),
          "First payment can not exceed total offer amount"
        ),
      interval_subscription: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      dispatch(
        createOffer(
          values,
          handleCloseSendOfferModal,
          resetForm,
          handleUnselectBuyer,
          handleUnsetBuyerEmail
        )
      );
    },
  });
  console.log(formik.errors);
  const handleSetBuyer = (buyer_id) => {
    formik.setFieldValue("send_offer_by_email", false);
    formik.setFieldValue("buyer", buyer_id);
  };
  const handleSetBuyerEmail = (buyer_email) => {
    formik.setFieldValue("send_offer_by_email", true);
    formik.setFieldValue("buyer_email", buyer_email);
  };
  // Search bar
  const [search, setSearch] = useState("");

  const [openBuyersList, setOpenBuyersList] = useState(false);
  const handleShowBuyersList = (e) => {
    e.preventDefault();
    setOpenBuyersList(true);
  };

  const openBuyersListRef = useRef();

  const handleCloseBuyersList = () => {
    if (openBuyersList) {
      setOpenBuyersList(false);
    }
  };

  useOutsideClick(openBuyersListRef, () => handleCloseBuyersList());

  const [openEmailInput, setOpenEmailInput] = useState(false);
  const handleShowEmailInput = () => {
    setOpenEmailInput(true);
  };
  const openEmailInputRef = useRef();

  const handleCloseEmailInput = () => {
    if (openEmailInput) {
      setOpenEmailInput(false);
    }
  };

  useOutsideClick(openEmailInputRef, () => handleCloseEmailInput());

  useEffect(() => {
    if (search != "") {
      const timeoutId = setTimeout(async () => {
        console.log("is searching");
        dispatch(searchBuyers(search));
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [search]);

  const [buyerSelected, setBuyerSelected] = useState(false);
  const handleSelectBuyer = (buyer) => {
    setBuyerSelected(buyer);
    setOpenBuyersList(false);
    handleSetBuyer(buyer.id);
  };
  const handleUnselectBuyer = () => {
    setBuyerSelected(false);
    handleSetBuyer("");
    setSearch("");
  };

  const [isEmailSetted, setIsEmailSetted] = useState(false);

  const searchFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email is not valid"),
    }),
    onSubmit: async (values) => {
      setOpenBuyersList(false);
      handleSetBuyerEmail(values.email);
      setIsEmailSetted(true);
    },
  });

  const handleUnsetBuyerEmail = () => {
    handleSetBuyerEmail("");
    searchFormik.setFieldValue("email", "");
    setIsEmailSetted(false);

    setSearch("");
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
        <form id="send-offer-form" onSubmit={formik.handleSubmit}></form>
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
                        errors={searchFormik.errors?.buyer}
                        touched={searchFormik.touched?.buyer}
                        searchFormik={searchFormik}
                        search={search}
                        setSearch={setSearch}
                        openBuyersListRef={openBuyersListRef}
                        buyerSelected={buyerSelected}
                        handleSelectBuyer={handleSelectBuyer}
                        handleUnselectBuyer={handleUnselectBuyer}
                        isEmailSetted={isEmailSetted}
                        handleUnsetBuyerEmail={handleUnsetBuyerEmail}
                        formik={searchFormik}
                        handleShowBuyersList={handleShowBuyersList}
                        openBuyersList={openBuyersList}
                        openEmailInput={openEmailInput}
                        openEmailInputRef={openEmailInputRef}
                        handleShowEmailInput={handleShowEmailInput}
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
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            form="send-offer-form"
                            name="title"
                            id="title"
                            className={
                              formik.touched.title && formik.errors.title
                                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            }
                            placeholder="Title"
                            aria-describedby="title-description"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.title && formik.errors.title && (
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
                        {formik.touched.title && formik.errors.title && (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="title-error"
                          >
                            {formik.errors.title}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <textarea
                          type="text"
                          name="description"
                          form="send-offer-form"
                          id="description"
                          className={
                            formik.touched.description &&
                            formik.errors.description
                              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                              : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          }
                          placeholder="Description"
                          aria-describedby="description-description"
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.description &&
                          formik.errors.description && (
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
                      {formik.touched.description && formik.errors.description && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="description-error"
                        >
                          {formik.errors.description}
                        </p>
                      )}
                      {/* <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p> */}
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
                    Order type
                  </label>

                  <div className="mt-1 relative  sm:mt-0 sm:col-span-2">
                    <select
                      id="type"
                      name="type"
                      autoComplete="type"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.type}
                    >
                      <option value="NO">Normal order</option>
                      <option value="TP">Two payments order</option>
                      <option value="RO">Recurrent subscription order</option>
                    </select>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                  <label
                    for="first_name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Total Offer Amount{" "}
                    <span className="font-normal text-xs">
                      ({authReducer.currency})
                    </span>
                  </label>

                  <div className="mt-1   sm:mt-0 sm:col-span-2">
                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          name="unit_amount"
                          id="unit_amount"
                          className={
                            formik.touched.unit_amount &&
                            formik.errors.unit_amount
                              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                              : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          }
                          placeholder={`300${getSymbolFromCurrency(
                            authReducer.currency
                          )}`}
                          form="send-offer-form"
                          aria-describedby="unit_amount"
                          value={formik.values.unit_amount}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.unit_amount &&
                          formik.errors.unit_amount && (
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
                    </div>

                    {formik.touched.unit_amount && formik.errors.unit_amount && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="unit_amount-error"
                      >
                        {formik.errors.unit_amount}
                      </p>
                    )}
                  </div>
                </div>
                {(formik.values.type === "NO" ||
                  formik.values.type === "TP") && (
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                    <label
                      for="last_name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Delivery time
                    </label>

                    <div className="mt-1  sm:mt-0 sm:col-span-2">
                      <div className="relative">
                        <input
                          type="text"
                          name="delivery_time"
                          id="delivery_time"
                          form="send-offer-form"
                          className={
                            formik.touched.delivery_time &&
                            formik.errors.delivery_time
                              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                              : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          }
                          placeholder="7 days"
                          aria-describedby="delivery_time-description"
                          value={formik.values.delivery_time}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.delivery_time &&
                          formik.errors.delivery_time && (
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
                      {formik.touched.delivery_time &&
                        formik.errors.delivery_time && (
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="delivery_time-error"
                          >
                            {formik.errors.delivery_time}
                          </p>
                        )}
                    </div>
                  </div>
                )}
              </div>
              {formik.values.type == "TP" && (
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
                        for="first_payment"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        First payment{" "}
                        <span className="font-normal text-xs">
                          ({authReducer.currency})
                        </span>
                      </label>

                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="relative">
                          <input
                            type="text"
                            name="first_payment"
                            id="first_payment"
                            className={
                              formik.touched.first_payment &&
                              formik.errors.first_payment
                                ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                                : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            }
                            placeholder={`100${getSymbolFromCurrency(
                              authReducer.currency
                            )}`}
                            aria-describedby="first_payment-description"
                            value={formik.values.first_payment}
                            onChange={formik.handleChange}
                            form="send-offer-form"
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.first_payment &&
                            formik.errors.first_payment && (
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
                        <p className="mt-2 text-sm text-gray-500">
                          This payment will be paid to you directly when the
                          buyer accepts the offer.
                        </p>
                        {formik.touched.first_payment &&
                          formik.errors.first_payment && (
                            <p
                              className="mt-2 text-sm text-red-600"
                              id="first_payment-error"
                            >
                              {formik.errors.first_payment}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {formik.values.type == "RO" && (
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
                        Recurrent subscription
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6 sm:space-y-5 border-none pb-4 pt-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200">
                      <label
                        for="first_payment"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Payment interval
                      </label>

                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="relative">
                          <select
                            id="interval_subscription"
                            name="interval_subscription"
                            autoComplete="interval_subscription"
                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.interval_subscription}
                          >
                            <option value="MO">Monthly</option>
                            <option value="AN">Annual</option>
                          </select>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          With recurrent subscription order you can recieve a
                          montly or annual recurrent payment.
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
              type="submit"
              form="send-offer-form"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
            >
              Send offer
            </button>
            <button
              type="button"
              onClick={handleCloseSendOfferModal}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
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
