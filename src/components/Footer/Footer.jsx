import React from "react";

import "./style.scss";

export function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="author">
        By <span className="highlighted">Gab</span>
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/gabriela-knop-marques-b5075a53/"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          id="profile-link"
          href="https://github.com/knopgm/drum-machine"
          target="_blank"
          rel="noreferrer"
          className="contact-details"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
