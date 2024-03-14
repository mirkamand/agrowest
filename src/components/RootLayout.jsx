import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import HeaderSlider from "./HeaderSlider";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavbar />
      <HeaderSlider />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
