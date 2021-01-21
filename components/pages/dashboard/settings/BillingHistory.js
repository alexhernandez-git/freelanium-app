import Spinner from "components/ui/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerInvoces } from "redux/actions/sellerInvoices";
import moment from "moment";
const BillingHistory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellerInvoces());
  }, []);
  const sellerInvoicesReducer = useSelector(
    (state) => state.sellerInvoicesReducer
  );
  return (
    <section aria-labelledby="billing_history_heading">
      <div class="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 sm:px-6">
          <h2
            id="billing_history_heading"
            class="text-lg leading-6 font-medium text-gray-900"
          >
            Billing history
          </h2>
        </div>

        <div class="mt-6 flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden border-t border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Currency
                      </th>

                      <th
                        scope="col"
                        class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <span class="sr-only">View receipt</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="bg-white divide-y divide-gray-200">
                    {sellerInvoicesReducer.invoices &&
                      sellerInvoicesReducer.invoices.map((invoice) => (
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {moment(new Date(invoice.created * 1000)).format(
                              "DD-MM-YYYY"
                            )}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {invoice.lines.data[0].description}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {invoice.amount_paid}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {invoice.currency}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href={invoice.invoice_pdf}
                              target="_blank"
                              class="text-orange-600 hover:text-orange-900"
                            >
                              Invoice PDF
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                {sellerInvoicesReducer.is_loading && (
                  <div className="flex justify-center py-3">
                    <Spinner />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingHistory;
