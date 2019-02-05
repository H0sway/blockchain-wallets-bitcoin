// Displays whether or not the searched address is connected to a scam.
import React, { Component } from 'react';
import axios from 'axios';

import ScamList from './ScamList';

class ThisAddress extends Component {
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
    const address = this.props.search;
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
      if (data.data.data.length) {
        this.setState({
          loading: false,
          dataLoaded: true,
          isScam: true,
          scams: data.data.data
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
      if (this.state.isScam) {
        return (
          <ScamList
            scams={this.state.scams}
            address={this.props.search}
          />
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
        <p>Loading...</p>
      )
    }
  }
  render() {
    return (
      <tr className="this-address">
        <th>{this.props.search}</th>
        <th className="scam">
          {this.showScam()}
        </th>
      </tr>
    )
  }
};

export default ThisAddress;
