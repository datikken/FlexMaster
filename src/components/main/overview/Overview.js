import React from 'react'
import Star from '../../../assets/icomoon/SVG/star.svg'
import Location from '../../../assets/icomoon/SVG/location-pin.svg'

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

      <div className="overview__location">
        <img src={Location} className="overview__icon-location"/>       
        <button className="btn-inline">Albufeira, Portugal</button> 
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>

      </div>
    </div>
  )
}
