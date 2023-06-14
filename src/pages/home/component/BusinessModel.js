import React, { useState, useRef, useMemo } from "react";
import styles from "../style/BusinessModel.module.css";
import { Content } from "./content";
import { motion } from "framer-motion";

const BusinessModel = () => {
  const [position, setPosition] = useState(0);

  const circleColor = useMemo(() => {
    switch (position) {
      case 0:
        return "#FFADAD";

      case 1:
        return "#78B9F2";

      case 2:
        return "#ABABAB";
    }
  }, [position]);

  return (
    <div className={styles["mainCont"]}>
      <div className={styles["main-ctn"]}>
        <p className={styles["main-ctn-p"]}>
          How <span>We</span> Do It
        </p>
        <div className={styles["renderContain"]}>
          <div className={styles["positionContain"]}>
            <div className={styles["positionContainOne"]}>
              {position === 0 ? (
                <motion.div className={styles["line"]} layoutId="line" />
              ) : (
                <div style={{ width: 3 }} />
              )}
              <button
                onClick={() => setPosition(0)}
                style={{
                  fontSize: position === 0 ? "20px" : "19px",
                  fontWeight: position === 0 ? "600" : "400",
                  color: position === 0 ? "#FF2E2E" : "#38516D",
                  border: 0,
                  backgroundColor: "transparent",
                  paddingLeft: "3%",
                }}
              >
                <p>{Content[0].text}</p>
              </button>
            </div>
            <div className={styles["positionContainTwo"]}>
              {position === 1 ? (
                <motion.div className={styles["line"]} layoutId="line" />
              ) : (
                <div style={{ width: 3 }} />
              )}
              <button
                onClick={() => setPosition(1)}
                style={{
                  fontSize: position === 1 ? "20px" : "19px",
                  fontWeight: position === 1 ? "600" : "400",
                  color: position === 1 ? "#1B8AED" : "#38516D",
                  border: 0,
                  backgroundColor: "transparent",
                  paddingLeft: "3%",
                }}
              >
                <p>{Content[1].text}</p>
              </button>
            </div>
            <div className={styles["positionContainThree"]}>
              {position === 2 ? (
                <motion.div className={styles["line"]} layoutId="line" />
              ) : (
                <div style={{ width: 3 }} />
              )}
              <button
                onClick={() => setPosition(2)}
                style={{
                  fontSize: position === 2 ? "20px" : "19px",
                  fontWeight: position === 2 ? "600" : "400",
                  color: position === 2 ? "#2B1C1C" : "#38516D",
                  border: 0,
                  backgroundColor: "transparent",
                  paddingLeft: "3%",
                  textAlign: "left",
                }}
              >
                <p>{Content[2].text}</p>
              </button>
            </div>
          </div>
          <div className={styles["imgContain"]}>
            {position === 0 && (
              <img
                src={Content[0].image}
                alt="student-image"
                className={styles["student-image"]}
              />
            )}
            {position === 1 && (
              <img
                src={Content[1].image}
                alt="growth-image"
                className={styles["growth-image"]}
              />
            )}
            {position === 2 && (
              <img
                src={Content[2].image}
                alt="project-image"
                className={styles["project-image"]}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles["renderAbsoluteContainer"]}>
        {position === 0 && (
          <div className={styles["program"]}>
            <div
              className={styles["circle-div"]}
              style={{ background: circleColor }}
            ></div>
            <p className={styles["venturePOne"]}>{Content[0].topic}</p>
            <p className={styles["venturePTwo"]}>{Content[0].body}</p>
            <button className={styles["venturebtn"]}>{Content[0].btn}</button>
          </div>
        )}
        {position === 1 && (
          <div className={styles["venture"]}>
            <div
              className={styles["circle-div"]}
              style={{ background: circleColor }}
            ></div>
            <p className={styles["venturePOne"]}>{Content[1].topic}</p>
            <p className={styles["venturePTwo"]}>{Content[1].body}</p>
            <button className={styles["venturebtn"]}>{Content[1].btn}</button>
          </div>
        )}
        {position === 2 && (
          <div className={styles["labs"]}>
            <div
              className={styles["circle-div"]}
              style={{ background: circleColor }}
            ></div>
            <p className={styles["venturePOne"]}>{Content[2].topic}</p>
            <p className={styles["venturePTwo"]}>{Content[2].body}</p>
            <button className={styles["venturebtn"]}>{Content[2].btn}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessModel;
