import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const handleBlue = ()=>{
    document.body.style.backgroundColor = "#0a0a63"
  }
  const handleRed = ()=>{
    document.body.style.backgroundColor = "#c12929"
  }
  const handleGrey = ()=>{
    document.body.style.backgroundColor = "Grey"
  }
  const handleGreen = ()=>{
    document.body.style.backgroundColor = "#125812"
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dictionary">
                Dictionary
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textparser">
                TextParser
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input "
              onClick={props.enableMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label  "
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
      <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Custom Theme
    </a>

    <ul class="dropdown-menu" style={{backgroundColor: props.mode==="dark"?"#042743":"white"}}>
      <li>
        <button type="button" class="btn btn-primary" onClick={handleBlue}>Blue </button>
      </li>
      <li>
        <button type="button" class="btn btn-danger" onClick={handleRed} >Red </button>
      </li>
      <li>
        <button type="button" class="btn btn-secondary" onClick={handleGrey}>
          Grey</button>
      </li>
      <li>
        <button type="button" class="btn btn-success" onClick={handleGreen}>Green</button>
      </li>
    </ul>
  </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set tile here",
  abouttext: "about box",
  contact: "contact details here",
};
