import React from "react";
import style from "./Btn.module.css";

const Btn = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${style.btn} + ${className} | ' '`}>
      {children}
    </button>
  );
};

export default Btn;
