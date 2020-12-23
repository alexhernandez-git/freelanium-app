import React from "react";
import Header from "./Header";

const Layout = ({ children, pageName = "" }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="py-10">
          <header>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-700">
                {pageName}
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto sm:px-6 lg:px-8">
              {/* <!-- Replace with your content --> */}
              <div className="px-4 py-8 sm:px-0">{children}</div>
              {/* <!-- /End replace --> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
