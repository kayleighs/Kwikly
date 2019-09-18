
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import { compose } from 'recompose';
import * as firebase from 'firebase';
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';
import * as ROLES from '../constants/roles';

import API from "../utils/API";
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  _id: '',
  error: null,
};
const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    // eslint-disable-next-line
    const { username, email, passwordOne, isAdmin } = this.state;
    //console.log(this.state)
    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      /*       .then(authUser => {
            // Create a user in your Firebase realtime database NEED TO CHANGE TO MONGO
              return this.props.firebase.user(authUser.user.uid).set({
                username,
                email,
                roles,
              });
            }) */
      /*       .then(() => {
              return this.props.firebase.doSendEmailVerification();
            }) */
      // API.saveUser(this.state)
      /*       .then((userData) => {
              var uid = userData.uid
              console.log(uid)
              this.setState({ ...INITIAL_STATE });
              this.props.history.push(ROUTES.HOME);
            }) */
      .then((userData) => {
        firebase.auth().onAuthStateChanged(function (userData) {
          //console.log(username)
          const user = {
            username: username,
            email: userData.email,
            isAdmin: isAdmin,
            _id: userData.uid,// The UID of recently created user on firebase
          }
          console.log(user)
          API.saveUser(user)
        })
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
    //console.log(this.state)
    event.preventDefault();


  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <label>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, SignUpLink };