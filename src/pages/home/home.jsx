import React from 'react'
import './home.scss'
import { imgBannerInfo, textBannerInfo } from './homeInfo'
import FoodCarousel from '../../components/carousel/carousel'
import ImgTextBanner from '../../components/img-text-banner/img-text-banner'
import TextBanner from '../../components/text-banner/text-banner'
import PreFooter from '../../components/pre-footer/pre-footer'

const Home = () => {
  return (
    <div className="home">
      <FoodCarousel />
      {
        imgBannerInfo.map(info => (
          <ImgTextBanner {...info} />
        ))
      }
      <TextBanner {...textBannerInfo}/>
      <PreFooter />
    </div>
  )
}
export default Home