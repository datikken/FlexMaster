import React from 'react'
import Gallery from '../main/gallery/Gallery'
import Overview from './overview/Overview'
import Detail from './detail/Detail'
import Call from '../main/calltoaction/Call'

export default function Main() {
  return (
    <main className="hotel-view">
      <Gallery/>
      <Overview/>
      <Detail/>
      <Call/>
    </main>
  )
}
