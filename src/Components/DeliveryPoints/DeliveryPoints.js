import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./DeliveryPoints.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Btn from "./../UI/Btn/Btn";
import { motion } from "framer-motion";

const DeliveryPoints = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className={style.left} sm={12} md={6}>
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2>Sale and delivery points</h2>
              <p>
                Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
                vehicula odio. Donec pulvinartellus eget magna aliquet
                ultricies. Praesent gravida hendreritex, nec eleifend
                semconvallis vitae.
              </p>
              <h3>Where buy our coffee:</h3>
              <div className={style.locations}>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Canda
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Brazil
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Russia
                </p>

                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Usa
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> UK
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} />
                  UAE
                </p>

                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> KSA
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Lebanon
                </p>
                <p>
                  <IoIosArrowForward style={{ color: "#c0aa83" }} /> Algera
                </p>
              </div>
              <Btn className={style.viewAll}> View all points </Btn>
            </motion.div>
          </Col>
          <Col className={style.right} sm={12} md={6}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DeliveryPoints;
