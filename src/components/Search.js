// Import react, bootstrap components
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      walletAddress: "",
    }
  }
  render() {
    return (
      <div className="Search">
        <form>
          <FormGroup>
            <ControlLabel>Wallet Address</ControlLabel>
            <FormControl
              type="text"
              value={this.state.walletAddress}
            />
          </FormGroup>
        </form>
      </div>
    )
  }
};

export default Search;
