import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import moment from "moment";

const OrdersCard = ({ order }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const router = useRouter();

  const goToMessages = (e) => {
    e.preventDefault();
    router.push("/dashboard/messages");
  };
  console.log(order);
  let user =
    order?.seller?.id === authReducer.user?.id ? order?.buyer : order?.seller;

  const getStatusJSX = () => {
    switch (order.status) {
      case "AC":
        return (
          <p className="mt-2 flex items-center text-sm text-gray-500">
            {/* <!-- Heroicon name: check-circle --> */}
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Active
          </p>
        );
      case "CA":
        return (
          <p className="mt-2 flex items-center text-sm text-gray-500">
            {/* <!-- Heroicon name: check-circle --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
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
            Cancelled
          </p>
        );
      case "DE":
        return (
          <p className="mt-2 flex items-center text-sm text-gray-500">
            {/* <!-- Heroicon name: check-circle --> */}
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Completed
          </p>
        );
      default:
        break;
    }
  };
  return (
    <Link href={"/dashboard/order/" + order?.id}>
      <a className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              {user?.picture ? (
                <img
                  className="h-12 w-12 rounded-full"
                  src={
                    new RegExp(
                      process.env.HOST | "https://freelanium.s3.amazonaws.com"
                    ).test(user?.picture)
                      ? user?.picture
                      : process.env.HOST + user?.picture
                  }
                  alt=""
                />
              ) : (
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
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
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
              <div>
                <p className="text-sm font-medium text-cyan-500 truncate">
                  {user?.first_name} {user?.last_name}
                </p>
                <p className="mt-2 flex  items-center text-sm text-gray-500">
                  {/* <!-- Heroicon name: mail --> */}
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    onClick={goToMessages}
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="truncate" onClick={goToMessages}>
                    Send message
                  </span>
                </p>
              </div>
              <div className="">
                <p className="text-sm font-bold flex items-center text-gray-700">
                  Order name
                </p>
                <p className="mt-2 flex truncate items-center text-sm text-gray-500">
                  {order?.title}
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    {order?.type == "RO" ? (
                      "Recurrent Order"
                    ) : (
                      <>
                        Delivery on{" "}
                        <time dateTime="2020-01-07">
                          {moment(order?.delivery_date).format("MMMM D, YYYY")}
                        </time>
                      </>
                    )}
                  </p>
                  {getStatusJSX()}
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <!-- Heroicon name: chevron-right --> */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OrdersCard;
