import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";

const CommonLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default CommonLayout;
