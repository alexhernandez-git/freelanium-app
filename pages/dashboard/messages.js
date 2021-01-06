import Chat from "components/pages/dashboard/messages/Chat";
import ChatroomCard from "components/pages/dashboard/messages/ChatroomCard";
import UserProfile from "components/pages/dashboard/messages/UserProfile";
import useAuthRequired from "hooks/useAuthRequired";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChat } from "redux/actions/chat";
import { fetchChats } from "redux/actions/chats";
import { fetchMessages } from "redux/actions/messages";
import Layout from "../../components/Layout/Dashboard/Layout";
import { SecondaryButton } from "../../components/ui/Buttons";

export default function Messages() {
  const dispatch = useDispatch();
  const chatsReducer = useSelector((state) => state.chatsReducer);
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

  useEffect(() => {
    if (!authReducer.is_loading && authReducer.is_authenticated) {
      const handleFetchChats = async () => {
        await dispatch(fetchChats());
      };
      handleFetchChats();
    }
  }, [authReducer.is_loading]);

  const chatReducer = useSelector((state) => state.chatReducer);
  const handleFetchChat = (id) => {
    dispatch(fetchChat(id, handleCloseProfile));
  };
  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout noPaddingY>
      <div style={{ height: "75vh" }} className="flex overflow-hidden bg-white">
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
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
                  <div class="flex-1 flex flex-col items-center w-40">
                    {chatReducer.chat?.to_user?.picture ? (
                      <img
                        class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                        src={
                          new RegExp(process.env.HOST).test(
                            chatReducer.chat.to_user?.picture
                          )
                            ? chatReducer.chat.to_user?.picture
                            : process.env.HOST +
                              chatReducer.chat.to_user?.picture
                        }
                        alt=""
                      />
                    ) : (
                      <span className="inline-block h-32 w-32 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    )}

                    <h3 class="mt-6 text-gray-900 text-sm font-medium text-center">
                      {chatReducer.chat?.to_user?.username}
                    </h3>
                    {chatReducer.chat?.to_user?.is_seller ? (
                      <dl class="mt-1 flex-grow flex flex-col justify-between text-center">
                        <dt class="sr-only">Role</dt>
                        <dd class="mt-3">
                          <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            Seller
                          </span>
                        </dd>
                      </dl>
                    ) : (
                      <dl class="mt-1 flex-grow flex flex-col justify-between text-center">
                        <dt class="sr-only">Role</dt>
                        <dd class="mt-3">
                          <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            Buyer
                          </span>
                        </dd>
                      </dl>
                    )}
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
                  {chatsReducer.chats.length > 0 &&
                    chatsReducer.chats.map((chat) => (
                      <ChatroomCard
                        key={chat.id}
                        chat={chat}
                        handleFetchChat={handleFetchChat}
                      />
                    ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
