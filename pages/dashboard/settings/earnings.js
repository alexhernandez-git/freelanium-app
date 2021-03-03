import WithdrawFundsModal from "components/pages/dashboard/order/WithdrawFundsModal";
import BillingHistory from "components/pages/dashboard/settings/BillingHistory";
import EarningsHistory from "components/pages/dashboard/settings/EarningsHistory";
import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import useOutsideClick from "hooks/useOutsideClick";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { stripeConnect } from "redux/actions/auth";
import { fetchEarnings } from "redux/actions/earnings";

const earnings = () => {
  const router = useRouter();
  const code = router.query.code ? router.query.code : null;
  const [cantRender, authReducer, initial_data_fetched] = useAuthRequired();
  const dispatch = useDispatch();
  const handleFetchEarnigsData = async () => {
    if (initial_data_fetched && authReducer.user) {
      if (code) {
        await dispatch(stripeConnect(code));
      }
      await dispatch(fetchEarnings());
    }
  };
  useEffect(() => {
    handleFetchEarnigsData();
  }, [initial_data_fetched]);

  const withdrawFundsRef = useRef();
  const [openWithdrawFunds, setOpenWithdrawFunds] = useState(false);
  const handleToggleWithdrawFunds = () => {
    setOpenWithdrawFunds(!openWithdrawFunds);
  };
  const handleCloseWithdrawFunds = () => {
    if (openWithdrawFunds) {
      setOpenWithdrawFunds(false);
    }
  };
  useOutsideClick(withdrawFundsRef, () => handleCloseWithdrawFunds());

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <div className="bg-gray-50 pt-12 sm:pt-16 shadow sm:rounded-md sm:overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Earnings
                </h2>
                {/* <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus repellat laudantium.
                </p> */}
              </div>
            </div>
            <div className="mt-10 pb-12 bg-white sm:pb-16">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                        <dt className="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Net income
                        </dt>
                        <dd className="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.net_income}
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Withdrawn
                        </dt>
                        <dd className="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.withdrawn}
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Used for purchases
                        </dt>
                        <dd className="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.used_for_purchases}
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                        <dt className="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Available funds
                        </dt>
                        <dd className="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.available_for_withdawal}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                {/* <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Plan
                  </h3>
                </div> */}

                <div>
                  <div className="max-w-md mx-auto lg:max-w-5xl">
                    <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                      <div className="flex-1">
                        <div>
                          <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                            Withdrawn your money
                          </h3>
                        </div>

                        {authReducer?.user?.stripe_account_id &&
                        authReducer?.user?.stripe_dashboard_url ? (
                          <div className="lg:w-56 mt-4">
                            <Link href={authReducer.user.stripe_dashboard_url}>
                              <a
                                target="_blank"
                                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm"
                              >
                                Stripe dashboard
                              </a>
                            </Link>
                          </div>
                        ) : (
                          <div className="mt-4 text-sm text-gray-600">
                            Connect to stripe to withdraw your money
                          </div>
                        )}
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                        {/* <Link href="/settings/billing-information">
                                <a
                                  href="#"
                                  className="block w-full text-center rounded-lg border border-transparent bg-cyan-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-cyan-700"
                                  aria-describedby="tier-growth"
                                >
                                  Start your trial
                                </a>
                              </Link> */}

                        {authReducer.stripe_connecting ? (
                          <>
                            <span className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600  hover:bg-cyan-700">
                              <Spinner />
                            </span>
                          </>
                        ) : (
                          <>
                            {authReducer?.user?.stripe_account_id &&
                            authReducer?.user?.stripe_dashboard_url ? (
                              <>
                                <span
                                  onMouseDown={handleToggleWithdrawFunds}
                                  className="cursor-pointer shadow flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700  px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                                >
                                  Withdrawn
                                </span>
                              </>
                            ) : (
                              <Link
                                href={`https://connect.stripe.com/express/oauth/authorize?response_type=code&amp;client_id=${process.env.STRIPE_CLIENT_ID}&amp;scope=read_write`}
                              >
                                <a className="flex shadow items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700  px-5 py-3 border border-transparent text-base font-medium rounded-md text-white">
                                  Connect with stripe
                                </a>
                              </Link>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Save
                </button>
              </div> */}
            </div>
          </form>
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <EarningsHistory />
          </div>
        </div>
      </SettingsLayout>
      <WithdrawFundsModal
        openWithdrawFunds={openWithdrawFunds}
        withdrawFundsRef={withdrawFundsRef}
        handleCloseWithdrawFunds={handleCloseWithdrawFunds}
      />
    </>
  );
};

export default earnings;
