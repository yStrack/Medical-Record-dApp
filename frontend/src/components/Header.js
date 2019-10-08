import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <a className="Home" href="/">
        Secure medical records
      </a>
      <nav>
        <ul className="nav_links">
          <li>
            <a className="About" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
      <a className="Login" href="/login">
        <button>Log in</button>
      </a>
    </header>
  );
}
