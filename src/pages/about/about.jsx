import React from 'react'
import { textBannerInfo } from './aboutInfo'
import Landing from '../../components/landing/landing'
import FoodBowls from '../../imgs/food-bowls.jpg'
import TextBanner from '../../components/text-banner/text-banner'

const About = () => {
  return (
    <div className="about">
      <Landing bgImage={FoodBowls} small/>
      <TextBanner {...textBannerInfo} />
    </div>
  )
}
export default About