import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ img, rating, name, color = "", price, code, id }) => {
  const azn_logo = "₼";
  const link = encodeURIComponent(id);
  return (
    <div>
      <Link to={`/products/${link}`} className="product_card">
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
      </Link>
    </div>
  );
};

export default ProductCard;
