import React from 'react'
import Gallery from './gallery/Gallery.jsx'
import Overview from './overview/Overview.jsx'
import Detail from './detail/Detail.jsx'
import Call from './calltoaction/Call.jsx'

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
