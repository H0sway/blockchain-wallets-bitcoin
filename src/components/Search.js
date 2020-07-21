// Import react, axios, bootstrap components
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios';

// Import the addresses component
import Addresses from './Addresses';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      walletAddress: "",
      search: "",
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
  addToList(list, address) {
    let txList = [];
    list.map(block => {
      const inputs = block.inputs;
      const outputs = block.outputs;
      for (let i = 0; i < 0; i++) {
        const address = inputs[i].prev_addresses[0];
        const length = address.length;
        if (length < 36 && length > 25) {
          if (txList.includes(address) === false) {
            txList.push(address);
          }
        }
      }
      for (let d = 0; d < outputs.length; d++) {
        const address = outputs[d].addresses[0];
        const length = address.length;
        if (length < 36 && length > 25) {
          if (txList.includes(address) === false) {
            txList.push(address);
          }
        }
      }
    })
    this.setState({
      dataLoaded: true,
      search: address,
      transactions: txList
    })
  }
  searchBlockchain(e) {
    e.preventDefault();
    this.setState({
      dataLoaded: false
    })
    const length = this.state.walletAddress.length;
    if (length < 36 && length > 25) {
      const address = this.state.walletAddress;
      axios({
        method: 'POST',
        url: '/api/tx',
        data: {
          address: address
        }
      })
      .then(data => {
        if (data.data.data) {
          const txList = data.data.data;
          this.addToList(txList, address);
        }
        else {
          alert("We couldn't find that address");
        }
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

        <div className="instructions">
          <h3>Instructions</h3>
          <p>
            Input the bitcoin address you wish to search into the form below and click search. Example: 17N2CNSDVGQt2bLEzPvh7j419a8eQdvRVx
          </p>
          <p>
            I am limited to 100 calls to the BitcoinWhosWho API per day, if the scam column loads indefinitely that limit has likely been reached.
          </p>
        </div>

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
        {this.state.dataLoaded ? <Addresses search={this.state.search} tx={this.state.transactions} /> : ''}
      </div>
    )
  }
};

export default Search;
