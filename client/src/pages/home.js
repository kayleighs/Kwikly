import React from 'react';
//import { Link } from 'react-router-dom';
//import { compose } from 'recompose';

import { withAuthorization } from '../components/Session';
//import SignOutButton from '../components/SignOut';

//import * as ROUTES from '../constants/routes';
const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
