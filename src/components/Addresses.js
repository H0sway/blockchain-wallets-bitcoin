// Functional component, right now only displays the wallet addresses in the transactions array.
// Import react
import React from 'react';
import { Well } from 'react-bootstrap';

const Addresses = (props) => {
  return (
    <div className="Addresses">
      <h4>List of addresses: </h4>
      {props.tx.map(address => {
        return (
          <Well key={props.tx.indexOf(address)}>{address}</Well>
        )
      })}
    </div>
  )
};

export default Addresses;
