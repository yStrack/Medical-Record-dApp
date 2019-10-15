import React from "react";
import "./UnlockMetamask.css";

export default function UnlockMetamask(props) {
  return (
    <div className="container">
      <div id="error" className="content">
        <h2>{props.text}</h2>
      </div>
    </div>
  );
}
