// Displays whether or not an address is connected to a scam.
import React, { Component } from 'react';
import axios from 'axios';

class Scam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataLoaded: false,
      isScam: false
    }
    this.searchBlacklist = this.searchBlacklist.bind(this);
  }
  searchBlacklist() {
    const address = this.props.address;
    this.setState({
      loading: true
    })
    console.log('Searching' + address);
    axios({
      method: 'POST',
      url: `/api/scam/`,
      data: {
        address: address
      }
    })
    .then(data => {
      console.log(data);
      if (data.data.scams) {
        this.setState({
          loading: false,
          dataLoaded: true,
          isScame: true
        })
      }
      else {
        this.setState({
          loading: false,
          dataLoaded: true
        })
      }
    })
    .catch(err => {
      console.log(err);
      this.setState({
        loading: false
      })
    })
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
      this.searchBlacklist();
      return (
        <p>Loading...</p>
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
