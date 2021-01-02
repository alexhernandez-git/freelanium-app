import React from "react";

const InviteContactForm = ({
  inviteContact,
  inviteContactRef,
  handleHideInviteContact,
}) => {
  return (
    <div
      className={`${
        !inviteContact && "hidden"
      } fixed inset-0 overflow-hidden z-50`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <section
          ref={inviteContactRef}
          className="absolute inset-y-0 pl-16 max-w-full right-0 flex"
          aria-labelledby="slide-over-heading"
        >
          <div className="w-screen max-w-md">
            <form className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div className="flex-1 h-0 overflow-y-auto">
                <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h2
                      id="slide-over-heading"
                      className="text-lg font-medium text-white"
                    >
                      Invite Contact
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={handleHideInviteContact}
                      >
                        <span className="sr-only">Close panel</span>
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* <div className="mt-1">
                      <p className="text-sm text-indigo-300">
                        Get started by filling in the information below to
                        create your new project.
                      </p>
                    </div> */}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-4 divide-y divide-gray-200 sm:px-6">
                    <div className="space-y-6 pt-6 pb-5">
                      <div>
                        <label
                          htmlFor="project_name"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Contact Email *
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="project_name"
                            id="project_name"
                            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Message
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          ></textarea>
                        </div>
                      </div>

                      <fieldset>
                        <legend className="text-sm font-medium text-gray-900">
                          Invite as
                        </legend>
                        <div className="mt-2 space-y-5">
                          <div className="relative flex items-start">
                            <div className="absolute flex items-center h-5">
                              <input
                                id="privacy_public"
                                name="role"
                                checked={true}
                                aria-describedby="privacy_public_description"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                              />
                            </div>
                            <div className="pl-7 text-sm">
                              <label
                                htmlFor="privacy_public"
                                className="font-medium text-gray-900"
                              >
                                Buyer
                              </label>
                              <p
                                id="privacy_public_description"
                                className="text-gray-500"
                              >
                                Your contact will register as buyer, with free
                                account forever
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="relative flex items-start">
                              <div className="absolute flex items-center h-5">
                                <input
                                  id="privacy_private-to-project"
                                  name="role"
                                  aria-describedby="privacy_private-to-project_description"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                              </div>
                              <div className="pl-7 text-sm">
                                <label
                                  htmlFor="privacy_private-to-project"
                                  className="font-medium text-gray-900"
                                >
                                  Seller
                                </label>
                                <p
                                  id="privacy_private-to-project_description"
                                  className="text-gray-500"
                                >
                                  Your contact will register as seller, with 14
                                  days free trial
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    {/* <div className="pt-4 pb-6">
                        <div className="flex text-sm">
                          <a
                            href="#"
                            className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                          >
                            <svg
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="ml-2">Copy link</span>
                          </a>
                        </div>
                        <div className="mt-4 flex text-sm">
                          <a
                            href="#"
                            className="group inline-flex items-center text-gray-500 hover:text-gray-900"
                          >
                            <svg
                              className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="ml-2">Learn more about sharing</span>
                          </a>
                        </div>
                      </div>*/}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                <button
                  onClick={handleHideInviteContact}
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InviteContactForm;
