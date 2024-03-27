import React from "react";
import About from "../components/About";
import Products from "../components/Products";
import Blogs from "../components/Blogs";
import Sponsors from "../components/Sponsors";
import { blogs_data } from "../data/data";

const HomePage = () => {
  return (
    <>
      <About />
      <Products />
      <Blogs blogs_data={blogs_data} />
      <Sponsors />
    </>
  );
};

export default HomePage;
