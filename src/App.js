import React, { Component } from 'react'
import './App.css'
import { dummyContent } from './dummy-content'
import cn from 'classname'

class App extends Component {
  state = { open: false }

  render() {
    const open = this.state.open
    return (
      <div className="App-content-wrapper">
        <div onClick={() => this.setState({ open: true })}>
          <div className="App-content">{dummyContent}</div>
        </div>
        <div
          className={cn('App-modal', {
            'App-modal-open': open,
          })}
          onClick={() => this.setState({ open: false })}
        >
          <div className="Modal-content">{dummyContent}</div>
        </div>
      </div>
    )
  }
}

export default App
