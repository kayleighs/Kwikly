import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({ firebase }) => (
  <Link to={ROUTES.LANDING} type="" onClick={firebase.doSignOut}>
    Sign Out
  </Link>

);
export default withFirebase(SignOutButton);