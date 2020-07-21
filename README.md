# Bitcoin Wallet Transaction Checker
### Check to see if a bitcoin wallet has had any interactions with "blacklisted" bitcoin wallets.

## Introduction and Usage
The purpose of this web application is to allow users a quick and easy way to see if a specific bitcoin wallet has had any interactions with "blacklisted" wallets. Users can input a bitcoin wallet and the app will find all transactions that wallet has made and cross-reference them with a list of "blacklisted" wallets. If any of the wallet addresses match then the user will be notified and shown which wallet(s) matched.

You can find the deployed app here: https://ancient-beach-14052.herokuapp.com/

## Build
This app has been built with React on the front-end and an Express server. Webpack was used as a bundler for React and SASS.

Data was pulled from two third-party APIs. Address transaction history was taken from https://btc.com/. The wallet blacklist used is from https://bitcoinwhoswho.com/.

## Installing and Running
1. Make sure you have Node and a package manager installed (I used npm).
2. Clone this repository and cd into it from the terminal.
3. Install dependencies (ex. `npm install`).
4. Run the start script to start the server (ex. `npm start`).
5. Build the frontend with the dev-build script (ex. `npm run dev-build`).

If you want to make changes to the server while it's running then instead of using the start script use the dev script (ex `npm run dev`).
