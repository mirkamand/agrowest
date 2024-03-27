import React from "react";
import Blogs from "../components/Blogs";
import { blogs_data } from "../data/data";
import { blogs_data2 } from "../data/data";

const BlogsPage = () => {
  return (
    <section>
      <Blogs blogs_data={blogs_data} heading={false} />
      <Blogs blogs_data={blogs_data2} heading={false} />
    </section>
  );
};

export default BlogsPage;
