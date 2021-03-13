import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { InfoIcon, SuccessIcon, CancelIcon } from "./ActivityIcons";

const RequestRevision = ({ ac, chat = false }) => {
  const { activity, type } = ac;
  console.log("activity: ", activity);
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <li>
      <div className="relative pb-8">
        {!chat && (
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        )}
        <div className="relative flex items-start space-x-3">
          {!chat && (
            <div>
              <div className="relative px-1">
                <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                  {InfoIcon()}
                </div>
              </div>
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                {chat ? (
                  <div className="sm:flex items-center">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          {InfoIcon()}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:ml-2">
                      <span href="#" className="font-medium text-gray-900">
                        Delivery revision
                      </span>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {activity?.revision?.order?.buyer?.username} requested a
                        delivery revision.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <span href="#" className="font-medium text-gray-900">
                      Delivery revision
                    </span>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {activity?.revision?.order?.buyer?.username} requested a
                      delivery revision.
                    </p>
                  </>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {moment(ac?.created).fromNow()}
              </p>
            </div>
            <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {activity?.revision?.order?.buyer?.username} requested a
                  delivery revision
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                      Delivery revision message
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {activity?.revision?.reason}
                    </dd>
                  </div>

                  {/* <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <span className="mr-3 text-gray-500">
                        Request revision
                      </span>
                      <PrimaryButton>Accept</PrimaryButton>
                    </dd>
                  </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RequestRevision;
