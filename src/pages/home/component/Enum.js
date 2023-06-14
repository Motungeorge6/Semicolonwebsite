import React from "react";
import enums from "../style/Enum.module.css";
import woman from "../../../asset/homePage/image/svg/woman-on-her-pc.svg";
import stockVector from "../../../asset/homePage/image/svg/stock-vector.svg";
import illustrationWomanVirtual from "../../../asset/homePage/image/svg/illustration-woman-virtual.svg";

const Enum = () => {
  return (
    <div className={enums["main-ctn"]}>
      <div className={enums["inner-ctn"]}>
        <div className={enums["img-ctn"]}>
          <img src={woman} alt="" />
          <img src={stockVector} alt="" />
          <img src={illustrationWomanVirtual} alt="" />
        </div>
        <div className={enums["content-ctn"]}>
          <p className={enums["title"]}>
            Learn, Hire, & Train in <span>One Place.</span>
          </p>
          <p className={enums["body"]}>
            Want to acquire in-demand skills and get matched with employers, or
            hire qualified talent, manage virtual training, and monetize your
            training program?
          </p>
          <button>Try Enum</button>
        </div>
      </div>
    </div>
  );
};

export default Enum;
