// Displays the addresses found in the blockchain API call
import React, { Component } from 'react';

// Import the Scam component
import Scam from './Scam';
import ThisAddress from './ThisAddress'

class Address extends Component {
  constructor(props) {
    super(props);
  }
  renderTable() {
    const tx = this.props.tx;
    return (
        tx.map(address => {
          return (
              <Scam
                key={tx.indexOf(address)}
                address={address}
              />
          )
        })
    )
  }
  render() {
    return (
      <tbody className="Address">
        <ThisAddress
          search={this.props.search}
        />
        {this.renderTable()}
      </tbody>
    )
  }
};

export default Address;
