import React from "react";
import { locate_banana_data } from "../data/data";

const LocateBananaPage = () => {
  return (
    <>
      <section className="locate_banana_section">
        <div className="container">
          {locate_banana_data.map((data) => (
            <div className="locate_banana_wrapper">
              <div className="frame">
                <img src={data.img} alt="" />
              </div>
              <div className="text_container">
                <div className="title">{data.title}</div>
                <div className="logo">
                  <span></span>
                  <img src="image/logo.svg" alt="" />
                  <span></span>
                </div>
                <div className="subtitle">{data.subtitle}</div>
                <div className="text">{data.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LocateBananaPage;
