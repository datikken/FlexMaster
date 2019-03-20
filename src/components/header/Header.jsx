import React from 'react'
import Logo from '../../assets/img/logo.png'
import Navbar from './Navbar.jsx'
import Search from './Search.jsx'

export default function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo" className="logo"/>
        <Search/>
        <Navbar/>
    </header>
  )
}
