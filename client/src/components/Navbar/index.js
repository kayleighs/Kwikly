import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
  return (

    <header className="">
      <nav className="navbar navbar-expand-md h-font navbar-light ks-nav" id="hover-nav">
        <li className="navbar-nav mr-auto">
          <span className="mr-auto">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Google Books
            </Link>
          </span>
          </li>
        <li className="navbar-nav nav-nav-side ">
          <span className="ml-auto">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </span>
        </li>
        <li className="navbar-nav nav-side ">
          <span className="ml-auto">
              &nbsp; 
          </span>
        </li>
        <li className="navbar-nav nav-nav-side">
          <span className="ml-auto">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </span>
        </li>
      </nav>
    </header>
  );
}

export default Navbar