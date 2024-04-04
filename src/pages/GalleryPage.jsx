import React from "react";
// import Gallery from "../components/Gallery";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { gallery_data } from "../data/data";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <section className="gallery_section">
      <div className="container">
        <Tabs
          defaultActiveKey="product"
          id="tab"
          className="mb-3 tabs"
          variant="pills"
        >
          <Tab eventKey="product" className="tab" title="Məhsullar">
            <Gallery gallery_data={gallery_data} />
          </Tab>
          <Tab eventKey="gardens" className="tab" title="Bağlar">
            <Gallery gallery_data={[...gallery_data].reverse()} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default GalleryPage;
