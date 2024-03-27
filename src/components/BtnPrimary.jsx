import React from "react";
import { Link } from "react-router-dom";

const BtnPrimary = ({ path = "/", title }) => {
  return (
    <Link to={path} className="btn_primary">
      {title}
    </Link>
  );
};

export default BtnPrimary;
