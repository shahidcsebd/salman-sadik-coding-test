import React from "react";
import img from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { BiLinkExternal } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 z-10 flex justify-between shadow sticky top-0">
      <div className="">
        <label
          tabIndex="0"
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ="
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="flex-1 hidden lg:flex justify-evenly ">
        <Link
          to="/"
          className="flex items-center text-blue-500 gap-4 font-medium hover:translate-x-2 duration-300"
        >
          {" "}
          <HiUserGroup /> Join Our Facebook Page
          <BiLinkExternal className="animate-pulse" />
        </Link>
        <Link
          to="/"
          className=" flex items-center text-red-500 gap-4 font-medium hover:translate-x-2 duration-300"
        >
          {" "}
          <IoLogoYoutube /> Subscribe Youtube Channel
          <BiLinkExternal className="animate-pulse" />
        </Link>
        <Link
          to="/"
          className="flex items-center text-blue-500 gap-4 font-medium hover:translate-x-2 duration-300"
        >
          {" "}
          <BsFacebook /> Follow us on Facebook
          <BiLinkExternal className="animate-pulse" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={img} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
