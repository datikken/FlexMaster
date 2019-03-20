import React from 'react'
import iHome from '../../assets/icomoon/SVG/home.svg'
import iFlight from '../../assets/icomoon/SVG/aircraft-take-off.svg'
import iCar from '../../assets/icomoon/SVG/key.svg'
import iTour from '../../assets/icomoon/SVG/map.svg'

export default function Sidebar() {
  return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <a href="#" className="side-nav__link">
              <img src={iHome} alt="icon" className="side-nav__icon"/>
              <span>Hotel</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={iFlight} alt="icon" className="side-nav__icon"/>
              <span>Flight</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={iCar} alt="icon" className="side-nav__icon"/>
              <span>Car rental</span>
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={iTour} alt="icon" className="side-nav__icon"/>
              <span>Tours</span>
            </a>
          </li>
        </ul>

        <div className="legal">
            &copy; 2019 by tikken
        </div>
      </nav>
  )
}
