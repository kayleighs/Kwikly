import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import { compose } from 'recompose';
import * as firebase from 'firebase';
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';
//import * as ROLES from '../constants/roles';

import API from "../utils/API";
import axios from "axios";
require("dotenv").config();

/*===============================================================================*/
//This page is grabbing css styles from the globalStyles.css in the public folder
/*===============================================================================*/

const SignUpPage = () => (
  <div className="ks-container">
    <h1 className="dl-form-header">SignUp</h1>
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
  statement: "",
  address: "",
  location: {
    lat: "",
    lng: ""
  },
  allUsers: []
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
`;

class SignUpFormBase extends Component {
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ allUsers: res.data }))
      .catch(err => console.log(err));
  };
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  startFirebase() {
    this.props.firebase
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordOne)

      .then(() => {

        var userTest= firebase.auth().currentUser;

        // firebase.auth().onAuthStateChanged(userData => {
          const user = {
            username: this.state.username,
            email: this.state.email,
            isAdmin: this.state.isAdmin,
            statement: this.state.statement,
            address: this.state.address,
            location: this.state.location,
            _id: userTest.uid,// The UID of recently created user on firebase
          }

          console.log("OUTSIDE OF API SAVE USER",user)
          API.saveUser(user).then(resp => {
            console.log("IN API SAVE USER",user)
            console.log("RESPONSE FROM API SAVE USER", resp)
            this.setState({ ...INITIAL_STATE });
          })
        // })
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
    //console.log(this.state)
  };

  onSubmit = event => {
    event.preventDefault();
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res => {
        this.setState({
          location: {
            lat: res.data.results[0].geometry.location.lat,
            lng: res.data.results[0].geometry.location.lng
          },
        }, () => {
          this.startFirebase()
        })
      })
    }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = () => {
    this.setState({ isAdmin: !this.state.isAdmin });
  };

  seeTheState = event => {
    event.preventDefault();
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res => {
        this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        },
      })
    })
      console.log(this.state)
    //console.log(this.state.address)
    console.log(this.state.location)
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
      statement,
      address,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className="form-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label className="form-label-style">Username</label>
                  <input name="username" type="text" placeholder="Username" className="title-input form-control sign-up-input-styles" onChange={this.onChange} value={this.state.username}></input>
                </div>
                <div className="form-group">
                  <label className="form-label-style">Password</label>
                  <input name="passwordOne" type="password" placeholder="Password" className="title-input form-control sign-up-input-styles" onChange={this.onChange} value={this.state.passwordOne}></input>
                </div>
                <div className="form-group">
                  <label className="form-label-style">Confirm Password</label>
                  <input name="passwordTwo" value={this.state.passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" className="title-input form-control sign-up-input-styles"/>
                </div>
                <div className="form-group">
                  <label className="form-label-style">Email</label>
                  <input name="email" type="text" placeholder="YourEmail@Email.Com" className="title-input form-control sign-up-input-styles" onChange={this.onChange} value={this.state.email}></input>
                </div>
                <div className="form-group">
                  <label className="form-label-style">Address (exact)</label>
                  <input name="address" type="text" placeholder="1111 East Street City,State ZipCode" className="title-input form-control sign-up-input-styles" onChange={this.onChange} value={address}></input>
                </div>
                <div className="form-group">
                  <label className="form-label-style" htmlFor="desc-input">Statement</label>
                  <textarea name="statement" type="text" rows="3" placeholder="Talk about yourself a little bit..." className="desc-input form-control sign-up-input-styles-statement" onChange={this.onChange} value={statement}></textarea>
                </div>

                <label className="checkbox-holder">
                  Click HERE! For an Employer Account🤔
                  <input className="admin-checkbox"
                    name="isAdmin"
                    type="checkbox"
                    onChange={this.onChangeCheckbox}
                    checked={this.state.isAdmin}
                  />
                  <span className="admin-checkbox-style"></span>
                </label>
                <button disabled={isInvalid} onClick={(event) => this.onSubmit(event, this.state)} className="dl-form-button">Submit</button>
                {/* <button onClick={(event) => this.seeTheState(event)} className="signin-button">Current State</button> */}
                {error && <p>{error.message}</p>}
              </form>

            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
              {/* {this.state.allUsers.length ? (
                <div className="search-results">
                  <ul className="pl-0 list-group mb-4">
                    {this.state.allUsers.map(res => {
                      return (
                        <li key={res._id} className="list-group-item bg-light mb-2">
                          <h4>{res.username}</h4>
                          <h5>id: {res._id} (use for URL to edit each user)</h5>
                          <p>email: {res.email}</p>
                          <p>Address: {res.address}</p>
                          <p>{res.statement}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                  <h4>Nothing saved yet</h4>
                )} */}
            </div>
          </div>
        </div>
      </div>
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