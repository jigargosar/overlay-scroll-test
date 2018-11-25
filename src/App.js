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
          <div className="Modal-scroller">
            <div className="Modal-content">{dummyContent}</div>
          </div>
        </div>

        <div className={'App'}>
          <div className={'App-content'} onClick={openModal}>
            {dummyContent}
          </div>
        </div>
      </>
    )
  }
}

export default App
