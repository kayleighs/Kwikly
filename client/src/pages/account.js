import React from 'react';

import * as firebase from 'firebase';
import { ToastContainer } from "react-toastr";

import API from "../utils/API";

import EmployerCard from '../components/EmpolyerCard/EmployerCard';
import JobList from '../components/JobList/JobList';
import HireList from '../components/HireList/HireList';
import UserCard from '../components/UserCard/UserCard';

let container;

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      userJobs: [],
      newStatement: '',
      newSeekingOrSkills: '',
    }

    this.onChange = this.onChange.bind(this);
    this.updateStatement = this.updateStatement.bind(this);
  }

  componentDidMount() {
    // this.loadUserInfo();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const uId = firebase.auth().currentUser.uid
        console.log(uId)
        API.getUser(uId)
          .then(res =>
            this.setState({ user: res.data , newStatement: res.data.statement, newSeekingOrSkills: res.data.seekingOrSkills})
          )
          .catch(err => console.log(err));
        API.getJobsbyEmployer(uId)
          //.then(res=> console.log(res.data))
          .then(res=> this.setState({userJobs: res.data}))
          .catch(err => console.log(err));
      }
    });
  }
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
    //console.log("successfully updated")
    container.success(`Success`, `Statement Updated!`, {
      closeButton: true,
    })
  }
  updateSeeking(userId, userObj) {
    // console.log("clicked")
    var userObj = this.state.user
    var userId = this.state.user._id
    userObj.seekingOrSkills = this.state.newSeekingOrSkills
    this.setState({ user: userObj })
    //console.log(this.state)
    //console.log(userId, userObj)
    API.editUser(userId, userObj)
    //console.log("successfully updated")
    container.success(`Success`, `Seeking Updated!`, {
      closeButton: true,
    })
  }
  updateSkills(userId, userObj) {
    // console.log("clicked")
    var userObj = this.state.user
    var userId = this.state.user._id
    userObj.seekingOrSkills = this.state.newSeekingOrSkills
    this.setState({ user: userObj })
    //console.log(this.state)
    //console.log(userId, userObj)
    API.editUser(userId, userObj)
    //console.log("successfully updated")
    container.success(`Success`, `Skills Updated!`, {
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
          {/* <button onClick={(event) => this.seeTheState(event)} className="btn btn-primary">Current State</button> */}
        {this.state.user.isAdmin ? 
          (<div>
            <EmployerCard
              id={this.state.user._id}
              username={this.state.user.username}
              email={this.state.user.email}
              statement={this.state.user.statement}
              location={this.state.user.location}
              address={this.state.user.address}
              seekingOrSkills={this.state.user.seekingOrSkills}
              onChange={this.onChange}
              newStatement={this.state.newStatement}
              newSeekingOrSkills={this.state.newSeekingOrSkills}
              updateStatement={() => this.updateStatement()}
              updateSeeking={() => this.updateSeeking()}
            />
            
            <div className="job-list-split-grid ks-container">
              <div className="left-job-list ks-container">
                <div className="ks-container list-main-container job-list-header-grid"> 
                <div className="job-header-1-grid">Job Name</div>
                <div className="job-header-2-grid">Date</div>
                <div className="job-header-3-grid">Applicants</div>
                </div>
                {this.state.userJobs.map(res=> (
                  <JobList
                    key={res._id} 
                    title={res.title}
                    date={res.date.slice(0, 10)}
                    appliedWorkers={res.appliedWorkers.length}
                  />
                ))}
                
              </div> 
              <div className="right-hire-list ks-container">
                <div className="ks-container list-main-container"> hello
                </div> 
                {this.state.userJobs.map(res=> (
                  res.appliedWorkers.map(worker=> (
                    <HireList 
                      jobName={res.title}
                      username={worker.username}
                    />
                  ))
                ))}  
              </div>  
            </div>
          </div>): 
          (<div>
            <UserCard
              id={this.state.user.id}
              username={this.state.user.username}
              email={this.state.user.email}
              statement={this.state.user.statement}
              location={this.state.user.location}
              address={this.state.user.address}
              seekingOrSkills={this.state.user.seekingOrSkills}
              onChange={this.onChange}
              newStatement={this.state.newStatement}
              newSeekingOrSkills={this.state.newSeekingOrSkills}
              updateStatement={() => this.updateStatement()}
              updateSkills={() => this.updateSkills()}
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