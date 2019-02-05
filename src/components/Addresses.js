// Functional component, right now only displays the wallet addresses in the transactions array.
// Import react
import React from 'react';
import { Col, Row, Table }from 'react-bootstrap';

// Import the single address component
import Address from './Address';

const Addresses = (props) => {
  return (
    <div className="Addresses">
      <Row>
        <Col className="details" xs={12} md={4}>
          <h4>Details</h4>
          <article>
            On the right you'll see a table with a list of addresses has made transactions with according to <a href="https://btc.com/" target="_blank" rel="noopener noreferrer">BTC.com</a>'s API. We then check <a href="https://bitcoinwhoswho.com/" target="_blank" rel="noopener noreferrer">BitcoinWhosWho</a>'s blacklist of wallets. If there's a scam associated with that wallet, you'll see a red <strong className="yes">YES!</strong> in the "Scam?" column. Click it for more details.
          </article>
        </Col>
        <Col className="address-table" xs={12} md={8}>
          <h4>List of Addresses</h4>
          <Table bordered condensed>
            <thead>
              <tr>
                <th>Address</th>
                <th className="scam">Scam?</th>
              </tr>
            </thead>
            <Address
              search={props.search}
              tx={props.tx}
            />
          </Table>
        </Col>
      </Row>
    </div>
  )
};

export default Addresses;
