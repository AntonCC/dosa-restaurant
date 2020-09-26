import React from 'react'
import './home.scss'
import { bannerInfo } from './homeInfo'
import FoodCarousel from '../../components/carousel/carousel'
import ImgTextBanner from '../../components/img-text-banner/img-text-banner'

const Home = () => {
  return (
    <div className="home">
      <FoodCarousel />
      {
        bannerInfo.map(info => (
          <ImgTextBanner {...info} />
        ))
      }
    </div>
  )
}
export default Home