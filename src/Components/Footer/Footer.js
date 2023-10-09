import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`container ${style.content}`}>
        <Container>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <img src={require("./../../imgs/logo_white-7.png")} alt="logo" />
              <p>
                Pellentesque congue non augue vitae pellentesque. Morbi
                sollicitudin eleifend rhoncus. Mauris vel nisl a massa viverra
                sollicitudin semper a diam.
              </p>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <h3>EXPLORE</h3>
              <div className={style.links}>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Home
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Blog
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Contact Us
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> About Us
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Products
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Gallery
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <h3> CONTACT US</h3>

              <div className={style.contacts}>
                <p>
                  <IoLocationSharp className={style.icon} /> Hoi An city ,
                  Egypt
                </p>
                <p>
                  <FaPhoneAlt className={style.icon} /> +0111 222 333
                </p>
                <p>
                  <FaEnvelope className={style.icon} /> info@contact.com
                </p>
                <p>
                  <FaSkype className={style.icon} /> skype account
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={style.cpy}>
        <div className="container">
          <p>created by k | contact@anymous.com</p>
          <span onClick={scrollHandler}>
            <FaArrowUp />
            <p> Top </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
