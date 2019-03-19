import React from 'react'
import Header from '../header/Header'

export default function Layout(props) {
  return (
    <div className="container">
        <Header/>

        <div className="content">
          <nav className="sidebar">
            Navigation
          </nav>

          <main className="hotel-view">
            Hotel view
            {props.children}
          </main>
        </div>

    </div>
  )
}
