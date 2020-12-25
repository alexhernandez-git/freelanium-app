import Link from "next/link";
import React from "react";

const Inbox = () => {
  return (
    <div className="p-2  rounded-lg shadow bg-white">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Last messages
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link href="/messages">
              <a className="text-blue-600">View all</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <ul className="divide-y divide-gray-200 ">
          <li className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Whitney Francis</h3>
                  <p className="text-sm text-gray-500">1h</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Whitney Francis</h3>
                  <p className="text-sm text-gray-500">1h</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Whitney Francis</h3>
                  <p className="text-sm text-gray-500">1h</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Whitney Francis</h3>
                  <p className="text-sm text-gray-500">1h</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          {/* <!-- More items... --> */}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
