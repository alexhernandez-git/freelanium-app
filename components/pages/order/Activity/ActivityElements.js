import { PrimaryButton } from "components/ui/Buttons";
import React from "react";

// Alert icon

//   <svg
//     className="h-5 w-5 text-gray-500"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>;

const InfoIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const CancelIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const SuccessIcon = () => {
  return (
    <svg
      className="h-5 w-5 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const Offer = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Offer
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you an offer.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-2xl font-medium text-gray-900">
                      Añadir funcionalidad de stripe a tu web
                    </h3>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl">$300</span>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Margot Foster
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end">
                        <PrimaryButton>Continue</PrimaryButton>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const OfferAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Offer Accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Maria has accepted the offer.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700 opacity-75">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-2xl font-medium text-gray-900">
                      Añadir funcionalidad de stripe a tu web
                    </h3>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl">$300</span>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Margot Foster
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end">
                        <PrimaryButton disabled>Accepted</PrimaryButton>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const OfferCancelled = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Offer Cancelled
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Maria has accepted the offer.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div className="mt-2 text-sm text-gray-700 opacity-75">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="flex justify-between">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-2xl font-medium text-gray-900">
                      Añadir funcionalidad de stripe a tu web
                    </h3>
                  </div>
                  <div className="px-4 py-5 sm:px-6">
                    <span className="text-3xl">$300</span>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Margot Foster
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500"></dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end">
                        <span className="mr-3 text-gray-500">Cancelled</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestChangeDateDelivery = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request change the delivery date
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to change the delivery date.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a extend delivery date on{" "}
                  <span className="font-bold">25th December 2021</span>
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancel</span>
                  <PrimaryButton>Accept</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestChangeDateDeliveryAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Change the delivery date accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to change the delivery date.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a extend delivery date on{" "}
                  <span className="font-bold">25th December 2021</span>
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestChangeDateDeliveryCancelled = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Change the delivery date cancelled
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to change the delivery date.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a extend delivery date on{" "}
                  <span className="font-bold">25th December 2021</span>
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancelled</span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestCancelOrder = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request cancel order
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to cancel the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a order cancelation
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancel</span>
                  <PrimaryButton>Accept</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestCancelOrderAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Cancel order accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to cancel the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a order cancelation
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestCancelOrderCancelled = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Cancel order failed
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to cancel the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg  opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex has requested a order cancelation
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Not accepted</span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestIncreaseMoney = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request increase money to the order
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex sent you a request to increase money to the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex sent you a request to increase{" "}
                  <span className="font-bold">$500</span> to the order.
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Cancel</span>
                  <PrimaryButton>Continue</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestIncreaseMoneyAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request increase money to the order accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Maria accepted the request to increase money to the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex sent you a request to increase{" "}
                  <span className="font-bold">$500</span> to the order.
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <PrimaryButton disabled>Accepted</PrimaryButton>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const RequestIncreaseMoneyCancelled = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Request increase money to the order not accepted
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Maria not accepted the request to increase money to the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex sent you a request to increase{" "}
                  <span className="font-bold">$500</span> to the order.
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Reason</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, rem minus aut, adipisci magni earum
                      voluptatum facere provident voluptate quasi et alias eius
                      tempora necessitatibus asperiores, tempore saepe. Quia,
                      velit?
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                  <span className="mr-3 text-gray-500">Not accepted</span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
const OfferDelivered = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex delivered the order.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Añadir funcionalidad de stripe a tu web
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900">Margot Foster</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Delivery message
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <div className="flex">
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Include Source Files
                    </dt>
                    <dd class="mt-2 text-sm text-gray-900">
                      <div className="border-2 border-gray-500 p-4 w-52 text-center rounded opacity-25">
                        Source Files
                      </div>
                      <span className="mt-2 text-gray-500">
                        The source files will be available when you accept the
                        delivery
                      </span>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <span className="mr-3 text-gray-500">
                        Request revision
                      </span>
                      <PrimaryButton>Accept</PrimaryButton>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const OfferDeliveredAccepted = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {SuccessIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery Success
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Mark accepted the delivery.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Añadir funcionalidad de stripe a tu web
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900">Margot Foster</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Delivery message
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <div className="flex">
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Include Source Files
                    </dt>
                    <dd class="mt-2 text-sm text-gray-900">
                      <div className="border-2 border-green-500 text-green-500 p-4 w-52 text-center rounded cursor-pointer">
                        Source Files
                      </div>
                      <span className="mt-2 text-gray-500">
                        Source files available
                      </span>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <PrimaryButton disabled>Accepted</PrimaryButton>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const OfferDeliveredCancelled = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {CancelIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery Cancelled
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Mark not accepted the delivery.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg opacity-75">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Añadir funcionalidad de stripe a tu web
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900">Margot Foster</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Delivery message
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <div className="flex">
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                      <svg
                        class="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300 mr-3"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 200 200"
                        aria-hidden="true"
                      >
                        <path
                          vector-effect="non-scaling-stroke"
                          stroke-width="1"
                          d="M0 0l200 200M0 200L200 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Include Source Files
                    </dt>
                    <dd class="mt-2 text-sm text-gray-900">
                      <div className="border-2 border-grey-500 p-4 w-52 text-center rounded opacity-25">
                        Source Files
                      </div>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <span className="mr-3 text-gray-500">
                        Revision required
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
const RequestDeliveryRevision = () => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                {InfoIcon()}
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex justify-between">
              <div className="text-sm">
                <span href="#" className="font-medium text-gray-900">
                  Delivery revision
                </span>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Alex requested a delivery revision.
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">6 days ago</p>
            </div>
            <div class="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium text-gray-900">
                  Alex requested a delivery revision
                </h3>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      Delivery revision message
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis soluta sunt adipisci consectetur suscipit vitae
                      asperiores vero, beatae nesciunt magnam quibusdam illum
                      quaerat fugiat odio aliquam accusamus harum recusandae
                      illo.
                    </dd>
                  </div>

                  {/* <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500"></dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end items-center">
                      <span className="mr-3 text-gray-500">
                        Request revision
                      </span>
                      <PrimaryButton>Accept</PrimaryButton>
                    </dd>
                  </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export {
  Offer,
  OfferAccepted,
  OfferCancelled,
  RequestChangeDateDelivery,
  RequestChangeDateDeliveryAccepted,
  RequestChangeDateDeliveryCancelled,
  RequestCancelOrder,
  RequestCancelOrderAccepted,
  RequestCancelOrderCancelled,
  RequestIncreaseMoney,
  RequestIncreaseMoneyAccepted,
  RequestIncreaseMoneyCancelled,
  OfferDelivered,
  OfferDeliveredAccepted,
  OfferDeliveredCancelled,
  RequestDeliveryRevision,
};
