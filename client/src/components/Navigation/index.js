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
                authUser ? <NavigationAuth signedinUser={authUser}/> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = (props) => (

    <div className="navbar" value={props.signedinUser.email}>
         <SearchModal />
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div className="right-nav">
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
            <SignOutButton />
        </div>
        {/* <button className="btn btn-warning" onClick={()=> console.log(props.signedinUser.email)}>See Props</button> */}

    </div> 
);

const NavigationNonAuth = () => (
    <div className="navbar">
        <SearchModal />
        <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
        <div className="right-nav">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </div>
    </div> 
);

export default Navigation;
