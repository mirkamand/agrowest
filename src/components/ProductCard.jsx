import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ img, rating, name, color = "", price, code }) => {
  const azn_logo = "₼";
  return (
    <div>
      <a href="#" className="product_card">
        <div className="frame">
          <img src={img} alt="" />
        </div>
        <div className="product_info">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return (
                <div className="star" key={index}>
                  <FaStar
                    size={20}
                    color={index + 1 <= rating ? "#ffc107" : "#dee2e6"}
                  />
                </div>
              );
            })}
          </div>
          <div className="title">{`${name} ${color}`}</div>
          <div className="price">{`${price} ${azn_logo}`}</div>
          <div className="code">{`kod: ${code}`}</div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
