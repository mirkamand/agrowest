// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs_data } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Heading from "./Heading";

const bg = "/image/logo.svg";

// import required modules

function BlogsTemplate({ data }) {
  return (
    <a href="#" className="blog_card">
      <div className="frame">
        <img src={data.img} alt="" />
      </div>
      <div className="title">{data.title}</div>
      <div className="date">
        <img src="/image/calendar.svg" alt="" />
        <span>{data.date}</span>
      </div>
      <div className="subtitle">{data.subtitle}</div>
    </a>
  );
}

const Blogs = () => {
  return (
    <section className="blogs_section">
      <div className="container">
        <Heading title="Bloglar" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="blogs_slider"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              slidesOffsetAfter: 80,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {blogs_data.map((data) => (
            <SwiperSlide key={data.id}>
              <BlogsTemplate data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
