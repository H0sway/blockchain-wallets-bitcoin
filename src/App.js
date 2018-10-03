// Import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Box } from 'bloomer';

// Import components
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Container>
            
          </Container>

        </div>
      </Router>
    )
  }
};

export default App;
