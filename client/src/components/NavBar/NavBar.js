import React from 'react';
import "./navbar.css";

function NavBar() {
  return (
    <div class="navbar">
  <a id="logo" href="#home">Kwikly</a>
  <div id="search">
  <input type="text" id="search-bar" placeholder="Search for Jobs..."></input>
  </div>
  <div class="right-nav">
  <a href="#newsfeed">Signup</a>
  <a href="#Login">Login</a>
  </div>
  </div> 

  );
}

export default NavBar;
