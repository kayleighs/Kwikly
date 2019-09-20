import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();

class EmployerCreateForm extends Component {
  
  state = {
    username: "",
    password: "",
    email: "",
    statement: "",
    businessAddress: "",
    location: {
      lat: "",
      lng: ""
    },
    allEmployers: []
  }

  componentDidMount() {
    API.getEmployers()
      .then(res=> this.setState({ allEmployers: res.data }))
      .catch(err => console.log(err));
  };

  makeOneEmployer = (event, newEmp) => {
    event.preventDefault();
    console.log(newEmp);
    API.saveEmployer({
      username: newEmp.username,
      password: newEmp.password,
      email: newEmp.email,
      statement: newEmp.statement,
      businessAddress: newEmp.businessAddress,
      location: {
        lat: newEmp.location.lat,
        lng: newEmp.location.lng
      }
    })
    .then(()=> this.componentDidMount())
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
                  <label>Password</label>
                  <input name="password" type="password" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.password}></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.email}></input>
                </div>
                <div className="form-group">
                  <label> BusinessAddress (exact)</label>
                  <input name="businessAddress" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.businessAddress}></input>
                  <button onClick={(event)=> this.setCoordinates(event, this.state.businessAddress)} className="btn btn-caution">Set Coordinates</button>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Statement</label>
                  <textarea name="statement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.statement}></textarea>
                </div>
                <button onClick={(event)=> this.makeOneEmployer(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
            {this.state.allEmployers.length ? (
              <div className="search-results">
                <ul className="pl-0 list-group mb-4">
                {this.state.allEmployers.map(res=> {
                  return (
                    <li key={res._id} className="list-group-item bg-light mb-2">
                      <h4>{res.username}</h4>
                      <h5>id: {res._id} (use for URL to edit each employer)</h5>
                      <p>email: {res.email}</p>
                      <a> Address: {res.businessAddress}</a>
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

export default EmployerCreateForm;