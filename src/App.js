import React, { Component } from 'react'
import Layout from './components/layout/Layout'
import Index from './containers/index'

class App extends Component {
  render() {
    return (
      <Layout>
        <Index/>
      </Layout>
    );
  }
}

export default App;
