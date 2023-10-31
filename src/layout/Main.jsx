import React from "react";
import DashboardLayout from "./DashboardLayout";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className="flex">
      <div className="xl:w-80 min:h-screen">
        <DashboardLayout />
      </div>
      <div className="flex-1 flex flex-col h-screen">
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Main;
