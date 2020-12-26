import React from "react";

const Chat = ({ showMessages, handleShowMessages, handleClickProfile }) => {
  return (
    <>
      <div className={`${showMessages ? "hidden md:flex" : "flex"}`}>
        <div className="w-full flex flex-col justify-between">
          <div>
            <div className="border-b">
              <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 md:hidden"
                aria-label="Breadcrumb"
              >
                <a
                  onClick={handleShowMessages}
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900 cursor-pointer"
                >
                  <svg
                    className="-ml-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Messages</span>
                </a>
              </nav>
              <div className="p-2">
                <div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={handleClickProfile}
                  >
                    <img
                      className="h-16 w-16 rounded-full lg:hidden"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      Emilia Birch
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Duke street studio
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-end flex flex-col relative overflow-hidden"
            style={{ paddingBottom: "38px" }}
          >
            <div className="p-3 h-full overflow-y-auto">
              <ul>
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
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8 flex justify-end">
                    <div className="relative flex items-start space-x-3 lg:w-3/4">
                      <div className="min-w-0 flex-1">
                        <div className="text-right">
                          <div className="text-sm ">
                            <a href="#" className="font-medium text-gray-900">
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
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
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8 flex justify-end">
                    <div className="relative flex items-start space-x-3 lg:w-3/4">
                      <div className="min-w-0 flex-1">
                        <div className="text-right">
                          <div className="text-sm ">
                            <a href="#" className="font-medium text-gray-900">
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
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
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8 flex justify-end">
                    <div className="relative flex items-start space-x-3 lg:w-3/4">
                      <div className="min-w-0 flex-1">
                        <div className="text-right">
                          <div className="text-sm ">
                            <a href="#" className="font-medium text-gray-900">
                              Jason Meyers
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">2h ago</p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tincidunt nunc ipsum tempor purus vitae id.
                            Morbi in vestibulum nec varius. Et diam cursus quis
                            sed purus nam. Scelerisque amet elit non sit ut
                            tincidunt condimentum. Nisl ultrices eu venenatis
                            diam.
                          </p>
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
              </ul>
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className=" block w-full sm:text-sm border-gray-300 focus:ring-0"
                    placeholder="New Message"
                  />
                </div>
                <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span>Enviar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
