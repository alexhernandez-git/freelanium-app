import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "../../../Layout/Dashboard/Header/SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PaymentMethodForm from "components/Forms/PaymentMethodForm";
const AcceptTwoPaymentsOrderModal = ({
  acceptTwoPaymentsOrderRef,
  openAcceptTwoPaymentsOrder,
  handleCloseAcceptTwoPaymentsOrder,
  order,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [stripeError, setStripeError] = useState(null);
  const formik = useFormik({
    initialValues: {
      payment_method_id: authReducer.user?.default_payment_method,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      payment_method_id: Yup.string().required("Payment method is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  const [orderObject, setOrderObject] = useState(null);
  useEffect(() => {
    if (openAcceptTwoPaymentsOrder && order) {
      axios
        .get(
          `https://api.exchangeratesapi.io/${
            order?.rate_date ? order?.rate_date : "latest"
          }?base=USD`
        )
        .then((res) => {
          const currencyRate = res.data.rates[authReducer.currency];

          const subtotal = order?.payment_at_delivery * currencyRate;
          const fixed_fee = 0.3 * currencyRate;
          const service_fee = (subtotal * 5) / 100 + fixed_fee;

          console.log("subtotal", subtotal, service_fee);

          const unit_amount = subtotal + service_fee;
          const available_for_withdawal =
            authReducer.user?.available_for_withdawal * currencyRate;
          let used_credits = 0;
          if (available_for_withdawal > 0) {
            if (available_for_withdawal > subtotal) {
              used_credits = subtotal;
            } else {
              const diff = available_for_withdawal - subtotal;
              used_credits = subtotal + diff;
            }
          }
          setOrderObject({
            ...order,
            subtotal: subtotal.toFixed(2),
            service_fee: service_fee.toFixed(2),
            unit_amount: unit_amount.toFixed(2),
            used_credits: used_credits.toFixed(2),
          });
        })
        .catch((err) => console.log("entra"));
    }
  }, [openAcceptTwoPaymentsOrder]);

  return (
    <div
      className={`${
        !openAcceptTwoPaymentsOrder && "hidden"
      } fixed z-10 inset-0 overflow-y-auto `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <form
          id="accept-two-payments-order"
          onSubmit={formik.handleSubmit}
        ></form>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={acceptTwoPaymentsOrderRef}
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
                    Accept Order{" "}
                  </h3>
                </div>
                <div>
                  <p
                    id="timeline-title"
                    class="text-lg font-medium text-gray-600 mt-4"
                  >
                    Payment at delivery
                  </p>

                  <div class="flow-root">
                    <dl class="divide-y divide-gray-200">
                      <div class="py-5 grid grid-cols-3 gap-4 pt-5">
                        <dt class="text-sm font-medium text-gray-500  col-span-2">
                          Subtotal
                        </dt>
                        <dd class="flex text-sm text-gray-500 mt-0">
                          <span class="flex-grow">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {orderObject?.subtotal}
                          </span>
                        </dd>

                        <dt class="text-sm font-medium text-gray-500   col-span-2">
                          Service fee
                        </dt>
                        <dd class="flex text-sm text-gray-500 mt-0">
                          <span class="flex-grow">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {orderObject?.service_fee}
                          </span>
                        </dd>
                        {orderObject?.used_credits > 0 && (
                          <>
                            <dt class="text-sm font-bold text-gray-900 col-span-2">
                              Used credits
                            </dt>
                            <dd class="flex text-sm text-gray-900 mt-0">
                              <span class="flex-grow font-bold">
                                -{getSymbolFromCurrency(authReducer.currency)}
                                {orderObject?.used_credits}
                              </span>
                            </dd>
                          </>
                        )}
                      </div>
                      <div class="py-5 grid grid-cols-3 gap-4 border-b border-gray-200">
                        <dt class="text-sm font-bold text-gray-900 col-span-2">
                          Total
                        </dt>
                        <dd class="flex text-sm text-gray-900 mt-0">
                          <span class="flex-grow font-bold">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {(
                              orderObject?.unit_amount -
                              orderObject?.used_credits
                            ).toFixed(2)}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div>
                  <PaymentMethodForm
                    formikPaymentMethods={formik}
                    stripeError={stripeError}
                    setStripeError={setStripeError}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="submit"
              form="accept-two-payments-order"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-base font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
            >
              Accept Order
            </button>
            <button
              type="button"
              onClick={handleCloseAcceptTwoPaymentsOrder}
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

export default AcceptTwoPaymentsOrderModal;
