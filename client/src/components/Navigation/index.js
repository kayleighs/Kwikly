import React from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";
import SearchModal from "../SearchModal/SearchModal.js";
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
         <SearchModal />
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div class="right-nav">
            <SignOutButton />
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </div>

    </div> 
);

const NavigationNonAuth = () => (
    <div class="navbar">
        <SearchModal />
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div class="right-nav">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </div>
    </div> 
);

export default Navigation;
