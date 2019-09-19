import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router'
import Navigation from './components/Navigation';
//import MapPage from "./pages/MapPage";
import SignUpPage from "./pages/signup.js";
import SignInPage from "./pages/signin";
import HomePage from "./pages/home";
import AccountPage from "./pages/account";
import AdminPage from './pages/admin';
import UserPage from './pages/user'
import PasswordForgetPage from './components/PasswordForget';

import FirebaseTest from "./pages/FirebaseTest.js"
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';
const App = () => (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> 
        <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.FIRETEST} component={FirebaseTest} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.USER} component={UserPage} />
      </div>
    </Router>
  );


export default withAuthentication(App);
