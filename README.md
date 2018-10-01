# Bitcoin Wallet Transaction Checker
### Check to see if a bitcoin wallet has had any interactions with "blacklisted" bitcoin wallets.

## Introduction
The purpose of this web application is to allow users a quick and easy way to see if a specific bitcoin wallet has had any interactions with "blacklisted" wallets. Users can input a bitcoin wallet and the app will find all transactions that wallet has made and cross-reference them with a list of "blacklisted" wallets. If any of the wallet addresses match then the user will be notified and shown which wallet(s) matched.

## Build
This app is currently a front-end React app. While still in development, the finished product will pull from 3rd party APIs for
data on a wallet's transactions and a list of blacklisted wallets. Future goals include adding the blockchain to a server and connecting it to the front-end as well as potentially adding a crowdsourced list of blacklisted bitcoin addresses. When the build for this app changes, so will this section.

## MVP

* Front-end React application where users can check to see if a bitcoin wallet has had transactions with any blacklisted addresses
* App makes calls to 3rd party APIs for transaction data on the wallet the user inputted and for the blacklisted wallets.
* User will be able to find out quickly what blacklisted addresses that wallet has interacted with.

## Post-MVP

* Full-stack application with the blockchain on the server, eliminating a need for a 3rd party API call to get transaction data for a wallet.
* Crowdsourced blacklist for wallets. Allows notes/reviews so users can see why these wallets have been included in the blacklist.
