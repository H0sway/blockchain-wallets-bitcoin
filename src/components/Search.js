// Import react, bootstrap components
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      walletAddress: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }
  validateAddress() {
    const length = this.state.walletAddress.length;
    console.log(length);
    if (length < 36 && length > 25) return 'success';
    if (length > 35) return 'error';
    if (length < 26) return 'error';
    return null;
  }
  handleChange(e) {
    this.setState({
      walletAddress: e.target.value,
    })
  }
  render() {
    return (
      <div className="Search">
        <form>
          <FormGroup validationState={this.validateAddress()}>
            <ControlLabel>Wallet Address</ControlLabel>
            <FormControl
              type="text"
              value={this.state.walletAddress}
              onChange={this.handleChange}
            />
            <HelpBlock>Addresses should be between 26 and 35 characters long.</HelpBlock>
            <button>Search!</button>
          </FormGroup>
        </form>
      </div>
    )
  }
};

export default Search;
