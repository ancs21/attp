import React from 'react'
import Code from '@components/Code'
import { HMR } from '@pwa/preset-react'
import Window from '@components/Window'
import Feats from '@components/Feats'
import style from './index.sass'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYW5jczIxIiwiYSI6ImNqbjczYzVmczFocjkzcm52M2lqcGt1NzYifQ.BfGVNyqATkqHZImG9MxfRQ'
})
function Home() {
  return (
    <div>
      {/* <Window />

      <Feats /> */}
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
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
