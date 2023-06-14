import React, { useState } from "react";
import lingo from "../../../asset/career/our lingo.png";
import "../style/Lingo.css";
import Card from "./Card";
import { DummyData } from "./DummyData";

const Lingo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="lingo-container">
      <div className="inner-lingo-container">
        <h4>
          <span>Semicolon</span> Lingo
        </h4>
      </div>

      <div className="slider">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {DummyData.map((data) => (
            <div key={data.id} className="cards">
              <Card
                title={data.title}
                subtitle={data.subtitle}
                content={data.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <img src={lingo} alt="Our Lingo" />
      </div>
    </div>
  );
};

export default Lingo;
