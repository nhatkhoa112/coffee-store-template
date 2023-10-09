import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Brands.module.css";

import brand1 from "./../../imgs/restaurants.png";
import brand2 from "./../../imgs/vintage.png";
import brand3 from "./../../imgs/cupcake.png";
import brand4 from "./../../imgs/coffe_logo2.png";
import brand5 from "./../../imgs/bakery.png";
import brand6 from "./../../imgs/brandit.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
const Brands = () => {
  return (
    <Fragment>
      <Container>
        <Row className="text-center" style={{ padding: "50px 0" }}>
          {brands.map((brand, id) => (
            <Col key={id}>
              <img src={brand} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Brands;
