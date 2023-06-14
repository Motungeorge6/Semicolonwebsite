import React from 'react'
import "../style/CoreValues.css"
import ubutu from "../../../asset/career/corevalues-icons/ubutu.svg"
import fulfillment from "../../../asset/career/corevalues-icons/fulfillment.svg"
import integrity from "../../../asset/career/corevalues-icons/integrity.svg"
import innovation from "../../../asset/career/corevalues-icons/innovation.svg"
import learning from "../../../asset/career/corevalues-icons/learning.svg"
import impact from "../../../asset/career/corevalues-icons/impact.svg"
const CoreValues = () => {
  return (
    <div className='core-container'>
      <div>
        <div className='core-header'>
            <p><span style={{color: "#FF2E2E"}}>Our</span> Core Values</p>
        </div> 
        <div className='core-main'>
            <div className='core-main-ctn'>
                    <div className='core-ctn'>
                        <div className='core-img'><img src={ubutu}/></div>
                        <p className='core-title'>Ubuntu</p>
                        <p className='core-txt'>We pride ourselves in our African
                            roots and thrive in a strong community where we believe we are 
                            because others are.
                        </p>
                    </div>

                    <div className='core-ctn'>
                        <div className='core-img'><img src={fulfillment}/></div>
                        <p className='core-title'>Fulfilment</p>
                        <p className='core-txt'>
                        We are on a journey of unleashing talent and innovation; our true sense of 
                        accomplishment comes 
                        from seeing lives changed and their impact on our society and the world at large.
                        </p>
                    </div>

                    <div className='core-ctn'>
                        <div className='core-img'><img src={integrity}/></div>
                        <p className='core-title'>Ubuntu</p>
                        <p className='core-txt'>We pride ourselves in our African
                            roots and thrive in a strong community where we believe we are 
                            because others are.
                        </p>
                    </div>

                    <div className='core-ctn'>
                        <div className='core-img'><img src={innovation}/></div>
                        <p className='core-title'>Ubuntu</p>
                        <p className='core-txt'>We pride ourselves in our African
                            roots and thrive in a strong community where we believe we are 
                            because others are.
                        </p>
                    </div>

                    <div className='core-ctn'>
                        <div className='core-img'><img src={learning}/></div>
                        <p className='core-title'>Ubuntu</p>
                        <p className='core-txt'>We pride ourselves in our African
                            roots and thrive in a strong community where we believe we are 
                            because others are.
                        </p>
                    </div>

                    <div className='core-ctn'>
                        <div className='core-img'><img src={impact}/></div>
                        <p className='core-title'>Ubuntu</p>
                        <p className='core-txt'>We pride ourselves in our African
                            roots and thrive in a strong community where we believe we are 
                            because others are.
                        </p>
                    </div>
                
            </div>
        </div>    
      </div>
    </div>
  )
}

export default CoreValues
