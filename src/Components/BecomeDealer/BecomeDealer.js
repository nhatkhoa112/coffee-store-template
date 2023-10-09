import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./BecomeDealer.module.css";

import Btn from "./../UI/Btn/Btn";
import { motion } from "framer-motion";

const BecomeDealer = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className={style.left} sm={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p> More Than </p>
                <p> 5400 </p>
                <p>
                  Customers <br /> Trust us
                </p>
              </div>
              <div>
                <img
                  src={require("./../../imgs/coffee-cup-1.png")}
                  style={{ width: "100%" }}
                  alt="coffee cup image"
                />
              </div>
            </motion.div>
          </Col>
          <Col className={style.right} sm={12} md={6}>
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2> Become our dealer</h2>
              <p>
                Curabitur sollicitudin ultrices tortor, eget pulvinar risus
                cursus eu. Vivamus sit amet odio massa. Vivamus dapibus
                elementum tellus nec fermentum. Sed blandit condimentum
                molestie. In hac habitasse platea dictumst. Etiam fringilla a
                elit at ornare.
              </p>
              <Btn>Become a dealer </Btn>
              <Btn>Contact us </Btn>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BecomeDealer;
