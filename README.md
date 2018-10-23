# Bitcoin Wallet Transaction Checker
### Check to see if a bitcoin wallet has had any interactions with "blacklisted" bitcoin wallets.

## Introduction
The purpose of this web application is to allow users a quick and easy way to see if a specific bitcoin wallet has had any interactions with "blacklisted" wallets. Users can input a bitcoin wallet and the app will find all transactions that wallet has made and cross-reference them with a list of "blacklisted" wallets. If any of the wallet addresses match then the user will be notified and shown which wallet(s) matched.

You can find the deployed app here: https://ancient-beach-14052.herokuapp.com/

## Build
This app has been built using NodeJS with ReactJS on the front-end and an ExpressJS server. Webpack was used as a bundler.

Data was pulled from two third-party APIs. Address transaction history was taken from https://btc.com/. The wallet blacklist used is from https://bitcoinwhoswho.com/.

## Installing and Running
1. Make sure you have Node and a package manager installed (I used npm).
2. Clone this repository and cd into it from the terminal.
3. Install dependencies (ex. `npm install`).
4. Run the start script to start the server (ex. `npm start`).
5. Build the frontend with the dev script (ex. `npm run dev`).
6. For production, run the build script (ex. `npm run build`).

## MVP

* Front-end React application where users can check to see if a bitcoin wallet has had transactions with any blacklisted addresses
* App makes calls to 3rd party APIs for transaction data on the wallet the user inputted and for the blacklisted wallets.
* User will be able to find out quickly what blacklisted addresses that wallet has interacted with.

## Post-MVP

* Full-stack application with the blockchain on the server, eliminating a need for a 3rd party API call to get transaction data for a wallet.
* Crowdsourced blacklist for wallets. Allows notes/reviews so users can see why these wallets have been included in the blacklist.
