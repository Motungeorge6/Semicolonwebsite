import React from 'react'
import "../style/HowWeHelp.css"
import i1 from "../../../asset/business/sucess-Icons/icons2_1.svg"
import i2 from "../../../asset/business/sucess-Icons/icons2_2.svg"
import i3 from "../../../asset/business/sucess-Icons/icons2_3.svg"
import i4 from "../../../asset/business/sucess-Icons/icon2_4.svg"

import hire from "../../../asset/business/howWeHelpIcon/icons1.svg"
import e_training from "../../../asset/business/howWeHelpIcon/icons2.svg"
import project from "../../../asset/business/howWeHelpIcon/icons3.svg"
import venture from "../../../asset/business/howWeHelpIcon/icons4.svg"
const HowWeHelp = () => {
  return (
    <div>
        <div className='hwh-ctn'>
        <div><p className='head-tag'>How <span style={{color : "#FF2E2E"}}>We</span>Help</p>

            <div>
                <div className='services'>
                    <div className='service-ctn'>
                        <div className='icon-cont' style={{ background: "#FFE1E1"}}><img src={hire} /></div>
                        <p className='topic-ctn'>Talent Placement</p>
                        <p className='txt'>Your people determine your success. Hire from our pool of skilled and experienced tech talent that best meets your business, digital, and tech needs.</p>
                        <button className='hwh-button'>Hire Talent</button>
                    </div>
                

                    <div className='service-ctn'>
                        <div className='icon-cont' style={{ background: "#FFEDE0"}}><img src={e_training} /></div>
                        <p className='topic-ctn'>Employee Training & Upskilling</p>
                        <p className='txt'>Equip your workforce with the right digital skills and position your business for success.</p>
                        <button className='hwh-button'>Schedule A Call</button>
                    </div>

                    <div className='service-ctn'>
                        <div className='icon-cont' style={{ background: "#CDCDCD"}}><img src={project} /></div>
                        <p className='topic-ctn'>Project Delivery & Outsourcing</p>
                        <p className='txt'>Deploy web and mobile apps faster. Work with us to streamline your project management, software design, development, testing, and deployment.</p>
                        <button className='hwh-button'>Learn More</button>
                    </div>
            
                    <div className='service-ctn'>
                        <div className='icon-cont' style={{ background: "#C2E2FF"}}><img src={venture} /></div>
                        <p className='topic-ctn'>Venture Building</p>
                        <p className='txt'>We help tech founders run successful businesses by offering administrative support, training, mentorship, and funding.</p>
                        <button className='hwh-button'>Learn More</button>
                    </div>
                </div>

                
            </div>
        </div>
        </div>

        <div className='service-bar-main-ctn'>
                    <div className='service-bar-bnt'>
                        <div className="icon-holder">
                            <img src={i1} />
                        </div>
                        <div>
                            <p className='service-quantity'>500+</p>
                            <p className='title-ser'>Tech Talent Pool</p>
                        </div>
                    </div>

                    <div className='service-bar-bnt'>
                        <div className="icon-holder">
                            <img src={i2} />
                        </div>
                        <div>
                            <p className='service-quantity'>12+</p>
                            <p className='title-ser'>Ventures</p>
                        </div>
                    </div>

                    <div className='service-bar-bnt'>
                        <div className="icon-holder">
                            <img src={i3} />
                        </div>
                        <div>
                            <p className='service-quantity'>70%</p>
                            <p className='title-ser'>Faster Hiring Turnaround Time</p>
                        </div>
                    </div>

                    <div className='service-bar-bnt'>
                        <div className="icon-holder">
                            <img src={i4} />
                        </div>
                        <div>
                            <p className='service-quantity'>24+</p>
                            <p className='title-ser'>Months Avg. Talent Retained</p>
                        </div>
                    </div>
                </div>
    </div>    
  )
}

export default HowWeHelp
