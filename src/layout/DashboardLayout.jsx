import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
import { RiRouteLine } from "react-icons/ri";
import { AiOutlineAlignRight } from "react-icons/ai";
import Nav from "./Nav";

let linkClass = `w-full text-lg py-4 flex bg-base-200 justify-start gap-5 border-4 border-base-300 border-t-0 border-x-0`;

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer shadow-xl lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-lg top-[67px] lg:top-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className=" duration-300 menu p-4 w-80 flex flex-col gap-4 min-h-full bg-base-100 text-base-content">
            <div className="mt-12 mb-10 flex flex-col justify-center items-center">
              <img src={logo} alt="" className="w-40 mb-4" />
              <div className="flex flex-row justify-between bg-gradient-to-r from-teal-200 via-teal-300 to-teal-400 p-2 rounded-full border-2 border-sky-100">
                <div className="my-auto px-4">
                  <div className="text-md font-medium text-yellow-900">
                    Credits
                  </div>
                  <div className="text-lg font-medium text-yellow-900">
                    15245
                  </div>
                </div>
                <button className="text-yellow-800 text-md font-medium my-auto bg-gradient-to-l from-teal-200 via-teal-300 to-teal-400 rounded-full p-4">
                  Buy Credit
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg> */}
                </button>
              </div>
            </div>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `active ${linkClass} font-medium` : `${linkClass}`
                }
              >
                <RiRouteLine className="text-xl" />
                <span>
                  {" "}
                  Human-Like Mode <br />
                  (Outline to Article)
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/outline"
                className={({ isActive }) =>
                  isActive ? `active ${linkClass} font-medium` : `${linkClass}`
                }
              >
                <AiOutlineAlignRight className="text-xl" />
                Outlines Editor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
