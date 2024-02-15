import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { header_slider_data } from "../data/data";

// import "../scss/header_slider";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BtnPrimary from "./BtnPrimary";

function SlideTemplate({ data }) {
  const background_image = {
    backgroundImage: `url(${data.img})`,
  };
  return (
    <div className="slider_wrapper" style={background_image}>
      <div className="container">
        <div className="text_container">
          <div className="title">{data.title}</div>
          <div className="subtitle">{data.subtitle}</div>
          <BtnPrimary />
        </div>
      </div>
    </div>
  );
}

const HeaderSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="header_slider"
      >
        {header_slider_data.map((data) => (
          <SwiperSlide key={data.id}>
            <SlideTemplate data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeaderSlider;
