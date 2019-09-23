import React from 'react';
import * as firebase from 'firebase';

import API from "../utils/API";

import EmployerCard from './../components/EmpolyerCard/EmployerCard';
import UserCard from './../components/UserCard/UserCard';

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
        {this.state.user.isAdmin ? 
          (<div>
            <EmployerCard
              id={this.state.user.id}
              firstName={this.state.user.FirstName}
              lastName={this.state.user.LastName}
              businessName={this.state.user.BusinessName}
              description={this.state.user.Description}
              image={this.state.user.image}
              location={this.state.user.location}
            />
          </div>): 
          (<div>
            <UserCard
              id={this.state.user.id}
              JobTitle={this.state.user.JobTitle}
              image={this.state.user.image}
              Description={this.state.user.Description}
            />
          </div>)
        } 
        {/*       <ul>uid: {firebase.auth().currentUser.uid}</ul> */}
        {/*       <ul>Sign-in-provider: {firebase.auth().currentUser.providerId}</ul> */}
      </div>
    )
  }
}
export default Account;