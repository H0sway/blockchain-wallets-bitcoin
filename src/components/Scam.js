// Displays whether or not an address is connected to a scam.
import React, { Component } from 'react';
import axios from 'axios';

class Scam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataLoaded: false,
      isScam: false,
      checked: false,
      scams: []
    }
    this.checkScam = this.checkScam.bind(this);
  }
  componentDidMount() {
    const address = this.props.address;
    this.setState({
      loading: true
    })
    axios({
      method: 'POST',
      url: `/api/scam/`,
      data: {
        address: address
      }
    })
    .then(data => {
      console.log(data);
      this.setState({
        loading: false,
        dataLoaded: true,
        scams: data.data.data
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        loading: false
      })
    })
  }
  checkScam() {
    if (this.state.scams.length) {
      this.setState({
        checked: true,
        isScam: true
      })
    }
    else {
      this.setState({
        checked: true
      })
    }
  }
  showScam() {
    if (this.state.dataLoaded) {
      if (this.state.isScam && this.state.checked) {
        return (
          <p className="blacklisted">YES!</p>
        )
      }
      if (this.state.checked) {
        return (
          <p>No</p>
        )
      }
      else {
        return (
        <button onClick={this.checkScam}>CHECK</button>
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
