import React, { Component } from 'react';
import '../Styles/App.css';
import NavMenu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome-section">
          <NavMenu />
        </div>
      </div>
    );
  }
}

export default App;
