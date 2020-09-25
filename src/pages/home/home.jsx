import React from 'react'
import './home.scss'
import FoodCarousel from '../../components/carousel/carousel'
import ImgTextBanner from '../../components/img-text-banner/img-text-banner'

const Home = () => {
  return (
    <div className="home">
      <FoodCarousel />
      <ImgTextBanner />
    </div>
  )
}
export default Home