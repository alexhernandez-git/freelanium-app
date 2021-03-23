import React, { useEffect, useRef, useState } from "react";
import SearchBuyers from "../../../Layout/Dashboard/Header/SearchBuyers";
import { useFormik } from "formik";
import * as Yup from "yup";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PaymentMethodForm from "components/Forms/PaymentMethodForm";
import { acceptDelviery } from "redux/actions/order";
import Spinner from "components/ui/Spinner";
const AcceptTwoPaymentsOrderModal = ({
  acceptTwoPaymentsOrderRef,
  openAcceptTwoPaymentsOrder,
  handleCloseAcceptTwoPaymentsOrder,
  order,
  delivery_id,
}) => {
  const authReducer = useSelector((state) => state.authReducer);
  const orderReducer = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();

  const [stripeError, setStripeError] = useState(null);
  const [orderObject, setOrderObject] = useState(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      payment_method_id: authReducer.user?.default_payment_method,
      order_checkout: orderObject,
    },
    validationSchema: Yup.object({
      payment_method_id: Yup.string().required("Payment method is required"),
      order_checkout: Yup.object().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("order object ", formik.values);

      dispatch(
        acceptDelviery(
          order.id,
          delivery_id,
          {
            ...values,
            order_checkout: values.order_checkout,
          },
          handleCloseAcceptTwoPaymentsOrder,
          resetForm
        )
      );
    },
  });

  console.log(formik.values);
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
            (parseFloat(authReducer.user?.available_for_withdrawal) +
              parseFloat(authReducer.user?.pending_clearance)) *
            currencyRate;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  console.log(orderObject);
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
        <form id="accept-two-payments-order" onSubmit={handleSubmit}></form>
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
          {orderReducer.accepting_delivery && (
            <div className="absolute right-6">
              <Spinner />
            </div>
          )}
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
                    className="text-lg font-medium text-gray-600 mt-4"
                  >
                    Payment at delivery
                  </p>

                  <div className="flow-root">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-5 grid grid-cols-3 gap-4 pt-5">
                        <dt className="text-sm font-medium text-gray-500  col-span-2">
                          Subtotal
                        </dt>
                        <dd className="flex text-sm text-gray-500 mt-0">
                          <span className="flex-grow">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {formik.values.order_checkout?.subtotal}
                          </span>
                        </dd>

                        <dt className="text-sm font-medium text-gray-500   col-span-2">
                          Service fee
                        </dt>
                        <dd className="flex text-sm text-gray-500 mt-0">
                          <span className="flex-grow">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {formik.values.order_checkout?.service_fee}
                          </span>
                        </dd>
                        {orderObject?.used_credits > 0 && (
                          <>
                            <dt className="text-sm font-bold text-gray-900 col-span-2">
                              Used credits
                            </dt>
                            <dd className="flex text-sm text-gray-900 mt-0">
                              <span className="flex-grow font-bold">
                                -{getSymbolFromCurrency(authReducer.currency)}
                                {orderObject?.used_credits}
                              </span>
                            </dd>
                          </>
                        )}
                      </div>
                      <div className="py-5 grid grid-cols-3 gap-4 border-b border-gray-200">
                        <dt className="text-sm font-bold text-gray-900 col-span-2">
                          Total
                        </dt>
                        <dd className="flex text-sm text-gray-900 mt-0">
                          <span className="flex-grow font-bold">
                            {getSymbolFromCurrency(authReducer.currency)}
                            {(
                              formik.values.order_checkout?.unit_amount -
                              formik.values.order_checkout?.used_credits
                            ).toFixed(2)}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div>
                  {openAcceptTwoPaymentsOrder && (
                    <PaymentMethodForm
                      formikPaymentMethods={formik}
                      stripeError={stripeError}
                      setStripeError={setStripeError}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              onClick={handleSubmit}
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
