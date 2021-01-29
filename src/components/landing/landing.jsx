import React from 'react'
import './landing.scss'
import debounce from '../../helperFuncs/debounce'

const Landing = ({ bgImage, small }) => {
  // Landing size flickers when nav becomes fixed.

  // const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  // useEffect(() => {
  //   window.addEventListener('resize', debouncedHandleHeightChange)

  //   return () => {
  //     window.removeEventListener('resize', debouncedHandleHeightChange)
  //   }
  // }, [])

  // const handleHeightChange = () => {
  //   setInnerHeight(window.innerHeight)
  // }

  // const debouncedHandleHeightChange = debounce(handleHeightChange, 75)

  return (
    <div className={`landing ${small ? 'small' : ''}`} style={{ background: `url(${bgImage}) center/cover no-repeat`}}>

    </div>
  )
}
export default Landing