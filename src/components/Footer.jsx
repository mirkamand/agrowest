import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_nav">
          <ul className="footer_links">
            <li>
              <div className="title">Menyular</div>
            </li>
            <li>
              <a href="#">Haqqımızda</a>
            </li>
            <li>
              <a href="#">Missiyamız</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Əlaqə</a>
            </li>
          </ul>
          <ul className="footer_links">
            <li>
              <div className="title">Məhsullar</div>
            </li>
            <li>
              <a href="#">Banan yetişdirilmə müəssisəsi</a>
            </li>
            <li>
              <a href="#">Meyvələr</a>
            </li>
            <li>
              <a href="#">Tərəvəzlər</a>
            </li>
            <li>
              <a href="#">Galereya</a>
            </li>
          </ul>
          <ul className="footer_links">
            <li>
              <div className="title">Faydalı linklər</div>
            </li>
            <li>
              <a href="#">Şikayət və təkliflər</a>
            </li>
            <li>
              <a href="#">Şərtlər və qaydalar</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="footer_links">
            <div className="search_bar">
              <input type="text" placeholder="Axtar" />
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              </button>
            </div>

            <ul className="social">
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_text">
          <div className="copyright">© 2023 Bütün hüquqlar qorunur.</div>
          <div className="footer_logo">
            <img src="/image/proton_logo.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
