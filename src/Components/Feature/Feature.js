import React from "react";
import style from "./Feature.module.css";

const Feature = ({ name, desc, img }) => {
  return (
    <div className={style.featureBox}>
      <img src={img} alt="Feature icon" />
      <h3> {name} </h3>
      <p> {desc} </p>
    </div>
  );
};

export default Feature;
