import React from 'react'
import "../style/IndividualHero.css"
import Hero from "../../home/component/Hero"
import henly from "../../../asset/homePage/image/svg/individuals/logo/henley.svg"
import Button from '../../../components/button/Button.jsx'
import employment from "../../../asset/homePage/image/svg/individuals/icons/employment.svg"
import hiring from "../../../asset/homePage/image/svg/individuals/icons/hiring.svg"
import income from "../../../asset/homePage/image/svg/individuals/icons/income.svg"
import teamwork from "../../../asset/homePage/image/svg/individuals/icons/teamwork.svg"
import heroPic from "../../../asset/homePage/image/svg/individuals/heroPic.svg"



const IndividualHero = () => {
  return (
    <div>
      <div>
      <Hero title="Become a skilled tech talent, without prior knowledge."
            text="Get the skills and experience you need to become a global 
            tech talent and be a part of a thriving community and talent pool
             through our techpreneurship programs."
                buttons={
                    <Button variant="filled">Apply Now</Button>
                }
            gif={<img src={heroPic} />}   
      />

      <div className='sect-two'>
        <div className='sect-bt'>
          <div className="hero-bars">
            <img src={employment} />
          </div>
          <div>
            <p className='quantity'>95%</p>
            <p className='title-ct'>Employment Rate</p>
          </div>
        </div>

        <div className='sect-bt'>
          <div className="hero-bars">
            <img src={teamwork} />
          </div>
          <div>
            <p className='quantity'>35k+</p>
            <p className='title-ct'>Tech Community</p>
          </div>
        </div>

        <div className='sect-bt'>
          <div className="hero-bars">
            <img src={hiring} />
          </div>
          <div>
            <p className='quantity'>100+</p>
            <p className='title-ct'>Hiring Destinations</p>
          </div>
        </div>

        <div className='sect-bt'>
          <div className="hero-bars">
            <img src={income} />
          </div>
          <div>
            <p className='quantity'>425%</p>
            <p className='title-ct'>Avg. Income Increase</p>
          </div>
        </div>
      </div>
      </div>

      <div className='logo-sec'>
        <div className='logo-sub-sec'>
          <p>
          In partnership with
          </p>
          <img src={henly}/>
        </div>
      </div>
    </div>
  )
}

export default IndividualHero
