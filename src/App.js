import React, { Component } from 'react'
import './App.css'
import { dummyContent } from './dummy-content'
import Hammer from 'hammerjs'

class App extends Component {
  state = { open: false }
  zoomHam = null
  componentDidMount() {
    const zoomEl = document.getElementById('zoom-container')
    // const zoomEl = document.getElementById('App')
    this.zoomHam = new Hammer(document.body, {})
    this.zoomHam.get('pinch').set({ enable: true })
    this.zoomHam.on('pinch', ev => {
      zoomEl.style.transform = `scale(${ev.scale})`
      zoomEl.style['transform-origin'] = `0 0`
      console.log(`ev.scale`, ev.scale)
    })
  }

  render() {
    const open = this.state.open
    const openModal = () => this.setState({ open: true })
    const closeModal = () => this.setState({ open: false })
    return (
      <>
        <div className={`Modal ${open ? '' : 'hidden'}`} onClick={closeModal}>
          <div className="Modal-content">{dummyContent}</div>
        </div>

        <div id="App" className={'App'}>
          <div
            id="zoom-container"
            className={'App-content'}
            onClick={openModal}
          >
            {dummyContent}
          </div>
        </div>
      </>
    )
  }
}

export default App
