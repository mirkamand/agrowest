import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Autoplay } from "swiper/modules";

const Gallery = ({ gallery_data }) => {
  return (
    <div>
      <Swiper
        className="gallery_slider"
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
            slidesPerView: 1,
            grid: {
              fill: "row",
              rows: 3,
            },
          },
          900: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 3,
            },
          },
          1350: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 3,
            },
          },
        }}
      >
        {gallery_data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="card">
              <div className="frame">
                <div className="overlay">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    aria-hidden="true"
                  ></i>
                </div>
                <img src={data.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
