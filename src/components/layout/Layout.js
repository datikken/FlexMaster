import React from 'react'
import Aux from '../../hoc/Aux'

export default function Layout(props) {
  return (
    <Aux>
        <h1>Toolbar</h1>
        <main>
            {props.children}
        </main>
    </Aux>
  )
}
