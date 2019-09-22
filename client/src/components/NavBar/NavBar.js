import React from 'react';
import "./navbar.css";

//Auth Links
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import SearchModal from "../SearchModal/SearchModal";
import * as ROUTES from '../../constants/routes';

function NavBar(props) {

  return (

    <div class="navbar">
      <a id="logo" href="#home">Kwikly</a>          
        <SearchModal/>
        <div class="right-nav">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </div>
    </div> 
 

  );
}

export default NavBar;
