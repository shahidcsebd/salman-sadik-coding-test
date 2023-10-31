import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side top-20">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-amber-200 text-base-content">
            <li>dsa</li>
            <li>dsa</li>
            <li>dsa</li>
            <li>dsa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
