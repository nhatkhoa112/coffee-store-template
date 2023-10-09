import React from "react";
import style from "./SectionHeader.module.css";

const SectionHeader = ({
  backTitle,
  frontUp,
  frontDown,
  backColor,
  frontUpColor,
  frontDownColor,
}) => {
  return (
    <div className={style.sectionHeader}>
      <p
        className={style.backTitle}
        style={{ color: backColor ? backColor : "" }}
      >
        {backTitle}
      </p>
      <p
        className={style.frontUp}
        style={{ color: frontUpColor ? frontUpColor : "" }}
      >
        {frontUp}
      </p>
      <h2
        className={style.frontDown}
        style={{ color: frontDownColor ? frontDownColor : "" }}
      >
        {frontDown}
      </h2>
    </div>
  );
};

export default SectionHeader;
