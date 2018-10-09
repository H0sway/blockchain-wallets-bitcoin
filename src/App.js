// Import dependencies
import React, { Component } from 'react';

// Import components
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Search />
        </div>
    )
  }
};

export default App;
