import React, { useState } from "react";
import Web3 from "web3";
import "./Register.css";
import details from "../../services/contracts/HospitalRecord";
import api from "../../services/api";
import Select from "react-select";

export default function Register(props) {
  const type = props.type;
  const acc = props.acc;
  let web3 = window.web3;
  web3 = new Web3(web3.currentProvider);
  const contract = new web3.eth.Contract(details.ABI, details.address);

  const [patientInfo, setInfo] = useState({
    email: "",
    name: "",
    age: "",
    cpf: "",
    gender: ""
  });
  const [record, setRecord] = useState({
    id: "",
    treatments: "",
    medicationHistory: "",
    allergies: "",
    date: ""
  });
  const [fail, setFail] = useState(false);
  const [loaded, setLoad] = useState(false);

  var options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
  ];

  const register = async e => {
    e.preventDefault();
    if (type === 1) {
      // Send data to backend
      api
        .post("/register", {
          email: patientInfo.email,
          name: patientInfo.name,
          age: patientInfo.age,
          cpf: patientInfo.cpf,
          gender: patientInfo.gender
        })
        .then(response => {
          console.log({ status: "ok", message: response.data });
        })
        .catch(err => {
          setFail(true);
        });

      setInfo({
        email: "",
        name: "",
        age: "",
        cpf: "",
        gender: ""
      });
    } else if (type === 2) {
      // Send data to smart contract
      let date = new Date().getTime();
      let registerDate = Math.floor(date / 1000);
      try {
        contract.methods
          .setRecord(
            record.id,
            record.treatments,
            record.medicationHistory,
            record.allergies,
            registerDate
          )
          .send({ from: acc });
      } catch (err) {
        console.log(err);
      }
      console.log("ok");

      setRecord({
        id: "",
        treatments: "",
        medicationHistory: "",
        allergies: ""
      });
    } else if (type === 4) {
      contract.methods
        .getRecord(record.id)
        .call()
        .then(res => {
          setRecord({
            id: res.id,
            treatments: res.treatments,
            medicationHistory: res.medicationHistory,
            allergies: res.allergies,
            date: String(new Date(res.date * 1000))
          });
          setLoad(true);
        });
    }
  };

  const handleChange = e => {
    e.persist();
    if (type === 1) {
      setInfo(prevState => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    } else if (type === 2 || type === 4) {
      setRecord(prevState => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    }
  };

  const selectChange = value => {
    setInfo(prevState => {
      return { ...prevState, gender: value.value };
    });
  };

  return (
    <form className="patient-register" onSubmit={register}>
      {type === 1 && (
        <>
          <p className="title">Patient full name:</p>
          <input
            className="form-input"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            value={patientInfo.name}
          />
          <p className="title">Email:</p>
          <input
            type="text"
            className="form-input"
            name="email"
            placeholder="Email"
            required=""
            onChange={handleChange}
            value={patientInfo.email}
          />
          <p className="title">CPF:</p>
          <input
            type="text"
            className="form-input"
            name="cpf"
            placeholder="CPF"
            required=""
            onChange={handleChange}
            value={patientInfo.cpf}
          />
          <p className="title">Age:</p>
          <input
            type="text"
            className="form-input"
            name="age"
            placeholder="Age"
            required=""
            onChange={handleChange}
            value={patientInfo.age}
          />
          <p className="title">Gender:</p>
          <div className="custom-select">
            <Select
              name="gender"
              options={options}
              placeholder="Select a gender"
              searchable={false}
              onChange={selectChange.bind(this)}
            />
          </div>
        </>
      )}

      {type === 2 && (
        <>
          <p className="title">Patient ID:</p>
          <input
            type="text"
            className="form-input"
            name="id"
            placeholder="CPF"
            required=""
            autoFocus=""
            onChange={handleChange}
            value={record.id}
          />
          <p className="title">Past treatments (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="treatments"
            placeholder="Treatments"
            required=""
            onChange={handleChange}
            value={record.treatments}
          />
          <p className="title">Medication history (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="medicationHistory"
            placeholder="Medication history"
            required=""
            onChange={handleChange}
            value={record.medicationHistory}
          />
          <p className="title">Allergies (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="allergies"
            placeholder="Allergies"
            required=""
            onChange={handleChange}
            value={record.allergies}
          />
        </>
      )}
      {type === 4 && (
        <>
          <p className="title">Patient ID:</p>
          <input
            type="text"
            className="form-input"
            name="id"
            placeholder="CPF"
            required=""
            autoFocus=""
            onChange={handleChange}
            value={record.id}
          />
        </>
      )}

      <input className="submit-button" type="submit" value={props.text} />
      {type === 4 && loaded && (
        <div className="infos">
          <h3 className="show-info">Treatments: {record.treatments}</h3>
          <h3 className="show-info">
            Medication History: {record.medicationHistory}
          </h3>
          <h3 className="show-info">Allergies: {record.medicationHistory}</h3>
          <h3 className="show-info">Register date: {record.date}</h3>
        </div>
      )}
    </form>
  );
}
