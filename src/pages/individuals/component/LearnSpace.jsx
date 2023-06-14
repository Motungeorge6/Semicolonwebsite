import React from 'react'
import learnSpace from "../../../asset/homePage/image/svg/individuals/logo/learnSpace.svg"
import guy from "../../../asset/homePage/image/svg/individuals/logo/guy-image.svg"
import "../style/LearnSpace.css"

const LearnSpace = () => {
  return (
    // <div className="learnspace-main-ctn">
      <div className='learnspace-sub-ctn'>
        <div className='learnsapace-inner'>
            <div className='learnspace-ctn'>
                <div>
                <p className='title'>Financial Option <span style={{color: "#FF7E1D"}}>—</span> <span style={{color:"#00D689"}}>Learn Now, Pay Later</span></p>
                <p className='text'>
                    We have partnered with Learnspace,
                    a platform that connects students 
                    to education financing, to offer a
                    loan option for those who cannot
                    afford to pay tuition during the
                    training. This means that you
                    get to go through our one-year
                    training program in a Learn-Now-Pay-Later 
                    format.
                </p>
                <div className='learnspace-logo-ctn'>
                    <p>powered by</p>
                    <img src={learnSpace}/>
                </div>
                </div>

                <div>
                <img src={guy} className='image'/>
                </div>
                
            </div>    
        </div>
      </div>
    // </div>
  )
}

export default LearnSpace
