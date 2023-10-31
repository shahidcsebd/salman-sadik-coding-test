import React from "react";
import DashboardLayout from "./DashboardLayout";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    // <div className="">
    //   <div className="">
    //     <DashboardLayout />
    //   </div>
    //   {/* <div className="flex-1 flex flex-col h-screen">
    //     <Nav></Nav>

    //   </div> */}
    // </div>
    <>
      <DashboardLayout />
    </>
  );
};

export default Main;
