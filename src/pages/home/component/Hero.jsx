import React from "react";
import "../style/Hero.css";
const Hero = (props) => {
  return (
    <div className="main-container">
      <div className="transformation-container">
        <div className="inner-container">
          <div className="text-one">
            <h1>{props.title}</h1>
          </div>
          <div className="text-two">
            <p>{props.text}</p>
          </div>

          {/* <div className={`text-one ${props.titleClassName}`}> </div> */}

          <div className={props.headerBtn}>
            {props.buttons}
          </div>
        </div>
        <div className="right-side-container">{props.gif}</div>
      </div>

    </div>
  );
};

export default Hero;
