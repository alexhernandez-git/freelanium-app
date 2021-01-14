import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
export const MyMessage = ({ message }) => {
  const authReducer = useSelector((state) => state.authReducer);
  const messagesReducer = useSelector((state) => state.messagesReducer);
  const messageIndex = messagesReducer.messages.results.indexOf(message);
  const previous_message = messagesReducer.messages.results[messageIndex - 1];
  let previous_message_mine = false;
  if (previous_message) {
    previous_message_mine = previous_message.sent_by.id === authReducer.user.id;
  }
  const next_message = messagesReducer.messages.results[messageIndex + 1];
  let next_message_mine = false;
  if (next_message) {
    next_message_mine = next_message.sent_by.id === authReducer.user.id;
  }

  return (
    <li>
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
              <div className="mt-2 text-sm text-gray-700 flex justify-end">
                <p className="break-all whitespace-pre-line">{message.text}</p>
              </div>
              <p className="mt-0.5 text-xs text-gray-400">
                {moment(message.created).format("dddd, MMM, YYYY HH:mm")}
              </p>
            </div>
          </div>
          {!previous_message_mine && (
            <div className="relative">
              {message.sent_by.picture ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={
                    new RegExp(process.env.HOST).test(message.sent_by.picture)
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
      previous_message.sent_by.id !== authReducer.user.id;
  }
  const next_message = messagesReducer.messages.results[messageIndex + 1];
  let next_message_mine = false;
  if (next_message) {
    next_message_mine = next_message.sent_by.id !== authReducer.user.id;
  }
  return (
    <li>
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
                    new RegExp(process.env.HOST).test(message.sent_by.picture)
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
            <div className="mt-2 text-sm text-gray-700">
              <p className="break-all whitespace-pre-line">{message.text}</p>
            </div>
            <p className="mt-0.5 text-xs text-gray-400">
              {moment(message.created).format("dddd, MMM, YYYY HH:mm")}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
