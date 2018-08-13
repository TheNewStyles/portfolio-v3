import React, { Component } from 'react'
import { Button, Icon, Menu, Segment, Sidebar, Header } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import '../Styles/MenuNav.css'
import { MainButtonWrapper } from './MainButtonWrapper';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (     
      <div>     
        <Button id="hamburger" onClick={this.handleButtonClick}>-<br/>-<br/>-</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='wide'
          >
            <Menu.Item as='a' href="#home">
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a' href="#projects">
              <Icon name='star' />
              Projects
            </Menu.Item>
            <Menu.Item as='a' href="#contact">
              <Icon name='camera' />
              Contact
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            
            <Header as='h2'>Tyler Peterson</Header>
            
            <Router>
              <Segment basic>
                <div className="button-wrapper">                  
                  <Button className="main-button" inverted color='red'>
                    <NavLink to="/home">Projects</NavLink>
                  </Button>
                  <Button className="main-button" inverted color='red'>
                    About Me
                  </Button>
                  <Button className="main-button" inverted color='red'>
                    Contact
                  </Button>   

                  <Route exact path="/home" component={About}/>                     
                </div>               
              </Segment>
            </Router> 

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}