import React from 'react'
import './carousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Car1 from '../../imgs/car1.jpg'
import Car2 from '../../imgs/car2.jpg'


const FoodCarousel = () => {
  return (
    <div className="food-carousel">
      <div className="carousel-text">
        <h2>A Fine Dining Experience</h2>
      </div>
      <Carousel 
        renderThumbs={() => false}
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={900}
        >
        <div>
          <img src={Car1} alt="food"/>
        </div>
        <div>
          <img src={Car2} alt="food"/>
        </div>
      </Carousel>
    </div>
  )
}
export default FoodCarousel