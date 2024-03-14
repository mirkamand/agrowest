import React from "react";
import { mission_data } from "../data/data";

const MissionPage = () => {
  return (
    <>
      <section className="mission_section">
        <div className="container">
          {mission_data.map((data) => (
            <div className="mission_wrapper">
              <div className="title">{data.title}</div>
              <div className="logo">
                <span></span> <img src="image/logo.svg" alt="" /> <span></span>
              </div>
              <div className="subtitle">{data.subtitle}</div>
              <div className="frame">
                <img src={data.img} alt="" />
              </div>
              <div className="text">{data.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MissionPage;
