import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { RiRouteLine } from "react-icons/ri";
import { AiOutlineAlignRight } from "react-icons/ai";

const DashboardSide = () => {
  let linkClass = `w-full text-lg py-4 flex bg-base-200 justify-start gap-5 border-4 border-base-300 border-t-0 border-x-0`;
  return (
    <>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <ul className=" duration-300 menu p-4 w-80 flex flex-col gap-4 min-h-full bg-base-100 text-base-content">
        <div className="mt-12 mb-10 flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-40 mb-4" />
          <div className="flex flex-row justify-between bg-gradient-to-l from-teal-200 via-teal-300 to-teal-400 p-1 rounded-full border-2 border-sky-100">
            <div className="my-auto px-4">
              <div className="text-md font-medium text-yellow-900">Credits</div>
              <div className="text-lg font-medium text-yellow-900">$ 15245</div>
            </div>
            <button className="text-white text-md font-medium my-auto bg-gradient-to-l from-teal-400 via-teal-500 to-teal-600 hover:from-teal-300 hover:to-teal-500 hover :text-yellow-900 rounded-full p-4">
              Buy Credit
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
    </>
  );
};

export default DashboardSide;
