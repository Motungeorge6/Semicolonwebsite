import React from "react";
import "../style/Testimonies.css";
import Natives from "../../../asset/homePage/image/svg/Natives.svg";
const Testimonies = (props) => {
  return (
    <div className="main-testimony-ctn">
      <div className="inner-testimony-ctn">
        <div className="line"></div>
        <p className="testimony">
          {props.body}
          <br />
          <br/>
          <span className="native">{props.name}</span>
        </p>
        <div className="natives-img">{props.img}</div>
      </div>
    </div>
  );
};

export default Testimonies;
