import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import HEX_DATA from './countries_hex_data.json'
import Globe from 'react-globe.gl'

export default function CustomGlobe() {
  const globeEl = useRef()

  const [hex, setHex] = useState({ features: [] })

  useEffect(() => {
    setHex(HEX_DATA)
  }, [])

  useEffect(() => {
    globeEl.current.controls().autoRotate = true
    globeEl.current.controls().autoRotateSpeed = 0.2
    globeEl.current.controls().enableZoom = false

    const MAP_CENTER = { lat: -34.61315, lng: -58.37723, altitude: 1.7 }
    globeEl.current.pointOfView(MAP_CENTER, 0)
  }, [globeEl])

  return (
    <Globe
      ref={globeEl}
      width={300}
      height={300}
      backgroundColor="rgba(0,0,0,0)"
      labelsData={[{ lat: -34.61315, lng: -58.37723, label: '' }]}
      labelText={'label'}
      labelColor={useCallback(() => 'white', [])}
      labelDotRadius={1}
      hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(() => '#1b66b1', [])}
    />
  )
}
