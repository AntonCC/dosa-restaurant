import React from 'react'
import { textBannerInfo, imgBannerInfo } from './aboutInfo'
import Landing from '../../components/landing/landing'
import FoodBowls from '../../imgs/food-bowls.jpg'
import TextBanner from '../../components/text-banner/text-banner'
import ImgTextBanner from '../../components/img-text-banner/img-text-banner'

const About = () => {
  return (
    <div className="about">
      <Landing bgImage={FoodBowls} small/>
      <TextBanner {...textBannerInfo} />
      {
        imgBannerInfo.map(info => (
          <ImgTextBanner {...info}/>
        ))
      }
    </div>
  )
}
export default About