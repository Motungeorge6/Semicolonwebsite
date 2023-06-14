import React from "react";
import africapru from "../../../asset/homePage/image/svg/partners/africapru.svg";
import asseco from "../../../asset/homePage/image/svg/partners/asseco.svg";
import aws from "../../../asset/homePage/image/svg/partners/aws.svg";
import britishCouncil from "../../../asset/homePage/image/svg/partners/british-council.svg";
import catalystLogo from "../../../asset/homePage/image/svg/partners/catalyst-logo.svg";
import celoLogo from "../../../asset/homePage/image/svg/partners/celo-logo.svg";
import cowrywise from "../../../asset/homePage/image/svg/partners/cowrywise-logo.svg";
import crown from "../../../asset/homePage/image/svg/partners/crown-inter.svg";
import fcmb from "../../../asset/homePage/image/svg/partners/fcmb.svg";
import git from "../../../asset/homePage/image/svg/partners/git.svg";
import henleyLogo from "../../../asset/homePage/image/svg/partners/henley-logo.svg";
import jetBrains from "../../../asset/homePage/image/svg/partners/jet-brains.svg";
import stanbic from "../../../asset/homePage/image/svg/partners/stanbic.svg";
import union from "../../../asset/homePage/image/svg/partners/union.svg";
import wema from "../../../asset/homePage/image/svg/partners/wema.svg";
import atlansia from "../../../asset/homePage/image/svg/partners/atlansia.svg";
import lbs from "../../../asset/homePage/image/svg/partners/lagos-bussiness-school.svg";
import styles from "../../home/style/Partners.module.css";
const Partners = () => {
  return (
    <div className={styles["partner-main-ctn"]}>
      <p>
        Brands that trust <span style={{ color: "#FF2E2E" }}>Us</span>
      </p>
      <div className={styles["partner-sub-ctn"]}>
        <img src={africapru} alt=""></img>
        <img src={asseco} alt=""></img>
        <img src={aws} alt=""></img>
        <img src={britishCouncil} alt=""></img>
        <img src={catalystLogo} alt=""></img>
        <img src={celoLogo} alt=""></img>
        <img src={cowrywise} alt=""></img>
        <img src={crown} alt=""></img>
        <img src={fcmb} alt=""></img>
        <img src={git} alt=""></img>
        <img src={henleyLogo} alt=""></img>
        <img src={jetBrains} alt=""></img>
        <img src={stanbic} alt=""></img>
        <img src={union} alt=""></img>
        <img src={wema} alt=""></img>
        <img src={atlansia} alt=""></img>
        <img src={lbs} alt=""></img>
      </div>
    </div>
  );
};

export default Partners;
