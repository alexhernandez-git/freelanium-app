import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrCreateChat } from "redux/actions/chats";

const OrderTabsRow = ({ order }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const getStatus = () => {
    switch (order.status) {
      case "AC":
        return "Accepted";
      case "DE":
        return "Deliveried";
      case "CA":
        return "Cancelled";
    }
  };
  const getStatusColor = () => {
    switch (order.status) {
      case "AC":
        return "text-green-800 bg-green-100";
      case "DE":
        return "text-blue-800 bg-blue-100";
      case "CA":
        return "text-red-800 bg-red-100";
    }
  };
  const getUser = () => {
    const user = authReducer.user;
    if (user?.seller_view) {
      return order?.buyer;
    } else {
      return order?.seller;
    }
  };

  const handleGetOrCreateChat = () => {
    dispatch(getOrCreateChat(getUser().id, router.push));
  };

  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            {getUser().picture ? (
              <img
                className="h-10 w-10 rounded-full"
                src={
                  new RegExp(process.env.HOST).test(getUser().picture)
                    ? getUser().picture
                    : process.env.HOST + getUser().picture
                }
                alt=""
              />
            ) : (
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              {getUser().first_name} {getUser().last_name}
            </div>
            <div class="text-sm text-gray-500">
              <div onClick={handleGetOrCreateChat} className="cursor-pointer">
                <a className="mt-2 flex items-center text-sm text-gray-500 cursor-pointer hover:underline">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="truncate">Send message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{order.title}</div>
        {/* <div class="text-sm text-gray-500">Optimization</div> */}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span
          class={
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
            getStatusColor()
          }
        >
          {getStatus()}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/dashboard/order/${order.id}/`}>
          <a class="text-indigo-600 hover:text-indigo-900">View</a>
        </Link>
      </td>
    </tr>
  );
};

export default OrderTabsRow;
