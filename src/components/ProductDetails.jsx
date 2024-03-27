import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products_data from "../data/products_data";
import ProductTemplate from "./ProductTemplate";
import Heading from "./Heading";
import ProductCard from "../components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ErrorPage from "../pages/ErrorPage";

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState();
  console.log(productSlug);
  useEffect(() => {
    const result = products_data.find(
      (data) => encodeURIComponent(data.id) === productSlug
    );

    if (result) {
      setProduct(result);
    } else {
    }
  }, [productSlug]);

  return (
    <>
      {product?.id ? (
        <div>
          <ProductTemplate
            name={product.name}
            img={product.img}
            rating={product.rating}
            price={product.price}
            code={product.code}
            text={product.text}
            slides={product.slides}
          />

          <div className="suggestions">
            <div className="container">
              <Heading title="Oxşar Məhsullar" />
              <Swiper
                className="products_slider"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 2,
                  },
                  900: {
                    slidesPerView: 3,
                  },
                  1350: {
                    slidesPerView: 4,
                  },
                }}
              >
                {products_data.map((data) => (
                  <div>
                    {product.id !== data.id ? (
                      <SwiperSlide key={data.id}>
                        <ProductCard
                          name={data.name}
                          color={data.color}
                          img={data.img}
                          price={data.price}
                          code={data.code}
                          rating={data.rating}
                          id={data.id}
                        />
                      </SwiperSlide>
                    ) : null}
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ProductDetails;
