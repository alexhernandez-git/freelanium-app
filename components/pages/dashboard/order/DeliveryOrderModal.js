import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "../../../Layout/Dashboard/Header/SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "hooks/useOutsideClick";
import { deliveryOrder } from "redux/actions/order";

const DeliveryOrderModal = ({
  deliveryOrderModalRef,
  openDeliveryOrderModal,
  handleCloseDeliveryOrderModal,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const FILE_SIZE = 1000000000;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
    "application/pdf",
  ];
  const formik = useFormik({
    initialValues: {
      response: "",
      source_file: null,
    },
    validationSchema: Yup.object({
      response: Yup.string().max(1000).required(),
      source_file: Yup.mixed().test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      ),
      // .test("fileFormat", "Unsupported Format", (value) => {
      //   console.log(value);
      //   return value && SUPPORTED_FORMATS.includes(value.type);
      // }),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const fd = new FormData();
      fd.append("response", values.response);
      if (values.source_file) {
        fd.append("source_file", values.source_file, values.source_file.name);
      }
      dispatch(deliveryOrder(fd, resetForm, handleCloseDeliveryOrderModal));
    },
  });
  console.log(formik.errors);
  const [srcFile, setSrcFile] = useState(null);

  const handleUploadFile = (e) => {
    e.preventDefault();

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();

    reader.onload = () => {
      setSrcFile(reader.result);
    };
    reader.readAsDataURL(files[0]);
    formik.setFieldValue("source_file", files[0]);
  };
  console.log(formik.values);
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
        <form id="send-offer-form" onSubmit={formik.handleSubmit}>
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
                      <div>
                        {formik.values.source_file ? (
                          <>
                            <span className="text-sm text-gray-400">
                              {formik.values.source_file?.name}
                            </span>
                            <div className="mt-1 relative rounded-md shadow-sm w-40">
                              <label
                                htmlFor="source_file"
                                className="cursor-pointer mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                              >
                                Change file
                              </label>
                              <input
                                type="file"
                                id="source_file"
                                className="hidden"
                                onChange={handleUploadFile}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mt-1 relative rounded-md shadow-sm w-40">
                              <label
                                htmlFor="source_file"
                                className="cursor-pointer w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
                              >
                                Upload Work
                              </label>
                              <input
                                type="file"
                                id="source_file"
                                className="hidden"
                                onChange={handleUploadFile}
                              />
                            </div>
                            {/* <p className="mt-2 text-sm text-gray-500">
                        Brief upload_work for your profile. URLs are
                        hyperlinked.
                      </p> */}
                          </>
                        )}
                        <span className="text-sm text-gray-400">
                          Max size 1GB
                        </span>
                        {formik.errors.source_file && (
                          <p
                            class="mt-2 text-sm text-red-600"
                            id="source_file-error"
                          >
                            {formik.errors.source_file}
                          </p>
                        )}
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
        </form>
      </div>
    </div>
  );
};

export default DeliveryOrderModal;
