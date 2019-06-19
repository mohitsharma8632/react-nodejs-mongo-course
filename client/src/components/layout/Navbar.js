import React, { Component } from "react";
import { link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <link className="navbar-brand" href="landing.html">
            DevConnector
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="profiles.html">
                  {" "}
                  Developers
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <link className="nav-link" href="register.html">
                  Sign Up
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="login">
                  Login
                </link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
