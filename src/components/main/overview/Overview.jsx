import React from 'react'
import Star from '../../../assets/icomoon/SVG/star.svg'
import OverviewLocation from './OverviewLocation.jsx'
import OverviewRating from './OverviewRating.jsx'

export default function Overview() {
  return (

    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <img src={Star} className="overview__icon-star"/>
        <img src={Star} className="overview__icon-star"/>
        <img src={Star} className="overview__icon-star"/>
        <img src={Star} className="overview__icon-star"/>
        <img src={Star} className="overview__icon-star"/>
      </div>
      <OverviewLocation/>
      <OverviewRating/>
    </div>
  )
}
