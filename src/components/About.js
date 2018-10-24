// Import react and bootstrap components
import React, { Component } from 'react';
import { Button, ButtonToolbar, Tooltip, OverlayTrigger } from 'react-bootstrap';

class About extends Component {
  constructor() {
    super();
  }
  renderButtons() {
    const btc = (
      <Tooltip id="tooltip">
        Transaction API Documentation
      </Tooltip>
    );
    const blacklist = (
      <Tooltip id="tooltip">
        Blacklist API Documentation
      </Tooltip>
    );
    const github = (
      <Tooltip id="tooltip">
        Github Repository
      </Tooltip>
    );
    const site = (
      <Tooltip id="tooltip">
        Check out my other projects!
      </Tooltip>
    )
    return (
      <ButtonToolbar>
        <OverlayTrigger placement="top" overlay={btc}>
          <Button bsStyle="default" href="https://btc.com/api-doc#Transaction" target="_blank" rel="noopener noreferrer">
            BTC.com API
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={blacklist}>
          <Button bsStyle="default" href="https://bitcoinwhoswho.com/api" target="_blank" rel="noopener noreferrer">
            BitcoinWhosWho API
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={github}>
          <Button bsStyle="default" href="https://github.com/H0sway/blockchain-wallets-bitcoin" target="_blank" rel="noopener noreferrer">
            Github
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={site}>
          <Button bsStyle="default" href="http://www.joshuakrussell.com/" target="_blank" rel="noopener noreferrer">
            Personal Site
          </Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <div className="about-us">
          <p>
            This site was created with the purpose of checking to see if a bitcoin wallet has made any transactions with "blacklisted" wallets. To use this site enter a bitcoin wallet address into the search form and hit enter. A table will appear with a list of addresses that have made transactions with that specific wallet. The site then checks a blacklist of wallets for scams associated with each address. If found, a red <strong className="yes">YES!</strong> will appear in the "Scam?" column.
          </p>

          <br />

          <p>
            Using this site will not help you avoid all scams related to bitcoin transactions. Always exercise caution and use common sense when transferring funds to an unknown address. Even no scams are associated with an address that doesn't mean it's trustworthy.
          </p>

          <br />

          <p>
            We don't control what wallets have scams associated with them. Instead, we use BitcoinWhosWho's "Scam API" to find scams associated with each wallet address. If you believe an address has been wrongly marked as being associated with a scam please contact them. Conversely, if you come across a scam or are scammed by someone using an address that doesn't return scams here report it to their site so it may get included in the future.
          </p>
          <h3>Links To More Information</h3>
          {this.renderButtons()}
        </div>
      </div>
    )
  }
};

export default About;
