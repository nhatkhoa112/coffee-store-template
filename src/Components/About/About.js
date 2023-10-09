import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Feature from "../Feature/Feature";
import signature from "./../../imgs/sign-1.png";
import icon1 from "./../../imgs/about-icon-1.png";
import icon2 from "./../../imgs/about-icon-2.png";
import icon3 from "./../../imgs/about-icon-3.png";
import icon4 from "./../../imgs/about-icon-4.png";

import style from "./About.module.css";

import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      id: 1,
      img: icon1,
      name: "The best World sorts",
      desc: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      id: 2,
      img: icon2,
      name: "Many points of sale",
      desc: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      id: 3,
      img: icon3,
      name: "Professional baristas",
      desc: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      id: 4,
      img: icon4,
      name: "24/7 fast delivery",
      desc: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
  ];

  return (
    <Container style={{ padding: "100px 0" }}>
      <Row>
        {/* about section */}
        <Col className={style.about} sm={12} lg={6}>
          <h3 className={style.h3}> Who are we ? </h3>
          <motion.h2
            style={{ overflow: "hidden" }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={style.h2}
          >
            {" "}
            About Market{" "}
          </motion.h2>
          <motion.p
            style={{ overflow: "hidden" }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={style.p}
          >
            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
            vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
            Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
          </motion.p>
          <img src={signature} className={style.signature} alt="signature" />
        </Col>
        {/* feature section */}
        <Col sm={12} lg={6} className={style.features}>
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Row>
              {features.map((feature, id) => (
                <Col sm={12} md={6} lg={6} key={feature.id}>
                  <Feature
                    name={feature.name}
                    desc={feature.desc}
                    img={feature.img}
                  />
                </Col>
              ))}
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
