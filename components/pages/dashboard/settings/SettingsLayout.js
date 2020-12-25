import Layout from "components/Layout/Dashboard/Layout";
import React from "react";
import SettingsSidebar from "./SettingsSidebar";

const SettingsLayout = ({ children }) => {
  return (
    <Layout noPaddingY>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <SettingsSidebar />
        {children}
      </div>
    </Layout>
  );
};

export default SettingsLayout;
