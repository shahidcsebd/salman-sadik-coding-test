import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
import { RiRouteLine } from "react-icons/ri";
import Nav from "./Nav";
const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer shadow-xl lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg top-[67px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
            <div className=" flex flex-col justify-center items-center">
              <img src={logo} alt="" className="w-40 mb-12 mt-6" />
            </div>
            <li>
              <Link
                to="/"
                className="w-full text-lg py-4 flex justify-start gap-5"
              >
                <RiRouteLine className="text-2xl" />
                <span>
                  {" "}
                  Human-Like Mode <br />
                  (Outline to Article)
                </span>
              </Link>
              <NavLink
                to="/outline"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-400 w-full text-xl py-4 flex justify-start gap-5"
                    : ""
                }
              >
                Outline
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
