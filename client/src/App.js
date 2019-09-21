import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router'
import Navigation from './components/Navigation';
//import MapPage from "./pages/MapPage";
import SignUpPage from "./pages/signup.js";
import SignInPage from "./pages/signin";
import HomePage from "./pages/home";
import HomePageLoggedIn from "./pages/homeLoggedIn";
import AccountPage from "./pages/account";
import AdminPage from './pages/admin';
import UserPage from './pages/user'
import EmployerPage from './pages/userEmployer';
import TestPage from './pages/testPage';

import PasswordForgetPage from './components/PasswordForget';
//------Paths to test form pages---
import JobPostForm from "./components/JobPostForm/JobPostForm";
import UserCreateForm from "./components/UserUpdate/UserCreateForm";
import UserUpdateForm from "./components/UserUpdate/UserUpdateForm";
import EmployerCreateForm from "./components/EmployerUpdate/EmployerCreateForm";
import EmployerUpdateForm from "./components/EmployerUpdate/EmployerUpdateForm";
import DirectionsTest from "./components/DirectionsTest";
//---------------------------------
import FirebaseTest from "./pages/FirebaseTest.js"
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';


const App = () => (
    <Router>
      <div>
        
        <Navigation />
        <hr />

        <Route exact path="/jobform" component={JobPostForm} />
        <Route exact path="/userform" component={UserCreateForm} />
        <Route path="/userform/:id" render={props=> <UserUpdateForm {...props}/>} />
        <Route exact path="/employerform" component={EmployerCreateForm} />
        <Route path="/employerform/:id" render={props=> <EmployerUpdateForm {...props}/>} />
        <Route exact path ="/directiontest" component={DirectionsTest} />

        <Route exact path={ROUTES.LANDING} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> 
        <Route path={ROUTES.FIRETEST} component={FirebaseTest} />
  
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.USER} component={UserPage} />
        <Route exact path={ROUTES.EMPLOYER} component={EmployerPage} />
        <Route exact path={ROUTES.TESTpage} component={TestPage} />

      </div>
    </Router>
  );


export default withAuthentication(App);
