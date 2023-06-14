import React from 'react'
import BHero from './BHero'
import HowWeHelp from './HowWeHelp'
import Partners from '../../home/component/Partners'
import PartnerWithUs from './PartnerWithUs'
import Testimonies from '../../home/component/Testimonies'
import GetInTouch from './GetInTouch'

const BusinessesPage = () => {
  return (
    <div>
      <BHero/>
      <HowWeHelp/>
      <Partners/>
      <PartnerWithUs/>
      <Testimonies body="“We got one of Semicolon’s students on my team. as one of my backend developers. He is a very solid and intelligent guy…across product, design, etc. He is a full-stack guy but sits in the back-end space…and I know the kind of troubles I face every now and then, trying to retain a talent like that.”" 
                    name="John Doe (HR XYZ)"/>
      <GetInTouch/>              
    </div>
  )
}

export default BusinessesPage
