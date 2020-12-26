import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Layout = ({
  children,
  searchBar,
  noPadding,
  noPaddingY,
  pageName = "",
}) => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header>
          <Header />
        </header>
        <div
          className={
            !noPadding
              ? `${
                  router.pathname !== "/dashboard" && "max-w-7xl  2xl:max-w-3/4"
                } mx-auto sm:px-6 lg:px-8`
              : " "
          }
        >
          <div className={!noPadding && !noPaddingY ? "py-10" : " "}>
            <div
              className={
                searchBar ? "mx-auto sm:flex justify-between p-4 sm:p-0" : ""
              }
            >
              <h1 className="text-3xl font-bold leading-tight text-gray-600">
                {pageName}
              </h1>
              <div className="m-3 block sm:hidden"></div>
              {searchBar && (
                <>
                  <SearchBar text={searchBar} />
                </>
              )}
            </div>
            <main>
              {/* <!-- Replace with your content --> */}
              <div
                className={
                  !noPadding
                    ? `px-4 ${!noPaddingY ? "py-8" : "lg:py-8"}  sm:px-0`
                    : " "
                }
              >
                {children}
              </div>
              {/* <!-- /End replace --> */}
            </main>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
