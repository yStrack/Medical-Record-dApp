import React from "react";

// Notification to install metamask
export default function InstallMetamask() {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image download-metamask">
          <a
            href="https://metamask.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="https://metamask.io/img/metamask.png" alt=""></img>
          </a>
        </p>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
