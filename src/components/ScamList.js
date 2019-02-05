// Import dependencies
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class ScamList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      scams: this.props.scams,
      show: false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  renderScams() {
    if (this.state.scams) {
      const scams = this.state.scams;
      return (
      scams.map(scam => {
        const key = scams.indexOf(scam);

        // Need to distinguish between the first scam on the list and the rest for styling purposes.
        if (key == 0) {
          return (
            <div className="scam-info" key={key}>
              <ul>
                <li><strong>Name:</strong> {scam.scam_name}</li>
                <li><strong>Description:</strong> {scam.scam_details}</li>
                <li><strong>URL:</strong> {scam.url}</li>
                <li><strong>Date Reported:</strong> {scam.reported_date}</li>
              </ul>
            </div>
          )
        }
        else {
          return (
            <div className="scam-info subsequent" key={key}>
              <ul>
                <li><strong>Name:</strong> {scam.scam_name}</li>
                <li><strong>Description:</strong> {scam.scam_details}</li>
                <li><strong>URL:</strong> {scam.url}</li>
                <li><strong>Date Reported:</strong> {scam.reported_date}</li>
              </ul>
            </div>
          )
        }
      })
    )
    }
    else {
      return (
        <p>Sorry, there appears to be an error.</p>
      )
    }
  }

  render() {
    console.log(this.state.scams);
    return (
      <div className="ScamList">
        <p onClick={this.handleShow} className="blacklisted">YES!</p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Associated Scams</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.address}</p>
            {this.renderScams()}
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ScamList;
