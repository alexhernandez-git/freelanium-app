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

const OfferActivity = () => {
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
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        margotfoster@example.com
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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

const OfferAcceptedActivity = () => {
  return (
    <li>
      <div className="relative pb-8 opacity-75">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
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
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        margotfoster@example.com
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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

const OfferCancelledActivity = () => {
  return (
    <li>
      <div className="relative pb-8 opacity-75">
        <span
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex items-start space-x-3">
          <div>
            <div className="relative px-1">
              <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
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
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        margotfoster@example.com
                      </dd>
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
                        <PrimaryButton disabled>Cancelled</PrimaryButton>
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

export { OfferActivity, OfferAcceptedActivity, OfferCancelledActivity };
