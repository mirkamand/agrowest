import React from "react";
import { products_data } from "../data/data";
import ProductCard from "../components/ProductCard";

const FruitsPage = () => {
  return (
    <>
      <section className="fruits_section">
        <div className="container">
          <div className="ctgs">salam</div>
          <div className="fruits">
            {products_data.map(({ name, color, img, price, code, rating }) => (
              <ProductCard
                name={name}
                color={color}
                img={img}
                price={price}
                code={code}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FruitsPage;
