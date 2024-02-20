import React from "react";
import { about_data } from "../data/data";
import BtnPrimary from "../components/BtnPrimary";

const About = () => {
  return (
    <div>
      <div className="container">
        {about_data.map((data) => (
          <section className="about_section" key={data.id}>
            <div className="images_container">
              <div className="frame">
                <img src={data.img1} alt="" />
              </div>
              <div className="frame">
                <img src={data.img2} alt="" />
              </div>
            </div>
            <div className="text_container">
              <div className="title">{data.title}</div>
              <div className="subtitle">{data.subtitle}</div>
              <div className="text">{data.text}</div>
              <BtnPrimary />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
