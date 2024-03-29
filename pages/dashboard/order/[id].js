import Layout from "components/Layout/Dashboard/Layout";
import OrderLayout from "components/pages/dashboard/order/OrderLayout";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

import { SecondaryButton } from "components/ui/Buttons";
import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import useAuthRequired from "hooks/useAuthRequired";
import Spinner from "components/ui/Spinner";
import { fetchOrder, fetchOrderActivities } from "redux/actions/order";
import { useRouter } from "next/router";
import moment from "moment";
import DeliveryOrderModal from "components/pages/dashboard/order/DeliveryOrderModal";
import RequestCancelationModal from "components/pages/dashboard/order/RequestCancelationModal";
import { getOrCreateChat } from "redux/actions/chats";
import OfferActivity from "components/pages/dashboard/order/Activity/OfferActivity";
import OrderDelivery from "components/pages/dashboard/order/Activity/OrderDelivery";
import RequestCancelOrder from "components/pages/dashboard/order/Activity/RequestCancelOrder";
import RequestRevision from "components/pages/dashboard/order/Activity/RequestRevision";
import UnsubscribeOrderModal from "components/pages/dashboard/order/UnsubscribeOrderModal";
import Head from "next/head";
// const BoardDnDNoSSR = dynamic(
//   () => import("components/pages/dashboard/order/Board/BoardDnD"),
//   {
//     ssr: false,
//   }
// );

const OrderBoard = () => {
  const dispatch = useDispatch();
  const optionsRef = useRef();
  const [optionsOpen, setDropdownMenuOpen] = useState(false);
  const handleToggleOptions = () => {
    setDropdownMenuOpen(!optionsOpen);
  };
  const handleCloseOptions = () => {
    if (optionsOpen) {
      setDropdownMenuOpen(false);
    }
  };
  useOutsideClick(optionsRef, () => handleCloseOptions());
  const [canRender, authReducer, initialDataFetched] = useAuthRequired();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const handleFetchOrder = async () => {
      if (initialDataFetched && id) {
        await dispatch(fetchOrder(id));
        await dispatch(fetchOrderActivities(id));
      }
    };
    handleFetchOrder();
  }, [initialDataFetched]);

  const orderReducer = useSelector((state) => state.orderReducer);

  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const getActivityComponent = (activity) => {
    if (activity) {
      const { type } = activity;
      switch (type) {
        case "OF":
          return <OfferActivity ac={activity} key={activity.id} />;
        case "DE":
          return <OrderDelivery ac={activity} key={activity.id} />;
        case "CA":
          return <RequestCancelOrder ac={activity} key={activity.id} />;
        case "RE":
          return <RequestRevision ac={activity} key={activity.id} />;
        default:
          return false;
      }
    }
  };
  const getUser = () => {
    if (authReducer.user?.id == orderReducer.order?.buyer?.id) {
      setUser(orderReducer.order.seller);
    } else {
      setUser(orderReducer.order.buyer);
    }
  };
  const getStatus = () => {
    switch (orderReducer.order?.status) {
      case "AC":
        setStatus(
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ACTIVE
          </span>
        );
        break;
      case "DE":
        setStatus(
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            DELIVERED
          </span>
        );
        break;
      case "CA":
        setStatus(
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            CANCELLED
          </span>
        );
        break;
    }
  };

  useEffect(() => {
    if (!orderReducer.is_lodaing && orderReducer.order) {
      getStatus();
      getUser();
    }
  }, [orderReducer.is_loading]);
  const [intervalSubscription, setIntervalSubscription] = useState("");
  useEffect(() => {
    if (orderReducer.order?.interval_subscription) {
      switch (orderReducer.order?.interval_subscription) {
        case "MO":
          setIntervalSubscription("Month");
          break;
        case "AN":
          setIntervalSubscription("Anual");
          break;
      }
    }
  }, [orderReducer.order?.interval_subscription]);

  const deliveryOrderModalRef = useRef();
  const [openDeliveryOrderModal, setOpenDeliveryOrderModal] = useState(false);
  const handleToggleDeliveryOrderModal = () => {
    setOpenDeliveryOrderModal(!openDeliveryOrderModal);
  };
  const handleCloseDeliveryOrderModal = () => {
    if (openDeliveryOrderModal) {
      setOpenDeliveryOrderModal(false);
    }
  };
  useOutsideClick(deliveryOrderModalRef, () => handleCloseDeliveryOrderModal());

  const requestCancelationModalRef = useRef();
  const [
    openRequestCancelationModal,
    setOpenRequestCancelationModal,
  ] = useState(false);
  const handleToggleRequestCancelationModal = () => {
    setOpenRequestCancelationModal(!openRequestCancelationModal);
  };
  const handleCloseRequestCancelationModal = () => {
    if (openRequestCancelationModal) {
      setOpenRequestCancelationModal(false);
    }
  };
  useOutsideClick(requestCancelationModalRef, () =>
    handleCloseRequestCancelationModal()
  );

  const unsubscribeOrderModalRef = useRef();
  const [openUnsubscribeOrderModal, setUnsubscribeOrderModal] = useState(false);
  const handleToggleUnsubscribeOrderModal = () => {
    setUnsubscribeOrderModal(!openUnsubscribeOrderModal);
  };
  const handleCloseUnsubscribeOrderModal = () => {
    if (openUnsubscribeOrderModal) {
      setUnsubscribeOrderModal(false);
    }
  };
  useOutsideClick(unsubscribeOrderModalRef, () =>
    handleCloseUnsubscribeOrderModal()
  );

  const handleGoToChat = () => {
    if (orderReducer.order?.buyer.id == authReducer.user?.id) {
      dispatch(getOrCreateChat(orderReducer.order?.seller.id, router.push));
    } else {
      dispatch(getOrCreateChat(orderReducer.order?.buyer.id, router.push));
    }
  };
  return (
    <>
      <Head>
        <title>{orderReducer.order?.title}</title>
      </Head>
      {!canRender ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <Layout noPadding>
          <>
            <div className="min-h-screen bg-gray-100">
              <main className="py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                  <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {user?.picture ? (
                          <img
                            className="h-16 w-16 rounded-full"
                            src={
                              new RegExp(
                                process.env.HOST |
                                  "https://freelanium.s3.amazonaws.com"
                              ).test(user.picture)
                                ? user.picture
                                : process.env.HOST + user.picture
                            }
                            alt=""
                          />
                        ) : (
                          <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                        )}
                        <span
                          className="absolute inset-0 shadow-inner rounded-full"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        {user?.first_name} {user?.last_name}
                      </h1>
                      <p className="text-sm font-medium text-gray-500">
                        Job started on{" "}
                        <time datetime={orderReducer.order?.created}>
                          {moment(orderReducer.order?.created).format(
                            "MMMM DD, YYYY"
                          )}
                        </time>
                        {/* <time datetime="2020-08-25">August 25, 2020</time> */}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col-reverse justify-stretch items-center space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                    {orderReducer.order?.seller?.id === authReducer.user?.id &&
                      orderReducer.order?.status === "AC" &&
                      orderReducer.order?.type !== "RO" && (
                        <button
                          type="button"
                          onClick={handleToggleDeliveryOrderModal}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                          Delivery order
                        </button>
                      )}
                    <button
                      onClick={handleGoToChat}
                      type="button"
                      className={`inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none `}
                    >
                      Message
                    </button>
                    {orderReducer.order?.status === "AC" &&
                      orderReducer.order?.type !== "OP" && (
                        <>
                          <div className="relative inline-block text-left">
                            <div>
                              <button
                                onMouseDown={handleToggleOptions}
                                className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-cyan-500"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <span className="sr-only">Open options</span>
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                              </button>
                            </div>

                            <div
                              class={`${
                                optionsOpen ? "block" : "hidden"
                              } origin-top-right absolute -right-24 sm:left-0 md:left-auto  md:right-0 mt-2 w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
                              ref={optionsRef}
                            >
                              <div
                                className="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                              >
                                {/* {orderReducer.order?.type !== "RO" && (
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Change delivery date
                        </a>
                      )}
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Increase order amount
                      </a> */}

                                {orderReducer.order?.type === "RO" ? (
                                  orderReducer.order?.buyer?.id ===
                                  authReducer.user?.id ? (
                                    <span
                                      onMouseDown={
                                        handleToggleUnsubscribeOrderModal
                                      }
                                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                      role="menuitem"
                                    >
                                      Unsuscribe
                                    </span>
                                  ) : (
                                    <span
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      role="menuitem"
                                    >
                                      No options
                                    </span>
                                  )
                                ) : (
                                  orderReducer.order?.type !== "OP" && (
                                    <span
                                      onMouseDown={
                                        handleToggleRequestCancelationModal
                                      }
                                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                      role="menuitem"
                                    >
                                      Request a cancelation
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                  </div>
                </div>

                <div className="sticky mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                  <section
                    aria-labelledby="timeline-title"
                    className="lg:col-start-3 lg:col-span-1 relative"
                  >
                    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 sticky top-5">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Order Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Details about the job.
                        </p>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Job title
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 truncate">
                              {orderReducer.order?.title}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              {authReducer.user?.id ==
                              orderReducer.order?.buyer?.id
                                ? "Buyer"
                                : "Seller"}{" "}
                              name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {user?.first_name} {user?.last_name}
                            </dd>
                          </div>

                          {/* <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Cost{" "}
                          <span className="text-xs font-normal text-gray-400">
                            (with fees)
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          ${orderReducer.order?.unit_amount}
                        </dd>
                      </div> */}
                          {orderReducer.order?.type == "RO" ? (
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">
                                Interval subscription
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {/* 28th December 2021 */}
                                {intervalSubscription}
                              </dd>
                            </div>
                          ) : (
                            <div className="sm:col-span-1">
                              <dt className="text-sm font-medium text-gray-500">
                                Delivery date
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {/* 28th December 2021 */}
                                {orderReducer.order?.delivery_date &&
                                  moment(
                                    orderReducer.order?.delivery_date
                                  ).format("DD/MM/YYYY")}
                              </dd>
                            </div>
                          )}
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Status
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {status}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {orderReducer.order?.description}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>

                  <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                    {orderReducer.is_loading_activities ? (
                      <div className="flex justify-center">
                        <Spinner />
                      </div>
                    ) : orderReducer.activities.length == 0 ? (
                      <span className="text-gray-500">
                        No activity in this order
                      </span>
                    ) : (
                      <ul className="-mb-8">
                        {orderReducer.activities.map((activity) =>
                          getActivityComponent(activity)
                        )}
                      </ul>
                    )}
                  </div>
                </div>
              </main>
            </div>
          </>
          <DeliveryOrderModal
            openDeliveryOrderModal={openDeliveryOrderModal}
            deliveryOrderModalRef={deliveryOrderModalRef}
            handleCloseDeliveryOrderModal={handleCloseDeliveryOrderModal}
          />
          <RequestCancelationModal
            openRequestCancelationModal={openRequestCancelationModal}
            requestCancelationModalRef={requestCancelationModalRef}
            handleCloseRequestCancelationModal={
              handleCloseRequestCancelationModal
            }
          />
          <UnsubscribeOrderModal
            unsubscribeOrderModalRef={unsubscribeOrderModalRef}
            openUnsubscribeOrderModal={openUnsubscribeOrderModal}
            handleCloseUnsubscribeOrderModal={handleCloseUnsubscribeOrderModal}
          />
        </Layout>
      )}
    </>
  );
};

export default OrderBoard;
