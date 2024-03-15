import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import HeaderSlider from "./HeaderSlider";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
