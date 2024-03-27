import React from "react";
import { products_data } from "../data/data";
import ProductCard from "../components/ProductCard";

const FruitsPage = () => {
  return (
    <>
      <section className="fruits_section">
        <div className="container">
          <div className="fruits_wrapper">
            <div className="left_side">
              <div className="ctgs">salam</div>
            </div>
            <div className="right_side">
              <div className="fruits">
                {products_data.map(
                  ({ name, color, img, price, code, rating, id }) => (
                    <ProductCard
                      name={name}
                      color={color}
                      img={img}
                      price={price}
                      code={code}
                      rating={rating}
                      id={id}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FruitsPage;
