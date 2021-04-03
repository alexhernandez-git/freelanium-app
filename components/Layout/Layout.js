import React from "react";
import Header from "components/Layout/Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useAlert } from "hooks/useAlert";

const Layout = ({
  children,
  openTryItFree,
  handleCloseTryFree,
  invitedBuyer,
}) => {
  const router = useRouter();
  const alert = useAlert();

  return (
    <>
      {alert}
      <div className="relative bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl 2xl:max-w-none  mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <Header
            openTryItFree={openTryItFree}
            handleCloseTryFree={handleCloseTryFree}
            invitedBuyer={invitedBuyer}
          />
          {children}
        </div>
      </div>
      <Footer />
      <div className="">
        <div className="z-50 fixed inset-0 flex items-end justify-end px-4 py-6 pointer-events-none sm:p-6">
          <div className="max-w-sm w-48 bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img
                    src="../../static/images/freelanium_logo.png"
                    className="w-full"
                  />
                </div>
                <div className="w-0 flex-1 ml-4">
                  <p className="text-lg font-bold text-cyan-500">Open BETA</p>
                  {/* <p className="mt-1 text-sm text-gray-500">
                  Anyone with a link can now view this file.
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
