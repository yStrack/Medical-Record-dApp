import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Web3 from "web3";
import details from "../../services/contracts/HospitalRecord";
import Header from "../../components/Header/Header";
import SideBar from "react-sidebar";
import menu from "../../assets/menu.svg";

import "./Dashboard.css";

export default function Dashboard() {
  // States
  const [infos, setInfo] = useState({});
  const [blockData, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [account, setAcc] = useState("");
  const [date, setDate] = useState("");

  // Connect to metamask
  let web3 = window.web3;
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Retrieve data from backend and blockchain
  useEffect(() => {
    async function loadPatientData() {
      const contract = new web3.eth.Contract(details.ABI, details.address);
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setInfo(response.data);
      const value = await contract.methods.getRecord(response.data.cpf).call();
      setData(value);
      let d = value[4];
      d = new Date(d * 1000);
      setDate(d);
      web3.eth.getCoinbase(function(a, coinbase) {
        setAcc(coinbase);
      });
    }
    loadPatientData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <img
        src={menu}
        alt="menu"
        className="menu-button"
        onClick={() => setOpen(!open)}
      />
      <SideBar
        children=""
        sidebar={
          <div className="items">
            <a href="/dashboard" className="sideItems">
              Home
            </a>
            <a href="/dashboard/auth" className="sideItems">
              Authorize Hospital
            </a>
            <a href="/dashboard/reports" className="sideItems">
              Medical Reports
            </a>
          </div>
        }
        open={open}
        onSetOpen={setOpen}
        docked={open}
        styles={{
          root: { top: 72 },
          sidebar: {
            width: 250,
            display: "flex",
            flexDirection: "column",
            ZIndex: -1,
            backgroundColor: "#212529",
            fontSize: 16
          }
        }}
      ></SideBar>
      <Header name={infos.name} loged={true}></Header>
      <div className="container">
        <div className="content">
          <div className="pf-info">
            <h1 className="db-info">Profile Information</h1>
            <h3>Name: {infos.name}</h3>
            <h3>CPF: {infos.cpf}</h3>
            <h3>Age: {infos.age}</h3>
            <h3>
              Gender:{" "}
              {String(infos.gender)[0].toUpperCase() +
                String(infos.gender).slice(1)}
            </h3>
            <h3>Acc: {account.slice(0, 10) + "..." + account.slice(-4)}</h3>
          </div>
        </div>
        <div className="content">
          <div className="pf-info">
            <h1 className="bc-info">Patient Record</h1>
            {Object.keys(Object.assign({}, blockData.slice(1))).map(key => (
              <>
                {// eslint-disable-next-line
                key == 0 && (
                  <h3>
                    Treatments: {Object.assign({}, blockData.slice(1))[key]}
                  </h3>
                )}
                {// eslint-disable-next-line
                key == 1 && (
                  <h3>
                    Medication History:{" "}
                    {Object.assign({}, blockData.slice(1))[key]}
                  </h3>
                )}
                {// eslint-disable-next-line
                key == 2 && (
                  <h3>
                    Allergies: {Object.assign({}, blockData.slice(1))[key]}
                  </h3>
                )}
                {// eslint-disable-next-line
                key == 3 && <h3>Registry date:{" " + String(date)}</h3>}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
