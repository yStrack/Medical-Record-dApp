import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Web3 from "web3";
import details from "../../services/contracts/HospitalRecord";
import "./Dashboard.css";

export default function Dashboard() {
  const [infos, setInfo] = useState({});
  const [blockData, setData] = useState([]);

  let web3 = window.web3;
  let web3js = null;
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  useEffect(() => {
    async function loadPatientData() {
      const contract = new web3js.eth.Contract(details.ABI, details.address);
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setInfo(response.data);
      const value = await contract.methods.getRecord(response.data.cpf).call();
      setData(value);
    }

    loadPatientData();
  }, []);

  return (
    <>
      <h1 className="db-info">Backend DB infos</h1>
      <h2>{infos.name}</h2>
      <h2>{infos.cpf}</h2>
      <h2>{infos.gender}</h2>
      <h2>{infos.age}</h2>
      <h1 className="bc-info">Blockchain Data</h1>
      {blockData.map(records => (
        <>
          <h2>{records}</h2>
          {/* <h2>{records.hospitalName}</h2>
          <h2>{records.hospitalAdd}</h2>
          <h2>{records.medicines}</h2> */}
        </>
      ))}
    </>
  );
}
