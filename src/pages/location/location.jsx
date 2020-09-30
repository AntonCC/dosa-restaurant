import React from 'react'
import './location.scss'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import DiningHall from '../../imgs/dining-hall2.jpg'
import Landing from '../../components/landing/landing'
import LocationTime from '../../components/location-time/location-time'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia3J5cHRpa2syMSIsImEiOiJja2JpZWM5aHMwOHpnMzVsdThvbW85cG1yIn0.2WKGtcKnE5Zh62qs-LhVSg'
});
 

const location = () => {
  return (
    <div className='location'>
      <Landing bgImage={DiningHall} small />
      <LocationTime />
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '500px',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[40.624862, -73.965062]} />
        </Layer>
      </Map>
    </div>
  )
}
export default location