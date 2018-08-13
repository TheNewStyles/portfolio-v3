import React, { Component } from 'react';

import MenuNav from './MenuNav';
import '../Styles/App.css';

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
