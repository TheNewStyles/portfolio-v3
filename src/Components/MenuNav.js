import React, { Component } from 'react'
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import '../Styles/MenuNav.css'

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
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='star' />
              Projects
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Contact
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            {/* <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment> */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}