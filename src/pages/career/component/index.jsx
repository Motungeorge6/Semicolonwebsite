import React from 'react'
import Hero from '../../home/component/Hero'
import Button from '../../../components/button/Button.jsx'
import layer from "../../../asset/career/Layer 2.svg"

const CareerPage = () => {
  return (
    <div>
       <div >
            <Hero title="Let’s make a difference together"
                    text="Are you passionate about 
                    driving transformation in Africa and impacting society? There’s a place for you at Semicolon."
                        buttons={
                            <Button variant="filled">Join Us</Button>
                        }
                    gif={<img src={layer} />}   
            />
        </div>
    </div>
  )
}

export default CareerPage
