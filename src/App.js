import React, { Component } from 'react'
import './App.css'
import { dummyContent } from './dummy-content'

class App extends Component {
  render() {
    return (
      <div className="App-root">
        <div className="App-content">{dummyContent}</div>
        <div className={'App-modal App-modal-open'}>
          <div className="Modal-content">{dummyContent}</div>
        </div>
      </div>
    )
  }
}

export default App
