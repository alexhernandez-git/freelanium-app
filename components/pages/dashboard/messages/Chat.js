import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLastMessage } from "redux/actions/chats";
import { addMessage, fetchMoreMessages } from "redux/actions/messages";
import { MyMessage, NotMyMessage } from "./Message";

const Chat = ({ showMessages, handleShowMessages, handleClickProfile }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const chatReducer = useSelector((state) => state.chatReducer);
  const chatsReducer = useSelector((state) => state.chatsReducer);
  const messagesReducer = useSelector((state) => state.messagesReducer);

  const messagesEndRef = useRef(null);
  const chatRef = useRef();
  const handleScrollToBottom = () => {
    if (chatRef.current) {
      messagesEndRef.current?.scrollIntoView();
    }
  };

  const handleScroll = () => {
    if (chatRef.current.scrollTop == 0 && !messagesReducer.is_loading) {
      dispatch(fetchMoreMessages(chatRef, chatRef.current.scrollHeight));
    }
  };

  useEffect(() => {
    if (messagesReducer.first_loading) {
      setTimeout(() => {
        handleScrollToBottom();
      }, 1);
      if (chatRef.current) {
        chatRef.current.addEventListener("scroll", handleScroll);
        return () =>
          chatRef.current &&
          chatRef.current.removeEventListener("scroll", handleScroll);
      }
    }
  }, [messagesReducer.first_loading]);
  const ws = useRef(null);

  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      ws.current.send(
        JSON.stringify({
          text: message,
          sent_by: authReducer.user,
        })
      );
      setMessage("");
    }
  };
  useEffect(() => {
    if (!chatReducer.is_loading && chatReducer.chat) {
      ws.current = new WebSocket(
        process.env.WS + "/ws/chat/" + chatReducer.chat.id + "/"
      );
      console.log(process.env.WS + "/ws/chat/" + chatReducer.chat.id + "/");
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");
      ws.current.onmessage = async (e) => {
        const data = JSON.parse(e.data);
        await dispatch(addMessage(data));
        if (authReducer.user.id === data.sent_by.id) {
          await dispatch(changeLastMessage(data.chat__id, data.text));
        }
        handleScrollToBottom();
      };
      return () => {
        ws.current.close();
      };
    }
  }, [chatReducer.chat]);

  return (
    <>
      <div
        className={`${
          showMessages
            ? "hidden md:flex flex-1 truncate"
            : "flex flex-1 truncate"
        }`}
      >
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
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Messages</span>
                </a>
              </nav>
              {chatReducer.chat && (
                <div className="p-2">
                  <div>
                    <div
                      className="flex items-center cursor-pointer truncate"
                      onClick={handleClickProfile}
                    >
                      {chatReducer.chat?.to_user?.picture ? (
                        <img
                          className="w-16 h-16 flex-shrink-0 mx-auto bg-black rounded-full sm:hidden"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                      ) : (
                        <span className="h-16 w-16 rounded-full overflow-hidden bg-gray-100 sm:hidden">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}
                      <div>
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                          {chatReducer.chat?.to_user?.username}
                        </h1>
                      </div>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      {chatReducer.chat?.to_user?.is_verified ? (
                        <>
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
                                clipRule="evenodd"
                              />
                            </svg>
                            Verified account
                          </dd>
                        </>
                      ) : (
                        <>
                          <dt className="sr-only">Account status</dt>
                          <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            Not verified account
                          </dd>
                        </>
                      )}
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!chatReducer.chat && chatsReducer.chats.length == 0 && (
            <div className="hidden justify-start sm:flex flex-col relative overflow-hidden w-full h-full p-10">
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">No chats available</p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <Link href="/dashboard/contacts">
                        <a className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                          Contacts <span aria-hidden="true">&rarr;</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="self-end flex flex-col relative overflow-hidden w-full"
            style={{ paddingBottom: "56px" }}
          >
            <div className="p-3 h-full overflow-y-auto" ref={chatRef}>
              <ul>
                {messagesReducer.messages.results.length > 0 &&
                  messagesReducer.messages.next && (
                    <li className="text-center mb-10">
                      <span
                        className="text-gray-500 text-sm cursor-pointer underline"
                        onClick={handleScroll}
                      >
                        Load more messages
                      </span>
                    </li>
                  )}
                {messagesReducer.messages.results.length > 0 &&
                  messagesReducer.messages.results.map((message) =>
                    message?.sent_by.id == authReducer.user?.id ? (
                      <MyMessage key={message.id} message={message} />
                    ) : (
                      <NotMyMessage key={message.id} message={message} />
                    )
                  )}
                <div ref={messagesEndRef} />
              </ul>
            </div>
            {chatReducer.chat && (
              <div className="absolute bottom-0 w-full">
                <form onSubmit={handleSubmit}>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow">
                      <textarea
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full sm:text-sm border-gray-200 ring-0 focus:outline-none focus:shadow-none resize-none border-b-0 border-l-0 border-r-0 focus:border-gray-200 focus:ring-cyan-500"
                        placeholder="Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-200  text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none border-r-0 border-b-0">
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
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
