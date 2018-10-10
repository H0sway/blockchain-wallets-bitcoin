// Displays whether or not an address is connected to a scam.
import React, { Component } from 'react';

class Scam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataLoaded: false,
      isScam: false
    }
  }
  showScam() {
    if (this.state.dataLoaded) {
      if (this.state.isScam) {
        return (
          <p>YES!</p>
        )
      }
      else {
        return (
        <p>No</p>
        )
      }
    }
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      )
    }
    else {
      return (
        <button>CHECK</button>
      )
    }
  }
  render() {
    return (
      <tr>
        <th>{this.props.address}</th>
        <th className="scam">
          {this.showScam()}
        </th>
      </tr>
    )
  }
};

export default Scam;
