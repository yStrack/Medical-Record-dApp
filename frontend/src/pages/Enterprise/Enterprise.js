import React, { useState, useEffect } from "react";
import Web3 from "web3";
import UnlockMetamask from "../../components/UnlockMetamask/UnlockMetamask";
import Header from "../../components/Header/Header";
import Register from "../../components/Register/Register";
import Box from "../../components/Box/Box";
import details from "../../services/contracts/HospitalRecord";

import "./Enterprise.css";

export default function Enterprise() {
  let web3 = window.web3;
  const [isConnected, setConnect] = useState(false);
  const [account, setAcc] = useState("");
  const [registeredHospitals, setRegister] = useState([]);
  web3 = new Web3(web3.currentProvider);

  useEffect(() => {
    async function metamaskConnect() {
      if (web3.currentProvider) {
        web3.currentProvider.autoRefreshOnNetworkChange = false;
        web3 = new Web3(web3.currentProvider);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          web3.currentProvider.enable().then(
            web3.eth.getCoinbase(function(a, coinbase) {
              setAcc(coinbase);
              setConnect(true);
            })
          );
          const contract = new web3.eth.Contract(details.ABI, details.address);
          contract.methods
            .listHospitals()
            .call()
            .then(response => {
              response = response.map(key => {
                return key.toLowerCase();
              });
              setRegister(response);
            });
        } catch (error) {
          console.log(error);
          setConnect(false);
        }
      }
    }
    metamaskConnect();
  }, []);

  if (!isConnected) {
    return (
      <>
        <UnlockMetamask text="Unlock Metamask to access site!" />
      </>
    );
  }

  if (isConnected) {
    return (
      <>
        {!registeredHospitals.includes(account) ? (
          <>
            <UnlockMetamask text="Non registered hospital, access denied." />
          </>
        ) : (
          <div className="enterprise">
            <Header loged={false} enterprise={true} acc={account}></Header>
            <div className="main">
              <Box
                title="Register new patient"
                children={<Register type={1} text="Register" />}
              />
              <Box
                title="Register patient record"
                children={<Register type={2} acc={account} text="Register" />}
              />
              <Box
                title="New patient report"
                children={<Register type={3} text="Register" />}
              />
              <Box
                title="View patient report"
                children={<Register type={4} text="View" />}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
