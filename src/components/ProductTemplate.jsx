import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ProductTemplate = ({ img, name, rating, price, code, text, slides }) => {
  const azn_logo = "₼";
  return (
    <section className="product_details_section">
      <div className="container">
        <div className="product_wrapper">
          <div className="frame">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="rating">
              {[...Array(5)].map((star, index) => {
                return (
                  <div className="star" key={index}>
                    <FaStar
                      size={30}
                      color={index + 1 <= rating ? "#ffc107" : "#dee2e6"}
                    />
                  </div>
                );
              })}
            </div>
            <div className="price">{`${price} ${azn_logo}`}</div>
            <div className="code">{`kod: ${code}`}</div>
            <div className="text">{text}</div>
          </div>
        </div>

        <div className="product_slider_wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            className="product_slider"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {slides.map((data) => (
              <SwiperSlide>
                <div className="frame">
                  <img src={data} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductTemplate;
