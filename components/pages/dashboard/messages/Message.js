import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import OfferActivity from "../order/Activity/OfferActivity";
import OrderDelivery from "../order/Activity/OrderDelivery";
import RequestCancelOrder from "../order/Activity/RequestCancelOrder";
import RequestRevision from "../order/Activity/RequestRevision";

const getActivityComponent = (message) => {
  if (message.activity) {
    const { type } = message.activity;
    console.log(type);

    switch (type) {
      case "OF":
        return <OfferActivity chat={true} ac={message.activity} />;
      case "DE":
        return <OrderDelivery chat={true} ac={message.activity} />;
      case "CA":
        return <RequestCancelOrder chat={true} ac={message.activity} />;
      case "RE":
        return <RequestRevision chat={true} ac={message.activity} />;
      default:
        return false;
    }
  }
};
export const MyMessage = ({ message }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const messagesReducer = useSelector((state) => state.messagesReducer);
  const messageIndex = messagesReducer.messages.results.indexOf(message);
  const previous_message = messagesReducer.messages.results[messageIndex - 1];
  let previous_message_mine = false;
  if (previous_message) {
    previous_message_mine =
      previous_message.sent_by.id === authReducer.user?.id;
  }
  const next_message = messagesReducer.messages.results[messageIndex + 1];
  let next_message_mine = false;
  if (next_message) {
    next_message_mine = next_message.sent_by.id === authReducer.user?.id;
  }
  let print_date = true;
  if (previous_message && previous_message.created) {
    print_date =
      moment(previous_message.created).format("dddd, MMM, YYYY HH:mm") !==
      moment(message.created).format("dddd, MMM, YYYY HH:mm");
  }

  return (
    <li>
      {print_date && (
        <div className="flex justify-center">
          <p className="mt-0.5 text-xs text-gray-400">
            {moment(message.created).format("dddd, MMM, YYYY HH:mm")}
          </p>
        </div>
      )}
      <div
        className={`relative ${
          next_message_mine ? "pb-2" : "pb-8"
        } flex justify-end`}
      >
        <div
          className={` ${
            previous_message_mine && "mr-12"
          } relative flex items-start space-x-3 lg:w-3/4`}
        >
          <div className="min-w-0 flex-1">
            <div className="text-right">
              {!previous_message_mine && (
                <div className="text-sm ">
                  <span className="font-medium text-gray-900">
                    {message.sent_by.username}
                  </span>
                </div>
              )}
              <div className="flex justify-end flex-wrap">
                {message?.files &&
                  message.files?.length > 0 &&
                  message.files.map((file) => (
                    <a
                      download={file?.name}
                      href={
                        new RegExp(
                          `${process.env.HOST}|https://freelanium.s3.amazonaws.com|data`
                        ).test(file?.file)
                          ? file?.file
                          : process.env.HOST + file?.file
                      }
                      target="_blank"
                    >
                      <div className="mt-2 ml-2 text-sm text-gray-700 flex justify-end">
                        <div className="flex flex-col items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            className="h-16 w-16 text-gray-500"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-500">{file?.name}</span>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
              <div className="mt-2 text-sm text-gray-700 flex justify-end">
                <p className="break-all whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          </div>
          {!previous_message_mine && (
            <div className="relative">
              {message.sent_by.picture ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={
                    new RegExp(
                      `${process.env.HOST}|https://freelanium.s3.amazonaws.com`
                    ).test(message.sent_by.picture)
                      ? message.sent_by.picture
                      : process.env.HOST + message.sent_by.picture
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
          )}
        </div>
      </div>
      {getActivityComponent(message)}
    </li>
  );
};

export const NotMyMessage = ({ message }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const messagesReducer = useSelector((state) => state.messagesReducer);
  const messageIndex = messagesReducer.messages.results.indexOf(message);
  const previous_message = messagesReducer.messages.results[messageIndex - 1];
  let previous_message_not_mine = false;
  if (previous_message) {
    previous_message_not_mine =
      previous_message.sent_by.id !== authReducer.user?.id;
  }
  const next_message = messagesReducer.messages.results[messageIndex + 1];
  let next_message_mine = false;
  if (next_message) {
    next_message_mine = next_message.sent_by.id !== authReducer.user?.id;
  }
  let print_date = true;
  if (previous_message && previous_message.created) {
    print_date =
      moment(previous_message.created).format("dddd, MMM, YYYY HH:mm") !==
      moment(message.created).format("dddd, MMM, YYYY HH:mm");
  }
  return (
    <li>
      {print_date && (
        <div className="flex justify-center">
          <p className="mt-0.5 text-xs text-gray-400">
            {moment(message.created).format("dddd, MMM, YYYY HH:mm")}
          </p>
        </div>
      )}
      <div className={`relative ${next_message_mine ? "pb-2" : "pb-8"}`}>
        <div
          className={`${
            previous_message_not_mine && "ml-12"
          } relative flex items-start space-x-3 lg:w-3/4`}
        >
          {!previous_message_not_mine && (
            <div className="relative">
              {message.sent_by.picture ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={
                    new RegExp(
                      `${process.env.HOST}|https://freelanium.s3.amazonaws.com`
                    ).test(message.sent_by.picture)
                      ? message.sent_by.picture
                      : process.env.HOST + message.sent_by.picture
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
          )}
          <div className="min-w-0 flex-1">
            {!previous_message_not_mine && (
              <div>
                <div className="text-sm">
                  <span className="font-medium text-gray-900">
                    {message.sent_by.username}
                  </span>
                </div>
              </div>
            )}
            <div className="flex justify-start flex-wrap">
              {message?.files &&
                message.files?.length > 0 &&
                message.files.map((file) => (
                  <a
                    download={file?.name}
                    href={
                      new RegExp(
                        `${process.env.HOST}|https://freelanium.s3.amazonaws.com|data`
                      ).test(file?.file)
                        ? file?.file
                        : process.env.HOST + file?.file
                    }
                    target="_blank"
                  >
                    <div className="mt-2 mr-2 text-sm text-gray-700 flex justify-start">
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="h-16 w-16 text-gray-500"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-500">{file?.name}</span>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p className="break-all whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        </div>
      </div>
      {getActivityComponent(message)}
    </li>
  );
};
