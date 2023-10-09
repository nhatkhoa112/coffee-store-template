import React from "react";
import style from "./ProductCard.module.css";
import Btn from "./../UI/Btn/Btn";

import { BsCart4 } from "react-icons/bs";

const ProductCard = ({ img, name, desc, price }) => {
  return (
    <div className={style.card}>
      <img src={img} />
      <p> {name} </p>
      <p> {desc} </p>
      <p className={style.price}> {price} $ </p>
      <Btn>
        <BsCart4 style={{ marginRight: "20px" }} /> Add to cart
      </Btn>
    </div>
  );
};

export default ProductCard;
