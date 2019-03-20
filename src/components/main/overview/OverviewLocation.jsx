import React from 'react'
import Location from '../../../assets/icomoon/SVG/location-pin.svg'

export default function OverviewLocation() {
  return (
    <div className="overview__location">
        <img src={Location} className="overview__icon-location"/>       
        <button className="btn-inline">Albufeira, Portugal</button> 
    </div>
  )
}
