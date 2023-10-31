import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer shadow-xl lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side top-[67px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className=" flex flex-col justify-center items-center">
            <img src={logo} alt="" className="w-40 my-12" />
          </div>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
            <li>
              <Link to="owned" className="w-full text-xl py-4">
                Human-Like Mode <br />
                (Outline to Article)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
