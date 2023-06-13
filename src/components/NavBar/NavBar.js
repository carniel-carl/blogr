import React, { useState } from "react";
import "./NavBar.scss";

import logo from "./../../images/logo.svg";
import arrowlight from "./../../images/icon-arrow-light.svg";
import arrowDark from "./../../images/icon-arrow-dark.svg";
import menuBtn from "./../../images/icon-hamburger.svg";
import closeBtn from "./../../images/icon-close.svg";

const NavBar = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  const showBarHandler = () => {
    setshowSideBar(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    document.body.style.overflowY = "hidden";
  };

  const closeBarHandler = () => {
    setshowSideBar(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflowY = "unset";
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={showSideBar ? "show-sidebar sidebar" : "sidebar"}>
          <nav>
            <div className="nav_links">
              <ul>
                <li>
                  <p>Product</p>
                  <div className="arrow">
                    <img src={arrowlight} alt="arrow" className="light-arrow" />
                    <img src={arrowDark} alt="arrow" className="dark-arrow" />
                  </div>
                  <div className="dropdown-menu">
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
                </li>
                <li>
                  <p>Company</p>
                  <div className="arrow">
                    <img src={arrowlight} alt="arrow" className="light-arrow" />
                    <img src={arrowDark} alt="arrow" className="dark-arrow" />
                  </div>
                  <div className="dropdown-menu">
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
                </li>

                <li>
                  <p>Connect</p>
                  <div className="arrow">
                    <img src={arrowlight} alt="arrow" className="light-arrow" />
                    <img src={arrowDark} alt="arrow" className="dark-arrow" />
                  </div>
                  <div className="dropdown-menu">
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
                </li>
              </ul>
            </div>
            <div className="nav_cta">
              <ul>
                <li>
                  <a href="/" className="login">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/" className="btn1">
                    Sign Up
                  </a>
                  <a href="/" className="btn-mobile">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {showSideBar ? (
          <div className="menu-btn" onClick={closeBarHandler}>
            <img src={closeBtn} alt="close btn" />
          </div>
        ) : (
          <div className="menu-btn" onClick={showBarHandler}>
            <img src={menuBtn} alt="menu btn" />
          </div>
        )}
      </div>

      <div className="hero">
        <h1 className="heading">A modern publishing platform</h1>
        <p className="subheading">
          Grow your audience and build your online brand
        </p>
        <div className="btns">
          <a href="/" className="btn1-hero">
            Start for Free
          </a>
          <a href="/" className="btn2">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
