import React, { useEffect, useRef, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoreNotifications,
  fetchNotifications,
} from "redux/actions/notifications";
import NotificationItem from "./NotificationItem";
const NotificationsDropdown = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const notificationsReducer = useSelector(
    (state) => state.notificationsReducer
  );
  const dispatch = useDispatch();

  const [pendingNotifications, setPendingNotifications] = useState(false);
  useEffect(() => {
    if (authReducer.is_authenticated && authReducer.user) {
      setPendingNotifications(authReducer.user.pending_notifications);
    }
  }, [authReducer.is_loading, authReducer?.user?.pending_notifications]);

  const notificationsRef = useRef();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const handleToggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };
  const handleCloseNotifications = () => {
    console.log("entra en notifications");
    if (notificationsOpen) {
      setNotificationsOpen(false);
    }
  };
  useOutsideClick(notificationsRef, () => handleCloseNotifications());
  useEffect(() => {
    if (authReducer.is_authenticated && notificationsOpen) {
      dispatch(fetchNotifications());
    }
  }, [notificationsOpen]);

  const notificationsListRef = useRef();
  const handleScroll = () => {
    if (notificationsListRef.current) {
      if (
        notificationsListRef.current.scrollHeight -
          notificationsListRef.current.scrollTop ===
          notificationsListRef.current.clientHeight &&
        !notificationsReducer.is_loading
      ) {
        dispatch(fetchMoreNotifications());
      }
    }
  };
  useEffect(() => {
    if (!notificationsReducer.is_loading) {
      if (notificationsListRef.current) {
        notificationsListRef.current.addEventListener("scroll", handleScroll);
        return () =>
          notificationsListRef.current &&
          notificationsListRef.current.removeEventListener(
            "scroll",
            handleScroll
          );
      }
    }
  }, [notificationsReducer.is_loading]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onMouseDown={handleToggleNotifications}
          className={`bg-white p-1 rounded-full ${
            pendingNotifications
              ? "text-indigo-600 hover:text-indigo-700"
              : "text-gray-400 hover:text-gray-500"
          }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span className="sr-only">View notifications</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>

      <div
        ref={notificationsRef}
        className={`
                    ${
                      notificationsOpen ? "block" : "hidden"
                    }  origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40`}
      >
        <div className="bg-white px-4 py-3 border-b border-gray-200 ">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Notifications
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="flow-root px-4 max-h-72 overflow-auto"
            ref={notificationsListRef}
          >
            <ul className="divide-y divide-gray-200">
              {notificationsReducer.notifications.results.map(
                (notification) => (
                  <NotificationItem
                    notification={notification.notification}
                    key={notification.id}
                  />
                )
              )}
            </ul>
          </div>
          <div className="p-4">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Mark all as read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
