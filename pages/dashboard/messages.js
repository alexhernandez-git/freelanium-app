import Chat from "components/pages/dashboard/messages/Chat";
import ChatroomCard from "components/pages/dashboard/messages/ChatroomCard";
import UserProfile from "components/pages/dashboard/messages/UserProfile";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Dashboard/Layout";
import { SecondaryButton } from "../../components/ui/Buttons";

export default function Home() {
  const [showProfile, setShowProfile] = useState(false);
  const handleClickProfile = () => {
    setShowProfile(true);
  };
  const handleCloseProfile = () => {
    setShowProfile(false);
  };
  const [showMessages, setShowMessages] = useState(true);
  const handleShowMessages = () => {
    setShowMessages(true);
  };
  const handleHideMessages = () => {
    setShowMessages(false);
  };

  const [cantRender, authReducer] = useAuthRequired();

  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout>
      <div style={{ height: "75vh" }} className="flex overflow-hidden bg-white">
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            {/* <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                aria-label="Breadcrumb"
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <svg
                    className="-ml-2 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Messages</span>
                </a>
              </nav>*/}

            {showProfile ? (
              <UserProfile handleCloseProfile={handleCloseProfile} />
            ) : (
              <Chat
                showMessages={showMessages}
                handleShowMessages={handleShowMessages}
                handleClickProfile={handleClickProfile}
              />
            )}
            {!showProfile && (
              <aside className="hidden lg:flex lg:flex-col flex-shrink-0 w-50 border-l border-gray-200">
                <div className="px-6 pt-6 pb-4">
                  <div class="flex-1 flex flex-col p-8">
                    <img
                      class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                      alt=""
                    />
                    <h3 class="mt-6 text-gray-900 text-sm font-medium text-center">
                      Cody Fisher
                    </h3>
                    <dl class="mt-1 flex-grow flex flex-col justify-between text-center">
                      <dt class="sr-only">Role</dt>
                      <dd class="mt-3">
                        <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                          Buyer
                        </span>
                      </dd>
                    </dl>
                    <SecondaryButton
                      className="justify-center mt-5"
                      onClick={handleClickProfile}
                    >
                      Show profile
                    </SecondaryButton>
                  </div>
                </div>
              </aside>
            )}
            <aside
              className={`${showMessages ? "w-full" : "w-0"}
                md:order-first md:flex md:flex-col flex-shrink-0 md:w-96 border-r border-gray-200`}
            >
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-medium text-gray-900">Messages</h2>
                {/* <p className="mt-1 text-sm text-gray-600">
                  Search directory of 3,018 employees
                </p> */}
              </div>

              <nav
                className="flex-1 min-h-0 relative overflow-y-auto"
                aria-label="Directory"
              >
                <ul
                  className="relative z-0 divide-y divide-gray-200"
                  onClick={handleHideMessages}
                >
                  <ChatroomCard />
                  <ChatroomCard />
                  <ChatroomCard />
                  <ChatroomCard />
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
