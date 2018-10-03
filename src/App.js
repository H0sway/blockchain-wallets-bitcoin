// Import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Search} />

        </div>
      </Router>
    )
  }
};

export default App;
