import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
const UserCard = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { user } = authReducer;
  return (
    <div className="p-4  rounded-lg shadow bg-white mb-4">
      <div
        className={`flex truncate ${
          user && user.seller_view ? "border-b pb-4 pt-2" : "py-2"
        } border-gray-200   rounded`}
      >
        <div className="mr-4 flex-shrink-0 self-center">
          {user && (
            <>
              {user.picture ? (
                <img
                  className="inline-block h-20 w-20 rounded-full"
                  src={
                    new RegExp(
                      process.env.HOST | "https://freelanium.s3.amazonaws.com"
                    ).test(user.picture)
                      ? user.picture
                      : process.env.HOST + user.picture
                  }
                  alt=""
                />
              ) : (
                <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </>
          )}
        </div>
        <div className="flex-shrink-0 self-center">
          <h4 className="text-lg font-bold text-gray-600">
            {user?.first_name} {user?.last_name}
          </h4>
        </div>
      </div>
      {user && user.seller_view && (
        <div className="flex justify-between mt-3">
          <span className="text-xl text-gray-600 ">
            Earned on {moment().format("MMMM")}
          </span>
          <span className="text-2xl font-medium text-green-500">
            ${user?.earned_this_month ? user?.earned_this_month : 0}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserCard;
