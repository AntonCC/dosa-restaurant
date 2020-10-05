import React from 'react'
import './footer.scss'
import Button from '../button/button'
import {ReactComponent as Facebook} from '../../imgs/icons/facebook-square-brands.svg'
import {ReactComponent as Instagram} from '../../imgs/icons/instagram-square-brands.svg'
import {ReactComponent as Youtube} from '../../imgs/icons/youtube-square-brands.svg'

const Footer = ({ handleModal }) => {
  return (
    <footer>
      <div className="container">
        <div className="side-a">
          <div className="icons">
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <div className="side-b">
          <p>Contact</p>
          <Button btnText='Email Signup' btnClass='white-outline' handleClick={() => handleModal('EmailSignUp')} />
        </div>
      </div>
    </footer>
  )
}
export default Footer