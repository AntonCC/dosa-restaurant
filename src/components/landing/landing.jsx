import React, { useState, useEffect } from 'react'
import './landing.scss'
import debounce from '../../helperFuncs/debounce'

const Landing = ({ bgImage, small }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleHeightChange)

    return () => {
      window.removeEventListener('resize', debouncedHandleHeightChange)
    }
  }, [])

  const handleHeightChange = () => {
    setInnerHeight(window.innerHeight)
  }

  const debouncedHandleHeightChange = debounce(handleHeightChange, 75)

  return (
    <div className={`landing ${small ? 'small' : ''}`} style={{ background: `url(${bgImage}) center/cover no-repeat`, height: `calc(${innerHeight}px - 84px)` }}>

    </div>
  )
}
export default Landing