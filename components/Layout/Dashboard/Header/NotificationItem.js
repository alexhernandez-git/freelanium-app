import React from "react";
import moment from "moment";

const NotificationItem = ({ notification }) => {
  let event_message = "";
  let message = "";
  let many_messages = false;
  if (notification.type === "ME" && notification.messages.length > 1) {
    many_messages = true;
  }
  switch (notification.type) {
    case "ME":
      if (notification.actor) {
        event_message = `${
          many_messages
            ? notification.messages.length + " messages"
            : "New message"
        } from ${notification.actor.username}`;
      } else {
        event_message = `${
          many_messages
            ? notification.messages.length + " messages"
            : "New message"
        }`;
      }
      if (!many_messages) {
        message = notification.messages[0].text;
      }
      break;
    default:
      event_message = "New notification";
      break;
  }
  return (
    <li className="py-4 hover:opacity-70 cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {notification.actor && notification.actor.picture ? (
            <img
              className="h-8 w-8 rounded-full"
              src={
                new RegExp(process.env.HOST).test(notification.actor.picture)
                  ? notification.actor.picture
                  : process.env.HOST + notification.actor.picture
              }
              alt=""
            />
          ) : (
            <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
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
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-900 truncate">
            {event_message}
          </p>

          <p className="text-xs text-gray-500 truncate">{message}</p>
          <p className="float-right text-xs text-gray-400 truncate">
            {moment(notification.modified).subtract(1, "seconds").fromNow()}
          </p>
        </div>
      </div>
    </li>
  );
};

export default NotificationItem;
