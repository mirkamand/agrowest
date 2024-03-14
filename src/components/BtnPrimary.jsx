import React from "react";
import { Link } from "react-router-dom";

const BtnPrimary = ({ path = "/" }) => {
  return (
    <Link to={path} className="btn_primary">
      Ətraflı
    </Link>
  );
};

export default BtnPrimary;
