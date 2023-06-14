import React from "react";

import CoreValues from "./CoreValues";
import OurBoard from "./OurBoard";
import Lingo from "./Lingo";
import Collaborate from "./Collaborate";
import AboutUsHero from "./AboutUsHero";
import Hero from "../../home/component/Hero";
import BoardRoom from "./BoardRoom";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero />
      <CoreValues />
      <OurBoard />
      <BoardRoom />
      <Lingo />

      <Collaborate />
    </div>
  );
};

export default AboutUsPage;
