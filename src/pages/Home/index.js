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
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[106.6681927, 10.7751909]}
        zoom={[12]}
      >
        <Marker
          coordinates={[106.6681927, 10.7751909]}
          anchor="bottom"
          onClick={() => props.history.push('about')}
        >
          <img src={chilli} width="32" height="32" />
        </Marker>
        <Marker
          coordinates={[106.6681927, 10.7751909]}
          anchor="bottom"
          onClick={() => props.history.push('about')}
        >
          <img src={chilli} width="32" height="32" />
        </Marker>
      </Map>
      {/* <section className={style.section}>
        <h2>Installation</h2>
        <Code text="npm install --global @pwa/cli" />
        <Code offset label="OR" text="yarn global add @pwa/cli" />
      </section>

      <section className={style.section}>
        <h2>Commands</h2>
        <Code label="Scaffold a new project!" text="pwa init" />
        <Code label="Run development/live-reload server" text="pwa watch" />
        <Code label="Build production bundle(s)" text="pwa build" />
        <Code label="Generate static HTML exports" text="pwa export" />
      </section> */}
    </div>
  )
}

export default HMR(Home, module)
