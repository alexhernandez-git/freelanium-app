import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { getActivityMessage } from "utils/getMessages";

const InfoIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-500 "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const CancelIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-red-500 "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const SuccessIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-green-500 "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const Activity = () => {
  const activitiesReducer = useSelector((state) => state.activitiesReducer);
  const getActivityIcon = (status) => {
    switch (status) {
      case "PE":
        return InfoIcon();
      case "AC":
        return SuccessIcon();
      case "CA":
        return CancelIcon();
      default:
        return InfoIcon();
    }
  };
  return (
    <>
      <div className="pb-3 border-b border-gray-200 mb-3">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Activity
        </h3>
      </div>
      <div className="flex flex-col justify-center">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody>
                  {/* <!-- Odd row --> */}
                  {activitiesReducer.activities.results?.length == 0 && (
                    <div className="py-2">
                      <span className="text-gray-500">
                        You don't have activity
                      </span>
                    </div>
                  )}
                  <div className="flow-root p-4">
                    <ul className="-mb-8">
                      {activitiesReducer.activities.results?.map((activity) => (
                        <li>
                          <div className="relative pb-8">
                            <span
                              className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            ></span>
                            <div className="relative flex items-start space-x-3">
                              <div>
                                <div className="relative px-1">
                                  <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                    {getActivityIcon(activity.activity.status)}
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1 py-1.5">
                                <div className="text-sm text-gray-500">
                                  {/* <a href="#" className="font-medium text-gray-900">
                                    Hilary Mahy
                                  </a> */}
                                  <span className="font-medium text-gray-900">
                                    {getActivityMessage(
                                      activity.type + activity.activity.status
                                    )}
                                  </span>{" "}
                                </div>
                                <span className="text-sm text-gray-500 whitespace-nowrap">
                                  {moment(activity?.created).fromNow()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
