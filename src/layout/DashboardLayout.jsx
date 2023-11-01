import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import DashboardSide from "./DashboardSide";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer shadow-xl lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg top-[64px] lg:top-0">
          <DashboardSide />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
