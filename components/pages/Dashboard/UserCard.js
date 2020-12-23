import React from "react";
import moment from "moment";
const UserCard = () => {
  return (
    <div className="p-4 rounded-md shadow-lg bg-white">
      <div className="flex border-b border-gray-200 pb-4 px-4 pt-2 rounded">
        <div className="mr-4 flex-shrink-0 self-center">
          <img
            className="inline-block h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex-shrink-0 self-center">
          <h4 className="text-lg font-bold text-gray-600">Alex Hernandez</h4>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <span className="text-xl text-gray-600 p-2">
          Earned on {moment().format("MMMM")}
        </span>
        <span className="text-2xl font-bold p-2 text-gray-600">$6</span>
      </div>
    </div>
  );
};

export default UserCard;
