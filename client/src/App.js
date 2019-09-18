import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router'
import Navigation from './components/Navigation';
import MapPage from "./pages/MapPage";
import SignUpPage from "./pages/signup.js";
import SignInPage from "./pages/signin";
import HomePage from "./pages/home";
import FirebaseTest from "./pages/FirebaseTest.js"
import * as ROUTES from './constants/routes';
const App = () => (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={MapPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
{/*         <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> */}
        <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.FIRETEST} component={FirebaseTest} />
{/*         <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </div>
    </Router>
  );


export default App;
