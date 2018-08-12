import React, { Component } from 'react'
import { Button, Icon, Menu, Segment, Sidebar, Header } from 'semantic-ui-react'

import '../Styles/MenuNav.css'
import { MainButtonWrapper } from './MainButtonWrapper';

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (     
      <div >     
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
            <Segment basic>
              <MainButtonWrapper />
            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}