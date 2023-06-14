import React from 'react'
import growth from "../../../asset/business/Growth1.svg"
import Hero from '../../home/component/Hero'
import Button from '../../../components/button/Button.jsx'
import "../style/BHero.css"

const BHero = () => {
  return (
    <div>
        <div >
            <Hero title="Stay Competitive  with the Right Talent, Training, and Tools"
                    text="Hire the best tech talent, upskill your team, and develop cutting-edge
                    solutions that help you run a thriving and profitable business."
                        buttons={
                            <Button variant="filled">Grow Your Business</Button>
                        }
                    gif={<img src={growth} />}   
            />
        </div>
    </div>
  )
}

export default BHero
