import React from 'react'
import './modal-container.scss'
import {ReactComponent as X} from '../../imgs/icons/times-solid.svg'
import EmailSignUp from '../email-signup/email-signup'
import Reservation from '../reservation/reservation'

const ModalContainer = ({ handleModal, modalType }) => {
  return (
    <div className='modal-container'>
      <div className="close" onClick={handleModal}>
        <X />
      </div>
      {modalType === 'EmailSignUp' ? <EmailSignUp handleModal={handleModal} /> : ''}
      {modalType === 'Reservation' ? <Reservation handleModal={handleModal} /> : ''}
    </div>
  )
}
export default ModalContainer