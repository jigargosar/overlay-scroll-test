import React, { Component } from 'react'
import './App.css'
import { dummyContent } from './dummy-content'

class App extends Component {
  state = { open: false }

  render() {
    const open = this.state.open
    const openModal = () => this.setState({ open: true })
    const closeModal = () => this.setState({ open: false })
    return (
      <>
        <div className="Modal" onClick={closeModal}>
          <div className="">{dummyContent}</div>
        </div>

        <div className={'App'} onClick={openModal}>
          {dummyContent}
        </div>
      </>
    )
  }
}

export default App
