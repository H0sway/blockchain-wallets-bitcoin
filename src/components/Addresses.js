// Functional component, right now only displays the wallet addresses in the transactions array.
// Import react
import React from 'react';
import { Table }from 'react-bootstrap';

// Import the single address component
import Address from './Address';

const Addresses = (props) => {
  return (
    <div className="Addresses">
      <h4>List of Addresses </h4>
      <Table bordered condensed responsive>
        <thead>
          <tr>
            <th>Address</th>
            <th className="scam">Scam?</th>
          </tr>
        </thead>
        <Address
          tx={props.tx}
        />
      </Table>
    </div>
  )
};

export default Addresses;
