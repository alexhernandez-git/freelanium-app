import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import Spinner from "components/ui/Spinner";
import useAuthRequired from "hooks/useAuthRequired";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { stripeConnect } from "redux/actions/auth";

const earnings = () => {
  const router = useRouter();
  const code = router.query.code ? router.query.code : null;
  const [cantRender, authReducer, initial_data_fetched] = useAuthRequired();
  const dispatch = useDispatch();
  useEffect(() => {
    if (initial_data_fetched && authReducer.user && code) {
      dispatch(stripeConnect(code));
    }
  }, [initial_data_fetched]);

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <div class="bg-gray-50 pt-12 sm:pt-16 shadow sm:rounded-md sm:overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Earnings
                </h2>
                {/* <p class="mt-3 text-xl text-gray-500 sm:mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus repellat laudantium.
                </p> */}
              </div>
            </div>
            <div class="mt-10 pb-12 bg-white sm:pb-16">
              <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="max-w-4xl mx-auto">
                    <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                      <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                        <dt class="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Net income
                        </dt>
                        <dd class="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.net_income}
                        </dd>
                      </div>
                      <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt class="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Withdrawn
                        </dt>
                        <dd class="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.withdrawn}
                        </dd>
                      </div>
                      <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt class="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Used for purchases
                        </dt>
                        <dd class="order-1 text-3xl font-extrabold text-cyan-600">
                          ${authReducer?.user?.used_for_purchases}
                        </dd>
                      </div>
                      <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                        <dt class="order-2 mt-2 text-sm leading-6 font-medium text-gray-500">
                          Available for withdrawal
                        </dt>
                        <dd class="order-1 text-3xl font-extrabold text-cyan-600">
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
                  <div class="max-w-md mx-auto lg:max-w-5xl">
                    <div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                      <div class="flex-1">
                        <div>
                          <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                            Withdrawn your money
                          </h3>
                        </div>
                        <div class="mt-4 text-sm text-gray-600">
                          Withdrawn your money with stripe
                        </div>
                      </div>
                      <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                        {/* <Link href="/settings/billing-information">
                                <a
                                  href="#"
                                  class="block w-full text-center rounded-lg border border-transparent bg-cyan-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-cyan-700"
                                  aria-describedby="tier-growth"
                                >
                                  Start your trial
                                </a>
                              </Link> */}

                        {authReducer.stripe_connecting ? (
                          <>
                            <span class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600  hover:bg-cyan-700">
                              <Spinner />
                            </span>
                          </>
                        ) : (
                          <>
                            {authReducer?.user?.stripe_account_id &&
                            authReducer?.user?.stripe_dashboard_url ? (
                              <Link
                                href={authReducer.user.stripe_dashboard_url}
                              >
                                <a
                                  target="_blank"
                                  class="flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700  px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                                >
                                  Stripe dashboard
                                </a>
                              </Link>
                            ) : (
                              <Link
                                href={`https://connect.stripe.com/express/oauth/authorize?response_type=code&amp;client_id=${process.env.STRIPE_CLIENT_ID}&amp;scope=read_write`}
                              >
                                <a class="flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700  px-5 py-3 border border-transparent text-base font-medium rounded-md text-white">
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
        </div>
      </SettingsLayout>
    </>
  );
};

export default earnings;
