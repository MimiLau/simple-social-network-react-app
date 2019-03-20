import React, { Component } from 'react';
import logo from './logo.svg';

import Homepage from './container/Homepage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Homepage />
				<Footer />
      </div>
    );
  }
}

export default App;
