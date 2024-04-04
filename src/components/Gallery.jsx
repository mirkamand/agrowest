import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Gallery = ({ gallery_data }) => {
  return (
    <div className="cards">
      {gallery_data.map((data) => (
        <div className="card">
          <div className="frame">
            <div className="overlay">
              <i
                className="fa-solid fa-magnifying-glass"
                aria-hidden="true"
              ></i>
            </div>
            <img src={data.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
