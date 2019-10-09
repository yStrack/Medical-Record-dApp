import React, { Component } from "react";
import Web3 from "web3";
class Enterprise extends Component {
  constructor() {
    super();

    // Network connection
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;

      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        window.ethereum.enable().then(
          window.web3.eth.getCoinbase(function(a, coinbase) {
            window.coinbase = coinbase;
            console.log("window.coinbase:", window.coinbase);
          })
        );
        // Acccounts now exposed
      } catch (error) {
        // User denied account access...
      }
    } // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      // Acccounts always exposed
      window.web3.eth.getAccounts(acc => {
        console.log(acc);
      });
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  render() {
    return (
      <div className="home">
        <h1>Hello Enterprise</h1>
      </div>
    );
  }
}

export default Enterprise;
