import React, { useState, useEffect } from "react";
import Select from "react-select";
import Web3 from "web3";
import Header from "../../../components/Header/Header";
import details from "../../../services/contracts/HospitalRecord";
import api from "../../../services/api";
import SideBar from "react-sidebar";
import menu from "../../../assets/menu.svg";

import "./Authorized.css";

export default function Authorized(props) {
  const [open, setOpen] = useState(true); // menu state
  const [registeredHospitals, setRegister] = useState([]); // address of the registered hospitals
  const [options, setOptions] = useState([]); // name of the registered hospitals
  let [authorized, setAuthorized] = useState([]); // list of hospitals authorized by patient
  const [nAuth, setNAuth] = useState([]);

  let web3 = window.web3;
  web3 = new Web3(web3.currentProvider);
  const contract = new web3.eth.Contract(details.ABI, details.address);

  useEffect(() => {
    async function loadInfo() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setAuthorized(response.data.authorizations);
      let hospitalsAdd = await contract.methods.listHospitals().call();
      hospitalsAdd = hospitalsAdd.map(key => {
        return key.toLowerCase();
      });
      let opt = [];
      let names = []; // name of the auth hospitals
      for (var i = 0; i < hospitalsAdd.length; i++) {
        const res = await contract.methods.getHospital(hospitalsAdd[i]).call();
        if (res[0] !== "Owner") {
          opt.push({ value: hospitalsAdd[i], label: res[0] });
        }
      }
      for (var i = 0; i < opt.length; i++) {
        if (response.data.authorizations.indexOf(opt[i].value) != -1) {
          names.push(opt[i].label);
        }
      }
      setNAuth(names);
      setOptions(opt);
      setRegister(hospitalsAdd);
    }
    loadInfo();
  }, []);

  const selectChange = async value => {
    const user_id = localStorage.getItem("user");
    let response;
    let names = [];
    if (authorized.indexOf(value.value) == -1) {
      response = await api.post(
        "/dashboard/updateAuth",
        { hospital: value.value },
        {
          headers: { user_id: user_id, "Content-Type": "application/json" }
        }
      );
    } else {
      response = await api.post(
        "/dashboard/removeAuth",
        { hospital: value.value },
        {
          headers: { user_id: user_id, "Content-Type": "application/json" }
        }
      );
    }
    setAuthorized(response.data);
    for (var i = 0; i < options.length; i++) {
      if (response.data.indexOf(options[i].value) != -1) {
        names.push(options[i].label);
      }
    }
    setNAuth(names);
  };

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
      <Header loged={true} />
      <div className="container">
        <div className="content">
          <p className="db-info">
            <strong>Authorize/Remove</strong> hospitals that can see your
            medical information.
          </p>
          <Select
            className="select-hosp"
            name="hospitals"
            // defaultValue={}
            options={options}
            // isMulti={true}
            placeholder="Hospitals"
            // searchable={false}
            onChange={selectChange}
            value={null}
          />
          <h3 className="hospitals">Authorized list:</h3>
          {nAuth.map(key => (
            <>
              <li className="hosp-names">{key}</li>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
