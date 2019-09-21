import React from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
//import * as ROLES from '../../constants/roles';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (

    <div class="navbar">
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div id="search">
            <input type="text" id="search-bar" placeholder="Search      for    Jobs..."></input>
        </div>
        <div class="right-nav">
            <SignOutButton />
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </div>

    </div> 
);

const NavigationNonAuth = () => (
    <div class="navbar">
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div id="search">
            <input type="text" id="search-bar" placeholder="Search      for    Jobs..."></input>
        </div>
        <div class="right-nav">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </div>
    </div> 
);

export default Navigation;
