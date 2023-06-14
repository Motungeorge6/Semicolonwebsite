import React from 'react'
import Button from '../../../components/button/Button';
import BusinessModel from './BusinessModel';
import Enum from './Enum';
import Partners from './Partners';
import Testimonies from './Testimonies';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import learning from "../../../asset/homePage/image/svg/e-learning.svg"
const HomePage = () => {
  return (
    <div>
      <Hero 
      headerBtn="header-btn"
      title="Accelerating Africa's Digital Transformation"
            text="We empower individuals and businesses to thrive in the future
                economy through talent, technology, and innovation."
                buttons={
                    <>
                    <Button variant="filled" href="">For Individuals</Button>
                    <Button variant="outline" href="">For businesses</Button>
                    </>
                }
                gif={<img src={learning}/>}
      />
      <WhatWeDo/>
      <BusinessModel />
      <Enum />
      <Partners />
      <Testimonies body="“Semicolon has made it easy to understand what programming and problem-solving are about.
       With what I have been given, 
      there is no limit to my possibilities. I have been given skills and a changed way of thinking" 
                    name="Segun Ishola (Cohort 2)"
                    img=""
                   

      
      />
    </div>
  )
}

export default HomePage;
