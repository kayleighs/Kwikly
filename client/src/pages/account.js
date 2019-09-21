import React from 'react';
import * as firebase from 'firebase';

import API from "../utils/API";

//const uId = firebase.auth().currentUser.uid 
class Account extends React.Component {
  state = {
    user: [],
  }

  componentDidMount() {
    this.loadUserInfo();
  }
  loadUserInfo = () => {
    const uId = firebase.auth().currentUser.uid
    console.log(uId)
    API.getUser(uId)
      .then(res =>
        this.setState({ user: res.data })
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <h1>Account info</h1>
        <ul>Email: {this.state.user.email}</ul>
        <ul>Name: {this.state.user.username}</ul>
        {/*       <ul>uid: {firebase.auth().currentUser.uid}</ul> */}
        {/*       <ul>Sign-in-provider: {firebase.auth().currentUser.providerId}</ul> */}
      </div>
    )
  }
}
export default Account;