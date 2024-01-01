import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <SideBar></SideBar>
      {/* <MainContainer></MainContainer> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Body;
