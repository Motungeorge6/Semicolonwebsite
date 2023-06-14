import React from 'react'
import circle from "../../../asset/homePage/image/svg/Circle-icon.svg";
import rectangle from "../../../asset/homePage/image/svg/Rectangle-icon.svg";
const WhatWeDo = () => {
  return (
    <div>
       <div className="what-we-do-ctn">
        <div className="inner-ctn">
          <div className="what-we-do-text">
            <p>
              What <span className="we">We</span> Do
            </p>
          </div>
          <div className="individual-section">
            <div className="left-sec">
              <div>
                <img src={circle}></img>
              </div>
              <div className="about-ctn">
                <p>
                  We help <span> individuals</span> thrive and stand out in the
                  digital economy by training them to become world-class tech
                  professionals. We also help entrepreneurs successfully launch
                  impactful, job-creating opporturnities.
                </p>
              </div>
            </div>

            <div className="right-sec">
              <div>
                <img src={rectangle}></img>
              </div>
              <div className="about-ctn">
                <p>
                  We support
                  <span> businesses</span> on their digital transformation
                  journeys through talent placement, employee upskilling,
                  project delivery, and advisory services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
