import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import * as firebase from 'firebase';


import API from "../utils/API";

import EmployerCard from './../components/EmpolyerCard/EmployerCard';
import UserCard from './../components/UserCard/UserCard';

//const uId = firebase.auth().currentUser.uid 
class Account extends React.Component {
  state = {
    user: [],
  }
/*   componentDidMount() {
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
  }; */
  componentDidMount() {
    // this.loadUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const uId = firebase.auth().currentUser.uid
        console.log(uId)
        API.getUser(uId)
          .then(res =>
            this.setState({ user: res.data })
          )
          .catch(err => console.log(err));
      }
    });
  }
/*   loadUserInfo = () => {
        // User is signed in.
        const uId = firebase.auth().currentUser.uid
        //console.log(uId)
        API.getUser(uId)
          .then(res =>
            this.setState({ user: res.data })
          )
          .catch(err => console.log(err));
  } */
  seeTheState = event => {
    event.preventDefault();
    console.log(this.state)

  };
  render() {
    return (
      <div>
        {/* {/* <button onClick={(event) => this.seeTheState(event)} className="btn btn-primary">Current State</button> */}
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
            <Link to={ROUTES.POSTJOB}>Post a Job</Link>
          </div>): 
          (<div>
            <UserCard
              id={this.state.user.id}
              username={this.state.user.username}
              email={this.state.user.email}
              JobTitle={this.state.user.JobTitle}
              image={this.state.user.image}
              statement={this.state.user.statement}
              address={this.state.user.address}
              skills={this.state.user.skills}
            />
          </div>)
          
        }  */}
        {/*       <ul>uid: {firebase.auth().currentUser.uid}</ul> */}
        {/*       <ul>Sign-in-provider: {firebase.auth().currentUser.providerId}</ul> */}
      </div>
    )
  }
}
export default Account;