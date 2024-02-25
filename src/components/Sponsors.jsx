// import React, { useRef, useState } from "react";
import { sponsors_data } from "../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const Sponsors = () => {
  return (
    <section className="sponsors_section">
      <Swiper
        speed={4000}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        freeMode={true}
        slidesPerView={"auto"}
        a11y={false}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="sponsors_slider"
      >
        {sponsors_data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="frame">
              <img src={data.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sponsors;
