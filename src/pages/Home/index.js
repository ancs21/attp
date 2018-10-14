import React from 'react'
import Code from '@components/Code'
import { HMR } from '@pwa/preset-react'
import Window from '@components/Window'
import Feats from '@components/Feats'
import style from './index.sass'
import { Link } from 'react-router-dom'

import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl'
import chilli from '../../icons/chilli.svg'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW5jczIxIiwiYSI6ImNqbjczYzVmczFocjkzcm52M2lqcGt1NzYifQ.BfGVNyqATkqHZImG9MxfRQ'
})
function Home(props) {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[106.6681927, 10.7751909]}
      zoom={[12]}
    >
      {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[106.6681927, 10.7751909]} />
		<Feature coordinates={[106.6681927,10.7751909]} />
      </Layer> */}
      <Marker
        coordinates={[106.6681927, 10.7751909]}
        anchor="bottom"
        onClick={() => props.history.push('product/1')}
      >
        <img src={chilli} width="32" height="32" />
      </Marker>
    </Map>
  )
}

export default HMR(Home, module)
