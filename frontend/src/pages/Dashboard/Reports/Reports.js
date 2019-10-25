import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Header from "../../../components/Header/Header";
import details from "../../../services/contracts/HospitalRecord";
import SideBar from "react-sidebar";
import menu from "../../../assets/menu.svg";
import api from "../../../services/api";

import "./Reports.css";

export default function Reports(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  let web3 = window.web3;
  web3 = new Web3(web3.currentProvider);
  const contract = new web3.eth.Contract(details.ABI, details.address);

  useEffect(() => {
    async function loadPatientData() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      const value = await contract.methods.getReports(response.data.cpf).call();
      let d;
      let day, month, year;
      for (var i = 0; i < value.length; i++) {
        d = value[i][9];
        d = new Date(d * 1000);
        day = d.getDate();
        month = d.getMonth() + 1;
        year = d.getFullYear();
        d = String(month + "/" + day + "/" + year);
        value[i][9] = d;
      }
      setData(value);
      console.log(value);
    }
    loadPatientData();
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
        // docked={open}
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
        {data.map(report => (
          <div className="content">
            <h2 className="report-date">Report from {report[9]}</h2>
            {Object.keys(Object.assign({}, report.slice(0))).map(key => (
              <>
                {key == 0 && (
                  <>
                    <p className="report-info">
                      <strong>Hospital:</strong> {report[key][0]}
                    </p>
                    <p className="report-info">
                      <strong>CNPJ:</strong> {report[key][1]}
                    </p>
                    <p className="report-info">
                      <strong>Account:</strong>{" "}
                      {report[key][2].slice(0, 10) +
                        "..." +
                        report[key][2].slice(-4)}
                    </p>
                  </>
                )}
                {key == 1 && (
                  <>
                    <p className="report-info">
                      <strong>Doctor name:</strong> {report[key]}
                    </p>
                  </>
                )}
                {key == 2 && (
                  <>
                    <p className="report-info">
                      <strong>Description:</strong> {report[key]}
                    </p>
                  </>
                )}
                {key == 3 && (
                  <>
                    <p className="report-info">
                      <strong>Requested exams:</strong> {report[key]}
                    </p>
                  </>
                )}
                {key == 4 && (
                  <>
                    <p className="report-info">
                      <strong>Patient medication:</strong> {report[key]}
                    </p>
                  </>
                )}
                {key == 5 && (
                  <>
                    <p className="report-info">
                      <strong>Height:</strong> {report[key]} cm
                    </p>
                  </>
                )}
                {key == 6 && (
                  <>
                    <p className="report-info">
                      <strong>Weight:</strong> {report[key]} Kg
                    </p>
                  </>
                )}
                {key == 7 && (
                  <>
                    <p className="report-info">
                      <strong>Body temperature:</strong> {report[key]} °C
                    </p>
                  </>
                )}
                {key == 8 && (
                  <>
                    <p className="report-info">
                      <strong>Blood preassure:</strong> {report[key]}
                    </p>
                  </>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
