import React from 'react'
import Loop from '../../assets/icomoon/SVG/magnifying-glass.svg'

export default function Search() {
  return (
    <form action="#" className="search">
    <input type="search__input" placeholder="Search hotels" className="search__input"/>
    <button className="search__button">
      <img src={Loop} alt="search" className="search__icon" />
    </button>
  </form>
  )
}
