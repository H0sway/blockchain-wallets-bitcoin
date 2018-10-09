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
  addToList(list) {
    let txList = [];
    list.map(block => {
      const inputs = block.inputs;
      const outputs = block.outputs;
      for (let i = 0; i < 0; i++) {
        const address = inputs[i].prev_addresses[0];
        if (txList.includes(address) === false) {
          txList.push(address);
        }
      }
      for (let d = 0; d < outputs.length; d++) {
        const address = outputs[d].addresses[0];
        if (txList.includes(address) === false) {
          txList.push(address);
        }
      }
    })
    this.setState({
      dataLoaded: true,
      transactions: txList
    })
  }
  searchBlockchain(e) {
    e.preventDefault()
    const length = this.state.walletAddress.length;
    if (length < 36 && length > 25) {
      const address = this.state.walletAddress;
      axios({
        method: 'GET',
        url: `https://chain.api.btc.com/v3/address/${address}/tx`
      })
      .then(data => {
        const txList = data.data.data.list;
        this.addToList(txList);
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
    console.log(this.state.transactions);
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
        {this.state.dataLoaded ? <Addresses tx={this.state.transactions}/> : ''}
      </div>
    )
  }
};

export default Search;
