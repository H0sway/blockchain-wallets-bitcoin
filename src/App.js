// Import dependencies
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

// Import components
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Grid>
            <Header />
            <Search />
          </Grid>
        </div>
    )
  }
};

export default App;
