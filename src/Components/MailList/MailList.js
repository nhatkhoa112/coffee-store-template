import Btn from "./../UI/Btn/Btn";
import React from "react";
import style from "./MailList.module.css";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const MailList = () => {
  return (
    <div className={`container ${style.mailContainer}`}>
      <div>
        <h3>
          <span>Subscribe</span> <br />
          Weekly newsletter
        </h3>
      </div>
      <div className={style.subBox}>
        <input type="email" placeholder="Your email address" />
        <Btn className={style.subBtn}> Subscribe </Btn>
      </div>
      <div className={style.socialIcons}>
        <div className={style.iconBox}>
          <BsTwitter className={style.icon} />
        </div>
        <div className={style.iconBox}>
          <FaFacebookF className={style.icon} />
        </div>

        <div className={style.iconBox}>
          <BsInstagram className={style.icon} />
        </div>
        <div className={style.iconBox}>
          <FaGooglePlusG className={style.icon} />
        </div>
      </div>
    </div>
  );
};

export default MailList;
