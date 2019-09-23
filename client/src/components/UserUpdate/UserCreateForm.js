import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();

//Path found at http://localhost:3000/userform

class UserCreateForm extends Component {
  
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
    allUsers: []
  }

  componentDidMount() {
    API.getUsers()
      .then(res=> this.setState({ allUsers: res.data }))
      .catch(err => console.log(err));
  };

  makeOneUser = (event, newUser) => {
    event.preventDefault();
    console.log(newUser);
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + newUser.address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      })).then(()=> API.saveUser({
          username: newUser.username,
          password: newUser.password,
          isAdmin: newUser.isAdmin,
          statement: newUser.statement,
          address: newUser.address,
          location: {
            lat: this.state.location.lat,
            lng: this.state.location.lng
          }
      })
      .then(()=> this.componentDidMount())
      .catch(err => console.log(err)));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
                <button onClick={(event)=> this.makeOneUser(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
            {this.state.allUsers.length ? (
              <div className="search-results">
                <ul className="pl-0 list-group mb-4">
                {this.state.allUsers.map(res=> {
                  return (
                    <li key={res._id} className="list-group-item bg-light mb-2">
                      <h4>{res.username} (add name to url to go to update page)</h4>
                      <h5>id: {res._id}</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default UserCreateForm;
