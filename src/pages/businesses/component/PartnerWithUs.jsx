import React from 'react'
import "../style/PartnerWithUs.css"
import handshake from "../../../asset/business/partnerWithUs/handShake.svg"
const PartnerWithUs = () => {
  return (
    <div className='PartnerWithUs-sub-ctn'>
        <div className='PartnerWithUs-inner'>
            <div className='PartnerWithUs-ctn'>

              <div>
                  <img src={handshake} className='PartnerWithUs-image'/>
              </div>  
              <div>
                <p className='PartnerWithUs-title'>Partner With <span style={{color: "#FF2E2E"}}>Us</span></p>
                <p className='PartnerWithUs-text'>
                  We believe that collaboration is the key to innovation and 
                  social impact. That's why we partner with corporations interested in 
                  co-creating innovative solutions to real-world problems. Looking to 
                  sponsor a socially responsible initiative and engage with a large pool 
                  of young people who will be the next generation of tech leaders?
                  You can sponsor our events and ecosystem-building programs.
                </p>
                <button className='pwu-btn'>Learn More</button>
              </div>
            </div>    
        </div>
      </div>
  )
}

export default PartnerWithUs
