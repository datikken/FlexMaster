import React from 'react'
import Bookmark from '../../assets/icomoon/SVG/bookmark.svg'
import Chat from '../../assets/icomoon/SVG/chat.svg'
import Photo from '../../assets/img/tikken.png'

export default function Navbar() {
  return (
    <nav className="user-nav">
    <div className="user-nav__icon-box">
        <img src={Bookmark} alt="" className="user-nav__icon"/>
        <span className="user-nav__notification">7</span>
    </div>
    <div className="user-nav__icon-box">
        <img src={Chat} alt="" className="user-nav__icon"/>
        <span className="user-nav__notification">77</span>
    </div>

    <div className="user-nav__user">
        <img src={Photo} alt="" className="user-nav__user-photo"/>
        <span className="user-nav__user-name">Tikken</span>
    </div>
</nav>
  )
}
