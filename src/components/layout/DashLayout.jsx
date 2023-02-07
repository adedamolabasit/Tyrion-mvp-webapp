import React from "react";
import DashNav from "../../pages/dashboard/DashNav";
import MobileNav from "../../pages/dashboard/MobileNav";
import SidebarNew from "../../pages/dashboard/SidebarNew";
// import Sidebar from "../dashboard/Sidebar";

function dashLayout({ children }) {
  return (
    <div className="flex items-start w-screen h-full">
      <SidebarNew />
      <div className="">
        {/* large screen navigation*/}
        <div className="hidden md:block">
          <DashNav />
        </div>
        <div className="md:hidden">
          {/* mobile nav */}
          <MobileNav />
        </div>
        {children}
      </div>
    </div>
  );
}

export default dashLayout;
