import React from 'react'
import "../style/WhySemicolon.css"
import curriculum from "../../../asset/homePage/image/svg/individuals/ws-icon/curriculum.svg"
import work from "../../../asset/homePage/image/svg/individuals/ws-icon/work.svg"
import payment from "../../../asset/homePage/image/svg/individuals/ws-icon/payment.svg"
import internship from "../../../asset/homePage/image/svg/individuals/ws-icon/internship.svg"
import entrepreneurship from "../../../asset/homePage/image/svg/individuals/ws-icon/entreprneurship.svg"
import community from "../../../asset/homePage/image/svg/individuals/ws-icon/community.svg"
const WhySemicolon = () => {
  return (
    <div className='ws-ctn'>
      <div className='ws-sub-ctn'>
      <p className='p-tag'>Why <span style={{color : "#38516D"}}>Semicolon?</span></p>
        <div className='section-ctn'>
            
            <div>
                <div className='icon-ctn'><img src={curriculum} /></div>
                <p className='title'>Market-Ready Curriculum</p>
                <p className='body'>We deliver intensive training programs with a practical
                    curriculum that will take you from being a novice to a skilled professional.
                </p>
            </div>
            <div>
                <div className='icon-ctn'><img src={work} /></div>
                <p className='title'>Real Work Experience</p>
                <p className='body'>Through practical projects, master the skills you need to thrive as a software tech talent.
                </p>
            </div>
            
            <div>
                <div className='icon-ctn'><img src={payment} /></div>
                <p className='title'>Flexible Tuition Payment</p>
                <p className='body'>We offer flexible tuition payment options, so you have one less thing to worry about.
                </p>
            </div>
           
           <div>
                <div className='icon-ctn'><img src={internship} /></div>
                <p className='title'>Internship/Job Opportunities</p>
                <p className='body'>By the end of your training, you can get deployed to any of our hiring partners or destinations.</p>
           </div>
            
            <div>
                <div className='icon-ctn'><img src={entrepreneurship} /></div>
                <p className='title'>Entrepreneurship Opportunities</p>
                <p className='body'>Got an idea you want to turn into a Minimum Viable Product (MVP)? 
                    Begin your entrepreneurial journey with us as we help you become 
                    investment-ready.
                </p>
            </div>
            
            <div>
                <div className='icon-ctn'> <img src={community} /></div>
                <p className='title'>Thriving Tech Community</p>
                <p className='body'>
                 Join our network of skilled developers to get access to
                 the latest industry news, resources,
                 and job opportunities that will help your tech career grow.
                </p>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default WhySemicolon
