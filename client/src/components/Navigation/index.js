import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./navbar.css";
import SearchModal from "../SearchModal/SearchModal";
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
//import * as ROLES from '../../constants/roles';


class Navigation extends Component {


  render() {
    return (
      <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
      </div>
      
    )
  }
};

class NavigationAuth extends Component {


    render() {
      return (
        <div className="navbar">
            <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
            <SearchModal />
            <div className="right-nav">
                <SignOutButton />
                <Link to={ROUTES.HOME}>Home</Link>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </div>

        </div> 
      )
    }
};

class NavigationNonAuth extends Component {

    
    render() {
      return (
        <div className="navbar">
            <Link id="logo" to={ROUTES.LANDING}>Kwikly</Link>
            <SearchModal />
            <div className="right-nav">
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </div>
        </div> 
      )
    }
};

export default Navigation;
