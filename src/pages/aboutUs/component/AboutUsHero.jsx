import React from "react";
import "../style/AboutUsHero.css";
import our from "../../../asset/career/semicolon staffs character 1.png";
import Ellipse from "../../../asset/career/Ellipse 387.png";
import Overlay from "../../../asset/career/Ellipse 388.png";
import Target from "../../../asset/career/Target 1.png";
import Binoculars from "../../../asset/career/Binoculars 1.png";
const AboutUsHero = () => {
  return (
    <div>
      <div className="about-main-ctn">
        <div className="about-hero-ctn">
          <p className="about-title">Who We Are</p>
          <p className="about-txt">
            As problem solvers, technologists, and optimists for a better
            Africa, we help corporations and individuals rightly position
            themselves and adapt to the digital era. Want to seamlessly
            transition into a thriving digital organization or career? We are
            your trusted partner.
          </p>
        </div>
      </div>

      <div className="about-sub">
        {/* <div> */}
        <img className="base-image" src={Ellipse} alt="Base Image" />
        <img className="overlay-image" src={our} alt="Overlay Image" />
        <img className="overlay-shadow" src={Overlay} alt="Overlay shadow" />
      </div>
      {/* </div>  */}

      <div className="about-sub-sec">
        <div className="about-mission">
          <img
            className="Gif-One"
            src={Target}
            alt="Target"
            style={{ paddingLeft: "35%" }}
          />
          <p className="about-sec-one">Our Mission</p>
          <p className="about-sec-two">
            Enable Africa’s digital transformation by building tech-focused
            talent and businesses.
          </p>
        </div>
        <div className="about-line"></div>
        <div className="about-mission">
          <img
            className="Gif-Two"
            src={Binoculars}
            alt="Bino"
            style={{ paddingLeft: "30%" }}
          />

          <p className="about-sec-one">Our Vision</p>
          <p className="about-sec-two">
            Africa will be home to a talented, thriving technology community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
