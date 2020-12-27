import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
const UserCard = () => {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <div className="p-4  rounded-lg shadow bg-white mb-4">
      <div
        className={`flex ${
          authReducer.user && authReducer.user.seller_view
            ? "border-b pb-4 pt-2"
            : "py-2"
        } border-gray-200   rounded`}
      >
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
      {authReducer.user && authReducer.user.seller_view && (
        <div className="flex justify-between mt-3">
          <span className="text-xl text-gray-600 ">
            Earned on {moment().format("MMMM")}
          </span>
          <span className="text-2xl font-bold text-gray-600">$600</span>
        </div>
      )}
    </div>
  );
};

export default UserCard;
