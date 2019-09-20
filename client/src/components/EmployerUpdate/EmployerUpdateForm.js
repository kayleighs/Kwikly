import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();

class EmployerUpdateForm extends Component {
  
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
        currentEmployer: {}
    }

  componentDidMount() {
    this.getOneEmployer();
  };

  getOneEmployer = () => {
    API.getEmployer(this.props.match.params.id)
    .then(res => this.setState({ currentEmployer: res.data }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setEmployerData = (event, user) => {
    event.preventDefault();
    console.log(user)
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + user.businessAddress + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      })).then(()=> API.editEmployer(user.currentEmployer._id, {
        $set: {
          username: user.username,
          email: user.email,
          statement: user.statement,
          businessAddress: user.businessAddress,
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
                  <label>Business Address (exact)</label>
                  <input name="businessAddress" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.businessAddress}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Statement</label>
                  <textarea name="statement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.statement}></textarea>
                </div>
                <button onClick={(event)=> this.setEmployerData(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
              <div className="user-current">
                <ul className="pl-0 list-group mb-4">
                    <li key={this.state.currentEmployer._id} className="list-group-item bg-light mb-2">
                        <h4>{this.state.currentEmployer.username}</h4>
                        <p>Email: {this.state.currentEmployer.email}</p>
                        <p>Address: {this.state.currentEmployer.businessAddress}</p>
                        <p>{this.state.currentEmployer.statement}</p>
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

export default EmployerUpdateForm;