import React from "react";
import style from "./PostCard.module.css";

import { FaEye } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { Col } from "react-bootstrap";

const PostCard = ({ img, title, desc, views, date }) => {
  return (
    <Col sm={12} md={6} lg={4} className={style.card}>
      <div className={style.imgContainer}>
        <img src={img} alt="post preview image" />
      </div>
      <h3> {title} </h3>
      <p> {desc} </p>

      <div className={style.details}>
        <div>
          <div className={style.day}> {date.day} </div>
          <div>
            <div className={style.deteMonth}>{date.month}</div>
            <div className={style.dateYear}> {date.age} </div>
          </div>
        </div>
        <div>
          <FaEye /> <span> 2036 </span>
          <AiOutlineComment /> <span> 1560</span>
        </div>
      </div>
    </Col>
  );
};

export default PostCard;
