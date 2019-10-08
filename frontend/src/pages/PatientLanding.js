import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import "./PatientLanding.css";

export default function PatientLanding(props) {
  const handleOnClick = () => {
    props.history.push(`/login`);
  };

  return (
    <div className="home">
      <div className="bg-image">
        <Header />
        <div className="top-message">
          <h1>Your medical records secure on the blockchain</h1>

          <div className="botton-message">
            <h2>The new way to store data</h2>

            <div className="more">
              <button className="login" onClick={handleOnClick}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
