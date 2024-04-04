import React, { useState } from "react";
import { products_data } from "../data/data";
import ProductCard from "../components/ProductCard";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { category_data } from "../data/data";

const FruitsPage = () => {
  return (
    <>
      <section className="fruits_section">
        <div className="container">
          <div className="fruits_wrapper">
            <div className="left_side">
              <div className="ctgs">
                <Accordion defaultActiveKey="0" alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Meyvələr</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div>
                            {category_data.map((data) => (
                              <div key={data.id} className="mb-3 checkbox">
                                <Form.Check
                                  type={type}
                                  id={data.id}
                                  label={data.name}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>İdxal</Accordion.Header>
                    <Accordion.Body>
                      {["checkbox"].map((type) => (
                        <div>
                          <div className="mb-3 checkbox">
                            <Form.Check
                              id="external"
                              type={type}
                              label="Xarici"
                            />
                          </div>
                          <div className="mb-3 checkbox">
                            <Form.Check id="local" type={type} label="Yerli" />
                          </div>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="right_side">
              <div className="fruits">
                {products_data.map(
                  ({ name, color, img, price, code, rating, id }) => (
                    <ProductCard
                      name={name}
                      color={color}
                      img={img}
                      price={price}
                      code={code}
                      rating={rating}
                      id={id}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FruitsPage;
