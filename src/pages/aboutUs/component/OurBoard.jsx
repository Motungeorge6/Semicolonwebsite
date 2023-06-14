import React, { useState } from "react";
import terry from "../../../asset/career/directors/terry.svg";
import ashley from "../../../asset/career/directors/ashley.svg";
import ayo from "../../../asset/career/directors/ayo.svg";
import sam from "../../../asset/career/directors/sam.svg";
import folake from "../../../asset/career/directors/folake.svg";
import { motion } from "framer-motion";
import "../style/OurBoard.css";
import joke from "../../../asset/career/advisors/joke.svg";
import dalves from "../../../asset/career/advisors/dalves.svg";
import erogogo from "../../../asset/career/advisors/erogogo.svg";
import fouad from "../../../asset/career/advisors/fouad.svg";
import joe from "../../../asset/career/advisors/joe.svg";
import kuimi from "../../../asset/career/advisors/kuimi.svg";
import lisa from "../../../asset/career/advisors/lisa.svg";
import olukuton from "../../../asset/career/advisors/olukuton.svg";
import sstuart from "../../../asset/career/advisors/sstuart.svg";
import tope from "../../../asset/career/advisors/tope.svg";

const OurBoard = () => {
  const [position, setPosition] = useState(0);

  const handlePosition = (number) => {
    if (number === 0) setPosition(0);
    else setPosition(1);
  };

  return (
    <div>
      <div className="board-main-ctn">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5%",
            fontSize: "50px",
            color: "#38516D",
          }}
        >
          <h3>
            <span style={{ color: "red" }}> Our</span> Board
          </h3>
        </div>

        <div>
          <div className="board-render">
            <div>
              <div className="board-container">
                {position === 0 ? (
                  <motion.div className="lines" layoutId="lines" />
                ) : (
                  <div style={{ width: 3 }} />
                )}
                <button
                  onClick={() => handlePosition(0)}
                  style={{
                    fontSize: position === 0 ? "20px" : "19px",
                    fontWeight: position === 0 ? "600" : "400",
                    color: position === 0 ? "#FF2E2E" : "#38516D",
                    border: 0,
                    backgroundColor: "transparent",
                    paddingLeft: "3%",
                    borderLeft:
                      position === 0 ? "4px solid red" : "3px solid #F8F8F8",
                  }}
                >
                  <p>Board of Directors</p>
                </button>
              </div>
              <div className="board-container">
                {position === 1 ? (
                  <motion.div className="lines" layoutId="lines" />
                ) : (
                  <div style={{ width: 3 }} />
                )}
                <button
                  onClick={() => handlePosition(1)}
                  style={{
                    fontSize: position === 1 ? "20px" : "19px",
                    fontWeight: position === 1 ? "600" : "400",
                    color: position === 1 ? "#FF2E2E" : "#38516D",
                    border: 0,
                    backgroundColor: "transparent",
                    paddingLeft: "3%",
                    borderLeft:
                      position === 1 ? "4px solid red" : "3px solid #F8F8F8",
                  }}
                >
                  <p>Board of Advisors</p>
                </button>
              </div>
            </div>
            <div className="board-img-ctn">
              {position === 0 && (
                <div className="terrys">
                  <div className="terry">
                    <img src={terry} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                    <img src="" alt="logo" />
                  </div>
                  <div className="terry">
                    <img src={folake} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                    <img src="" alt="logo" />
                  </div>
                  <div className="terry">
                    <img src={ayo} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                    <img src="" alt="logo" />
                  </div>
                  <div className="terry">
                    <img src={sam} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                    <img src="" alt="logo" />
                  </div>
                  <div className="terry">
                    <img src={ashley} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                    <img src="" alt="logo" />
                  </div>
                </div>
              )}
              {position === 1 && (
                <div className="advisors">
                  <div className="terry">
                    <img src={joke} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={fouad} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={erogogo} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={olukuton} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={kuimi} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={dalves} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={lisa} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={sstuart} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={tope} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                  <div className="terry">
                    <img src={joe} />
                    <p>hgjhgjhfj</p>
                    <p>bhgccmvmhvm</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBoard;
