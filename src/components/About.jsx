import React from "react";
import { about_data } from "../data/data";
import BtnPrimary from "../components/BtnPrimary";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const current_path = location.pathname;
  return (
    <div>
      <div className="container">
        {about_data.map((data) => (
          <section className="about_section" key={data.id}>
            <div className="about_card">
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
                <div className="text">{data.descr}</div>
                {current_path == "/about" ? null : (
                  <BtnPrimary path="/about" title="Ətraflı" />
                )}
              </div>
            </div>
            {current_path == "/about" ? (
              <div className="about_text">
                <div className="b1">{data.text1}</div>
                <div className="b2">{data.text2}</div>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
