import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      
      <Sidebar />

      
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
