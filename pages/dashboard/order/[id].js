import Layout from "components/Layout/Dashboard/Layout";
import OrderLayout from "components/pages/dashboard/order/OrderLayout";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import {
  Offer,
  OfferAccepted,
  OfferCancelled,
  RequestChangeDateDelivery,
  RequestChangeDateDeliveryAccepted,
} from "components/pages/dashboard/order/Activity/ActivityElements";
import { SecondaryButton } from "components/ui/Buttons";
import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import useAuthRequired from "hooks/useAuthRequired";
const BoardDnDNoSSR = dynamic(
  () => import("components/pages/dashboard/order/Board/BoardDnD"),
  {
    ssr: false,
  }
);

const OrderBoard = () => {
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
  const [cantRender, authReducer] = useAuthRequired();
  return !cantRender ? (
    "Loading..."
  ) : (
    <Layout noPadding>
      {authReducer.user && authReducer.user.seller_view ? (
        <OrderLayout title={"Board"} noPadding>
          <div
            className="mt-5 overflow-x-auto"
            style={{ height: "calc(100vh - 168.6px)" }}
          >
            <BoardDnDNoSSR />
          </div>
        </OrderLayout>
      ) : (
        <>
          <div class="min-h-screen bg-gray-100">
            <main class="py-10">
              <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                <div class="flex items-center space-x-5">
                  <div class="flex-shrink-0">
                    <div class="relative">
                      <img
                        class="h-16 w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                      <span
                        class="absolute inset-0 shadow-inner rounded-full"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>
                  <div>
                    <h1 class="text-2xl font-bold text-gray-900">
                      Ricardo Cooper
                    </h1>
                    <p class="text-sm font-medium text-gray-500">
                      Job started on{" "}
                      <time datetime="2020-08-25">August 25, 2020</time>
                    </p>
                  </div>
                </div>
                <div class="mt-6 flex flex-col-reverse justify-stretch items-center space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                  <Link href="/dashboard/messages">
                    <SecondaryButton>Message</SecondaryButton>
                  </Link>
                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        onClick={handleToggleOptions}
                        class="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <span class="sr-only">Open options</span>
                        <svg
                          class="h-5 w-5"
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
                      } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
                      ref={optionsRef}
                    >
                      <div
                        class="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                <section
                  aria-labelledby="timeline-title"
                  class="lg:col-start-3 lg:col-span-1"
                >
                  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                    <div class="px-4 py-5 sm:px-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Order Information
                      </h3>
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Details about the job.
                      </p>
                    </div>
                    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-2">
                          <dt class="text-sm font-medium text-gray-500">
                            Job title
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            Add stripe functionallity to website
                          </dd>
                        </div>
                        <div class="sm:col-span-2">
                          <dt class="text-sm font-medium text-gray-500">
                            Seller name
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            Margot Foster
                          </dd>
                        </div>

                        <div class="sm:col-span-1">
                          <dt class="text-sm font-medium text-gray-500">
                            Cost
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">$120,000</dd>
                        </div>
                        <div class="sm:col-span-1">
                          <dt class="text-sm font-medium text-gray-500">
                            Delivery date
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            28th December 2021
                          </dd>
                        </div>
                        <div class="sm:col-span-2">
                          <dt class="text-sm font-medium text-gray-500">
                            Status
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              ACTIVE
                            </span>
                          </dd>
                        </div>
                        <div class="sm:col-span-2">
                          <dt class="text-sm font-medium text-gray-500">
                            Description
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>

                <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                  <ul class="-mb-8">
                    <Offer />
                    <OfferAccepted />
                    <OfferCancelled />
                    <RequestChangeDateDelivery />
                    <RequestChangeDateDeliveryAccepted />
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </Layout>
  );
};

export default OrderBoard;
