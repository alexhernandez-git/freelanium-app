import React from "react";

export const MyMessage = ({ message }) => {
  return (
    <li>
      <div className="relative pb-8 flex justify-end">
        <div className="relative flex items-start space-x-3 lg:w-3/4">
          <div className="min-w-0 flex-1">
            <div className="text-right">
              <div className="text-sm ">
                <a href="#" className="font-medium text-gray-900">
                  {message.sent_by.username}
                </a>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700 flex justify-end">
              <p className="break-all">{message.text}</p>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full bg-gray-400 hidden  lg:flex items-center justify-center ring-8 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
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
            <img
              className="h-10 w-10 rounded-full bg-gray-400 hidden lg:flex items-center justify-center ring-8 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-900">
                  {message.sent_by.username}
                </a>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p className="break-all">{message.text}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
