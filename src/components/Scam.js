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
    axios({
      method: 'GET',
      url: ``,
      withCredentials: true,
      headers: {
	       'Access-Control-Allow-Origin': '*',
	    },
    })
    .then(data => {
      console.log(data);
      this.setState({
        loading: false,
        dataLoaded: true
      })
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
      return (
        <button onClick={this.searchBlacklist}>CHECK</button>
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
