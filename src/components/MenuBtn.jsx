import React, { useState } from "react";

const MenuBtn = ({ isActive, onClick }) => {
  return (
    <div className={`menu_btn ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="to_open">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="to_close">
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default MenuBtn;
