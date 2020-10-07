import React from 'react'
import './home.scss'
import { imgBannerInfo, textBannerInfo } from './homeInfo'
import Landing from '../../components/landing/landing'
import ImgTextBanner from '../../components/img-text-banner/img-text-banner'
import TextBanner from '../../components/text-banner/text-banner'
import Car1 from '../../imgs/car1.jpg'

const Home = ({ handleModal }) => {
  return (
    <div className="home">
      <Landing bgImage={Car1}/>
      {
        imgBannerInfo.map(info => (
          <ImgTextBanner key={info.title} {...info} />
        ))
      }
      <TextBanner handleModal={handleModal} {...textBannerInfo}/>
    </div>
  )
}
export default Home