import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChat } from "redux/actions/chat";
import chatReducer from "redux/reducers/chatReducer";
import { getLastMessage } from "utils/getMessages";

const ChatroomCard = ({ chat, handleFetchChat }) => {
  const chatReducer = useSelector((state) => state.chatReducer);
  return (
    <li onClick={() => handleFetchChat(chat.id)}>
      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
        <div className="flex-shrink-0">
          {chat.picture ? (
            <img
              className="h-10 w-10 rounded-full"
              src={
                new RegExp(process.env.HOST).test(chat.picture)
                  ? chat.picture
                  : process.env.HOST + chat.picture
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
        <div className="flex-1 min-w-0">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-sm font-medium text-gray-900 truncate">
              {chat.room_name}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {getLastMessage(chat.last_message)}
            </p>
          </a>
        </div>
        {!chat.last_message_seen && !chatReducer.chat?.id == chat.id && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            New messages
          </span>
        )}
      </div>
    </li>
  );
};

export default ChatroomCard;
