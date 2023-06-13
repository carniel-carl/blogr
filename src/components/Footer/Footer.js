import React from "react";
import "./Footer.scss";

import logo from "./../../images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <p>Product</p>
        <ul>
          <li>
            <a href="/">Overview</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Integrations</a>
          </li>
        </ul>
      </div>

      <div className="links">
        <p>Company</p>

        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
      </div>

      <div className="links">
        <p>Connect</p>

        <ul>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Newsletter</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
