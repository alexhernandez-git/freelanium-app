import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastMessage } from "utils/getMessages";
import { getOrCreateChat } from "redux/actions/chats";

import moment from "moment";
import { useRouter } from "next/router";
const Inbox = () => {
  const dispatch = useDispatch();
  const lastMessagesReducer = useSelector((state) => state.lastMessagesReducer);
  const authReducer = useSelector((state) => state.authReducer);
  const router = useRouter();
  const handleGetOrCreateChat = (user_id) => {
    dispatch(getOrCreateChat(user_id, router.push));
  };
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
            <Link href="/dashboard/messages">
              <a className="text-cyan-600">View all</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <ul className="divide-y divide-gray-200 ">
          {lastMessagesReducer?.chats?.map((chat) => (
            <li
              className="py-4 cursor-pointer"
              key={chat.id}
              onClick={handleGetOrCreateChat.bind(
                this,
                chat.last_message_sent_by
              )}
            >
              <div className="flex space-x-3">
                {chat.picture ? (
                  <img
                    className="h-6 w-6 rounded-full"
                    src={
                      new RegExp(process.env.HOST).test(chat.picture)
                        ? chat.picture
                        : process.env.HOST + chat.picture
                    }
                    alt=""
                  />
                ) : (
                  <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {chat.last_message_sent_by_username}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {moment(chat?.created).fromNow()}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {chat.last_message_sent_by_username}:{" "}
                    {getLastMessage(chat.last_message)}
                  </p>
                  {!chat.last_message_seen &&
                    chat.last_message_sent_by !== authReducer.user?.id && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New messages
                      </span>
                    )}
                </div>
              </div>
            </li>
          ))}

          {/* <!-- More items... --> */}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
