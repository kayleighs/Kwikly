import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
import Gravatar from 'react-gravatar';
require("dotenv").config();

class UserUpdateForm extends Component {
  
  state = {
    username: "",
    email: "",
    isAdmin: true,
    statement: "",
    address: "",
    location: {
      lat: "",
      lng: ""
    },
    currentUser: {}
  }

  componentDidMount() {
    this.getOneUser();
  };

  getOneUser = () => {
    API.getUser(this.props.match.params.username)
    //.then(res=> console.log(res.data[0]))
    .then(res => this.setState({ currentUser: res.data[0] }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  fixUser = (event, user) => {
    event.preventDefault();
    console.log(user)
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + user.address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      })).then(()=> API.editUser(user.currentUser._id, {
        $set: {
          username: user.username,
          email: user.email,
          statement: user.statement,
          address: user.address,
          location: {
              lat: this.state.location.lat,
              lng: this.state.location.lng
          }
        }
      })
        .then(() => this.componentDidMount())
        .catch(err => console.log(err)));
  };

  seeTheState = event => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div className="form-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input name="username" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.username}></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.email}></input>
                </div>
                <div className="form-group">
                  <label>Address (exact)</label>
                  <input name="address" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.address}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Statement</label>
                  <textarea name="statement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.statement}></textarea>
                </div>
                <button onClick={(event)=> this.fixUser(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
              <div className="user-current">
                <ul className="pl-0 list-group mb-4">
                    <li key={this.state.currentUser._id} className="list-group-item bg-light mb-2">
                        <Gravatar email={this.state.email} size={100} style={{ float: "left" }}/>
                        <h4>{this.state.currentUser.username}</h4>
                        <p>{this.state.currentUser.email}</p>
                        <p>{this.state.currentUser.address}</p>
                        <p>{this.state.currentUser.statement}</p>
                    </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default UserUpdateForm;
