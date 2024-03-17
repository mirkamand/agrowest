import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="products_heading">
      <div className="title">{title}</div>
      <a href="#">Hamısına bax</a>
    </div>
  );
};

export default Heading;
