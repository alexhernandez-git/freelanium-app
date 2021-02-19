import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "../../../Layout/Dashboard/Header/SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDispatch, useSelector } from "react-redux";
import { createOffer, searchBuyers } from "redux/actions/offers";
import useOutsideClick from "hooks/useOutsideClick";

const DeliveryOrderModal = ({
  deliveryOrderModalRef,
  openDeliveryOrderModal,
  handleCloseDeliveryOrderModal,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      send_offer_by_email: false,
      buyer: "",
      buyer_email: "",
      title: "",
      response: "",
      unit_amount: "",
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
      response: Yup.string().required("Response is required"),
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
          handleCloseDeliveryOrderModal,
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
        !openDeliveryOrderModal && "hidden"
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
          ref={deliveryOrderModalRef}
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
                    Deliver completed work
                  </h3>
                </div>

                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div className="bg-white space-y-6">
                    {" "}
                    <div>
                      <div className="mt-1 relative rounded-md shadow-sm w-40">
                        <button
                          type="submit"
                          form="send-offer-form"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
                        >
                          Upload Work
                        </button>
                      </div>
                      <span className="text-sm text-gray-400">
                        Max size 1GB
                      </span>
                      {formik.touched.upload_work && formik.errors.upload_work && (
                        <p
                          class="mt-2 text-sm text-red-600"
                          id="upload_work-error"
                        >
                          {formik.errors.upload_work}
                        </p>
                      )}
                      {/* <p className="mt-2 text-sm text-gray-500">
                        Brief upload_work for your profile. URLs are
                        hyperlinked.
                      </p> */}
                    </div>
                    <div>
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Response
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <textarea
                          type="text"
                          name="response"
                          form="send-offer-form"
                          id="response"
                          className={
                            formik.touched.response && formik.errors.response
                              ? "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                              : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          }
                          placeholder="Describe your delivery on detail."
                          aria-describedby="response-response"
                          value={formik.values.response}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.response && formik.errors.response && (
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
                      {formik.touched.response && formik.errors.response && (
                        <p
                          class="mt-2 text-sm text-red-600"
                          id="response-error"
                        >
                          {formik.errors.response}
                        </p>
                      )}
                      {/* <p className="mt-2 text-sm text-gray-500">
                        Brief response for your profile. URLs are
                        hyperlinked.
                      </p> */}
                    </div>
                    {/* <div>
                      <label
                        for="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Add portfolio sample
                        <span class="cursor-pointer ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Add Image/ideo
                        </span>
                      </label>
                      <div className="mt-1 relative">
                        <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 relative">
                          <svg
                            class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 200 200"
                            aria-hidden="true"
                          >
                            <path
                              vector-effect="non-scaling-stroke"
                              stroke-width="1"
                              d="M0 0l200 200M0 200L200 0"
                            />
                          </svg>
                        </div>
                        {formik.touched.response && formik.errors.response && (
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
                      {formik.touched.response && formik.errors.response && (
                        <p
                          class="mt-2 text-sm text-red-600"
                          id="response-error"
                        >
                          {formik.errors.response}
                        </p>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="submit"
              form="send-offer-form"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
            >
              Deliver Work
            </button>
            <button
              type="button"
              onClick={handleCloseDeliveryOrderModal}
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

export default DeliveryOrderModal;
