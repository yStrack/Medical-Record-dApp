import React from "react";
import "./Register.css";

export default function Register(props) {
  const type = props.type;
  return (
    <form className="patient-register">
      {type === 1 && (
        <>
          <p className="title">Patient full name:</p>
          <input
            type="text"
            className="form-input"
            name="name"
            placeholder="Full name"
            required=""
            autoFocus=""
            // onChange={this.handleChange}
            // value={this.state.email}
          />
          <p className="title">Email:</p>
          <input
            type="text"
            className="form-input"
            name="email"
            placeholder="Email"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <p className="title">CPF:</p>
          <input
            type="text"
            className="form-input"
            name="cpf"
            placeholder="CPF"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <p className="title">Age:</p>
          <input
            type="text"
            className="form-input"
            name="age"
            placeholder="Age"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <p className="title">Gender:</p>
          <div className="custom-select">
            <select>
              <option value="0">Select gender:</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
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
            // onChange={this.handleChange}
            // value={this.state.email}
          />
          <p className="title">Past treatments (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="treatments"
            placeholder="Treatments"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <p className="title">Medication history (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="medication"
            placeholder="Medication history"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
          <p className="title">Allergies (separated by comma):</p>
          <input
            type="text"
            className="form-input"
            name="allergies"
            placeholder="Allergies"
            required=""
            // onChange={this.handleChange}
            // value={this.state.password}
          />
        </>
      )}

      <input className="submit-button" type="submit" value="Register" />
    </form>
  );
}
