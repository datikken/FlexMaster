import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'

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
