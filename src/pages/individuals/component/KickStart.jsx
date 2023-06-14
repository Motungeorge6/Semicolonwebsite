import React from 'react'
import "../../individuals/style/KickStart.css"
import bag from "../../../asset/homePage/image/svg/individuals/bag.svg"
const KickStart = () => {
  return (
    <div className='ks-main-ctn'>
      <div className='ks-ctn'>
            <p className='ready'>
            Ready to kick-start your Journey?
            </p>
            <p className='ready2'> 
            500+ tech talent building the future technology.
            </p>
            <div className='btc'>
                <button>
                    Apply Now
                </button>
            </div>
        </div>
        <>
            <img src={bag}/>
        </>
    </div>
  )
}

export default KickStart
