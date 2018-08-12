import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import '../Styles/MainButtonWrapper.css'

export class MainButtonWrapper extends Component {
  render() {
    return (
      <div className="button-wrapper">
        <Button className="main-button" inverted color='red'>
          Projects
        </Button>
        <Button className="main-button" inverted color='red'>
          About Me
        </Button>
        <Button className="main-button" inverted color='red'>
          Contact
        </Button>
      </div>
    )
  }
}

export default MainButtonWrapper
