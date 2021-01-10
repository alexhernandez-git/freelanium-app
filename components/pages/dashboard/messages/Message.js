import React from "react";

export const MyMessage = ({ message }) => {
  return (
    <li>
      <div className="relative pb-8 flex justify-end">
        <div className="relative flex items-start space-x-3 lg:w-3/4">
          <div className="min-w-0 flex-1">
            <div className="text-right">
              <div className="text-sm ">
                <span className="font-medium text-gray-900">
                  {message.sent_by.username}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700 flex justify-end">
              <p className="break-all whitespace-pre-line">{message.text}</p>
            </div>
          </div>
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
        </div>
      </div>
    </li>
  );
};

export const NotMyMessage = ({ message }) => {
  return (
    <li>
      <div className="relative pb-8">
        <div className="relative flex items-start space-x-3 lg:w-3/4">
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
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <span className="font-medium text-gray-900">
                  {message.sent_by.username}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p className="break-all whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
