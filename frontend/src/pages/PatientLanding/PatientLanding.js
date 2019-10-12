import React, { createRef } from "react";
import Header from "../../components/Header";
import isAuth from "../../services/auth";
import "./PatientLanding.css";

export default function PatientLanding(props) {
  const ref = createRef();

  const handleOnClick = () => {
    if (!isAuth()) {
      props.history.push(`/login`);
    } else if (isAuth()) {
      props.history.push("/dashboard");
    }
  };

  return (
    <div className="home">
      <div className="bg-image">
        <Header param={ref} />
        <div className="top-message">
          <h1>Your medical records secured on the blockchain</h1>

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
      <div className="about" ref={ref}>
        <div className="about-title">
          <h1>About</h1>
          <div className="about-content">
            <p>The website uses the power of the blockchain to store your</p>
            <p> healthcare information in a completely decentralized way,</p>
            <p> with only you and authorized hospital having access to them.</p>
          </div>
        </div>
      </div>
      <div className="end" />
    </div>
  );
}
