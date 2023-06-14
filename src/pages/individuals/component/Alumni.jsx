import React from 'react'
import sucessStory from "../../../asset/homePage/image/svg/individuals/Success Story.svg"
import youtubeVideo from "../../../asset/homePage/image/svg/individuals/youtube.svg"
import styles from "../../individuals/style/Alumni.module.css"

const Alumi = () => {
  return (
    <div className={styles['main-ctn']}>
      <div className={styles['sub-ctn']}>
        <p>
        What Our <span style={{color : "#FF2E2E"}}>Alumni</span> Say
        </p> 

         {/* <img src={sucessStory}/>  */}
         <div className={styles['image-div']}>
            <img src={youtubeVideo} />
        </div> 
      </div>
    </div>
  )
}

export default Alumi
