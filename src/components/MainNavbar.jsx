import React, { useEffect, useRef, useState } from "react";
import { menu_data } from "../data/data";
import MenuBtn from "./MenuBtn";
import SliderOverlayMenu from "./SliderOverlayMenu";

const MainNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState(null);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const fixed_navbar_handler = () => {
    if (window.scrollY >= 600) {
      setNavbarFixed(true);
    } else if (window.scrollY <= 20) {
      setNavbarFixed(false);
    }
  };

  window.addEventListener("scroll", fixed_navbar_handler);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  document.body.style.overflowY = isActive ? "hidden" : "auto";

  const linkActiveHandler = (linkId) => {
    setIsLinkActive(linkId);
  };

  const [slideIndex, setSlideIndex] = React.useState(0);

  return (
    <nav className={`main_nav ${isNavbarFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <a href="#">
              <img src="/image/main_logo.png" alt="" />
            </a>
          </div>
          <MenuBtn isActive={isActive} onClick={toggleActive} />
          <div className={`menu_overlay ${isActive ? "active" : ""}`}>
            <div className="container">
              <div className="languages_wrapper">
                <div className="languages">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Az
                      </a>
                    </li>
                    <li>
                      <a href="#">En</a>
                    </li>
                    <li>
                      <a href="#">Ru</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="offcanvas_menu">
                <ul className="menu_items">
                  {menu_data.map((data, index) => (
                    <li className="menu_item" key={data.id}>
                      <a
                        href={data.path}
                        onMouseOver={() => setSlideIndex(index)}
                        onMouseOut={() => setSlideIndex(isLinkActive)}
                        onClick={() => {
                          linkActiveHandler(index);
                          setSlideIndex(index);
                        }}
                        className={`${isLinkActive == index ? "active" : ""}`}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="slider_overlay">
                <SliderOverlayMenu slideIndex={slideIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
