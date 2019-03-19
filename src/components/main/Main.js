import React from 'react'
import Gallery from '../main/gallery/Gallery'
import Overview from './overview/Overview'
import Detail from './detail/Detail'

export default function Main() {
  return (
    <main className="hotel-view">
      <Gallery/>
      <Overview/>
      <Detail/>
    </main>
  )
}
