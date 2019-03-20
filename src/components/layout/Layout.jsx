import React from 'react'
import Header from '../header/Header.jsx'
import Sidebar from '../sidebar/Sidebar.jsx'
import Main from '../main/Main.jsx'

export default function Layout(props) {
  return (
    <div className="container">
        <Header/>

      <div className="content">
        <Sidebar/>
        <Main/>
      </div>

    </div>
  )
}
