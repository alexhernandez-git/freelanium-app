import React from "react";

const Activity = () => {
  return (
    <>
      <div className="pb-3 border-b border-gray-200 mb-3">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Activity
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody>
                  {/* <!-- Odd row --> */}
                  <tr className="">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <svg
                        className="h-5 w-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New message from alex
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      faewopefopawifewaoifewafewafawefweafwaeef
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>

                  {/* <!-- Even row --> */}
                  <tr className="">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <svg
                        className="h-5 w-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New message from alex
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      faewopefopawifewaoifewafewafawefweafwaeef
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <svg
                        className="h-5 w-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New message from alex
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      faewopefopawifewaoifewafewafawefweafwaeef
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
