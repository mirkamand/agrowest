// import React, { useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products_data } from "../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";

const Products = () => {
  return (
    <section className="products_section">
      <div className="container">
        <div className="products_heading">
          <div className="title">Məhsullar</div>
          <a href="#">Hamısına bax</a>
        </div>
        <Swiper
          className="products_slider"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
              grid: {
                fill: "row",
                rows: 2,
              },
            },
            900: {
              slidesPerView: 3,
              grid: {
                fill: "row",
                rows: 2,
              },
            },
            1350: {
              slidesPerView: 4,
              grid: {
                fill: "row",
                rows: 2,
              },
            },
          }}
        >
          {products_data.map((data) => (
            <SwiperSlide key={data.id}>
              <ProductCard
                name={data.name}
                color={data.color}
                img={data.img}
                price={data.price}
                code={data.code}
                rating={data.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
