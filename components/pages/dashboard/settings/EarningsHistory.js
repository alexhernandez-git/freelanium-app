import Spinner from "components/ui/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import Pagination from "components/ui/Pagination";
import { fetchEarningsPagination } from "redux/actions/earnings";
const EarningsHistory = () => {
  const dispatch = useDispatch();

  const earningsReducer = useSelector((state) => state.earningsReducer);
  const handleChangePage = (url) => {
    dispatch(fetchEarningsPagination(url));
  };
  const getEarningType = (earning) => {
    switch (earning.type) {
      case "OR":
        if (moment().isAfter(moment(earning.available_for_withdrawn_date))) {
          return "Order revenue";
        }
        const days_left = moment(earning.available_for_withdrawn_date).diff(
          moment(),
          "days"
        );
        const percentage = (100 - (100 * days_left) / 13).toFixed(0);

        return <div>Order revenue: Pending clearance {percentage}%</div>;
      case "WI":
        return "Withdrawn funds";
      case "RE":
        if (moment().isAfter(moment(earning.available_for_withdrawn_date))) {
          return "Refund funds";
        }
        const days_left_refund = moment(
          earning.available_for_withdrawn_date
        ).diff(moment(), "days");
        const percentage_refund = (100 - (100 * days_left_refund) / 13).toFixed(
          0
        );

        return <div>Refund funds: Pending clearance {percentage_refund}%</div>;
      case "SP":
        return "Credits spent";
    }
  };
  return (
    <section aria-labelledby="billing_history_heading">
      <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 sm:px-6">
          <h2
            id="billing_history_heading"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Earnings history
          </h2>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-t border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      {/* <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th> */}
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-full"
                      >
                        For
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {earningsReducer.earnings.results &&
                      earningsReducer.earnings.results.map((earning) => (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {moment(earning.created).format("DD-MM-YYYY")}
                          </td>
                          {/* <td className="max-w-sm px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                            {earning.lines.data[0].description}
                          </td> */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {getEarningType(earning)}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${
                              earning.type === "WI" || earning.type === "SP"
                                ? "text-red-500"
                                : "text-green-500"
                            } font-bold`}
                          >
                            {(earning.type === "WI" || earning.type === "SP") &&
                              "-"}
                            ${earning.amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {!earningsReducer.earnings.results &&
                  earningsReducer.is_loading && (
                    <div classNameName="flex justify-center py-3">
                      <Spinner />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {earningsReducer.earnings &&
        (earningsReducer.earnings.previous ||
          earningsReducer.earnings.next) && (
          <Pagination
            previous={earningsReducer.earnings.previous}
            next={earningsReducer.earnings.next}
            changePage={handleChangePage}
          />
        )}
    </section>
  );
};

export default EarningsHistory;
