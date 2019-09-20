import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
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
    API.getUser(this.props.match.params.id)
    .then(res => this.setState({ currentUser: res.data }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setCoordinates = (event, address) => {
    event.preventDefault();
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      })
    )
  };

  editUser = (event, user) => {
    event.preventDefault();
    console.log(user)
    API.editUser(this.state.currentUser._id, {
      $set: {
        username: user.username,
        email: user.email,
        statement: user.statement,
        address: user.address,
        location: {
            lat: user.location.lat,
            lng: user.location.lng
        }
      }
    })
      .then(() => this.componentDidMount())
      .catch(err => console.log(err));
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
                  <input name="username" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.title}></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.title}></input>
                </div>
                <div className="form-group">
                  <label>Address (exact)</label>
                  <input name="address" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.address}></input>
                  <button onClick={(event)=> this.setCoordinates(event, this.state.currentUser.address)} className="btn btn-caution">Set Coordinates</button>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Statement</label>
                  <textarea name="statement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.description}></textarea>
                </div>
                <button onClick={(event)=> this.editUser(event, this.state)} className="btn btn-primary">Submit</button>
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
                        <h4>{this.state.currentUser.username}</h4>
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
