// Functional component, right now only displays the wallet addresses in the transactions array.
// Import react
import React from 'react';
import { Table }from 'react-bootstrap';

const Addresses = (props) => {
  return (
    <div className="Addresses">
      <h4>List of Addresses </h4>
      <Table bordered condensed responsive>
        <tbody>
          {props.tx.map(address => {
            return (
              <tr key={props.tx.indexOf(address)}>
                <td>{address}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
};

export default Addresses;
