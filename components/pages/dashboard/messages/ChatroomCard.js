import React from "react";

const ChatroomCard = () => {
  return (
    <li>
      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-sm font-medium text-gray-900">Lawrence Brooks</p>
            <p className="text-sm text-gray-500 truncate">Content Specialist</p>
          </a>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          2 new messages
        </span>
      </div>
    </li>
  );
};

export default ChatroomCard;
