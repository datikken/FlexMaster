import React from 'react'
import Logo from '../../assets/img/logo.png'
import Loop from '../../assets/icomoon/SVG/magnifying-glass.svg'
import Bookmark from '../../assets/icomoon/SVG/bookmark.svg'
import Chat from '../../assets/icomoon/SVG/chat.svg'
import Photo from '../../assets/img/user.jpg'

export default function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo" className="logo"/>
        <form action="#" className="search">
          <input type="search__input" placeholder="Search hotels" className="search__input"/>
          <button className="search__button">
            <img src={Loop} alt="search" className="search__icon" />
          </button>
        </form>
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
                <span className="user-nav__user-name">Jonas</span>
            </div>
        </nav>
    </header>
  )
}
