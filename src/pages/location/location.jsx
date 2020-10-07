import React from 'react'
import './location.scss'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import DiningHall from '../../imgs/dining-hall2.jpg'
import Landing from '../../components/landing/landing'
import LocationTime from '../../components/location-time/location-time'
import markerUrl from '../../imgs/marker.png'

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP_TOKEN,
  interactive: false
});
 

const location = () => {
  return (
    <div className='location'>
      <Landing bgImage={DiningHall} small />
      <LocationTime />
      <Map
        style="mapbox://styles/kryptikk21/ckfwybbov0qdw19nylsjgt79e"
        containerStyle={{
          height: '500px',
          width: '100%'
        }}
        center={{lat: 40.593827, lng: -73.973545}}
        zoom={[12]}
      >        
        <Marker
          coordinates={{lat: 40.593827, lng: -73.973545}}
          anchor="bottom">
          <img style={{height: '30px', width: '30px'}} src={markerUrl} alt='map marker' />
        </Marker>
      </Map>
    </div>
  )
}
export default location