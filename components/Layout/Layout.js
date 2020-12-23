import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Layout = ({ children, searchBar, pageName = "" }) => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header>
          <Header />
        </header>
        <div
          className={`${
            router.pathname !== "/" && "max-w-7xl"
          } mx-auto sm:px-6 lg:px-8`}
        >
          <div className="py-10">
            <div className="mx-auto flex justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-600">
                {pageName}
              </h1>
              {searchBar && (
                <>
                  <SearchBar text={searchBar} />
                </>
              )}
            </div>
            <main>
              {/* <!-- Replace with your content --> */}
              <div className="px-4 py-8 sm:px-0">{children}</div>
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
