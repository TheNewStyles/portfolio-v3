import React, { Component } from 'react';
import '../Styles/App.css';
import MenuNav from './MenuNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome-section">
          <MenuNav />
        </div>
      </div>
    );
  }
}

export default App;
