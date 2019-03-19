import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

export default function Layout(props) {
  return (
    <div className="container">
        <Header/>

      <div className="content">
        <Sidebar/>

          <main className="hotel-view">
            Hotel view
            {props.children}
          </main>
        </div>

    </div>
  )
}
