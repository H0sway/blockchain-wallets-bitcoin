// Import react, axios, bootstrap components
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios';



class Search extends Component {
  constructor() {
    super();
    this.state = {
      walletAddress: "",
      dataLoading: false,
      dataLoaded: false,
      transactions: [],
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchBlockchain = this.searchBlockchain.bind(this);
  }
  validateAddress() {
    const length = this.state.walletAddress.length;
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
  searchBlockchain(e) {
    e.preventDefault()
    const length = this.state.walletAddress.length;
    if (length < 36 && length > 25) {
      const address = this.state.walletAddress;
      this.setState({
        dataLoading: true,
      })
      axios({
        method: 'POST',
        address: address
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
    }
    else {
      alert("Invalid bitcoin address");
    }
  }
  render() {
    return (
      <div className="Search">
        <form onSubmit={this.searchBlockchain}>
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
