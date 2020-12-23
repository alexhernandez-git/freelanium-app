import Link from "next/link";
import React from "react";

const Inbox = () => {
  return (
    <div className="p-2 rounded-md shadow-lg bg-white">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Job Postings
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0">
            <Link href="/messages">
              <a className="text-blue-600">View all</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <ul class="divide-y divide-gray-200 ">
          <li class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">Whitney Francis</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">Whitney Francis</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">Whitney Francis</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>
          <li class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">Whitney Francis</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
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
