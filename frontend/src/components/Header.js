import React from "react";
import "./Header.css";

export default function Header(props) {
  const ref = props.param;
  const onButtonClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return (
    <header>
      <a className="Home" href="/">
        Secure medical records
      </a>
      <nav>
        <ul className="nav_links">
          <li>
            <a className="About" href="#about" onClick={onButtonClick}>
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
