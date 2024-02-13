import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { overlay_images_data } from "../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";

const SliderOverlayMenu = ({ slideIndex }) => {
  const swiperRef = useRef(null);

  React.useEffect(() => {
    swiperRef.current?.swiper.slideTo(slideIndex);
    console.log(slideIndex);
  }, [slideIndex]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        speed={1000}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        direction={"vertical"}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {overlay_images_data.map((data) => (
          <SwiperSlide key={data.id}>
            <img src={data.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderOverlayMenu;
