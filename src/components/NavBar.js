import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {NavHashLink as Link} from 'react-router-hash-link'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            GoDigital
            <i className="fas fa-code"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/#pricing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/#Service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
