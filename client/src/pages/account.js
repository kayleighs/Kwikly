import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import * as firebase from 'firebase';
import { ToastContainer } from "react-toastr";

import API from "../utils/API";

import EmployerCard from './../components/EmpolyerCard/EmployerCard';
import UserCard from './../components/UserCard/UserCard';

let container;
//const uId = firebase.auth().currentUser.uid 
class Account extends React.Component {
  state = {
    user: [],
    newStatement: '',
    newSeekingOrSkills: ''
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

  updateStatement(userId, userObj) {
   // console.log("clicked")
    var userObj= this.state.user
    var userId= this.state.user._id
    userObj.statement = this.state.newStatement
    this.setState({user:userObj})
    //console.log(this.state)
    //console.log(userId, userObj)
    API.editUser(userId,userObj)
    console.log("successfully updated")
    container.success(`Success`, `Statement Updated!`, {
      closeButton: true,
    })
  }
  updateSeekingOrSkills(userId, userObj) {
    // console.log("clicked")
    var userObj = this.state.user
    var userId = this.state.user._id
    userObj.seekingOrSkills = this.state.newSeekingOrSkills
    this.setState({ user: userObj })
    //console.log(this.state)
    //console.log(userId, userObj)
    API.editUser(userId, userObj)
    console.log("successfully updated")
    container.success(`Success`, `Seeking Updated!`, {
      closeButton: true,
    })
  }
  onChange = event => {
    //console.log("changed")
    //console.log(event.target)
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <ToastContainer
          ref={ref => container = ref}
          className="toast-bottom-right"
        />
         <button onClick={(event) => this.seeTheState(event)} className="btn btn-primary">Current State</button>
        {this.state.user.isAdmin ? 
          (<div>
            <EmployerCard
              id={this.state.user.id}
              username={this.state.user.username}
              email={this.state.user.email}
              statement={this.state.user.statement}
              location={this.state.user.location}
              address={this.state.user.address}
              seekingOrSkills={this.state.user.seekingOrSkills}
              onChange={this.onChange}
              updateStatement={() => this.updateStatement()}
              updateSeeking={() => this.updateSeekingOrSkills()}
            />
            <Link to={ROUTES.POSTJOB}>Post a Job</Link>
          </div>): 
          (<div>
            <UserCard
              id={this.state.user.id}
              username={this.state.user.username}
              email={this.state.user.email}
              JobTitle={this.state.user.JobTitle}
              statement={this.state.user.statement}
              address={this.state.user.address}
              skills={this.state.user.skills}
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