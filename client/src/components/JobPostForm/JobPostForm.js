import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();

class JobPostForm extends Component {
  
  state = {
    title: "",
    address: "",
    employer: "",
    category: "",
    description: "",
    location: {
      lat: "",
      lng: ""
    },
    allJobs: []
  };

  componentDidMount() {
    API.getJobs()
      .then(res=> this.setState({ allJobs: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  createJob(event, data) {
    event.preventDefault();
    console.log(data);
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + data.address + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> this.setState({
        location: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      })).then(()=> API.savejob({
            title: data.title,
            employer: data.employer,
            description: data.description,
            category: data.category,
            address: data.address,
            location: {
                lat: this.state.location.lat,
                lng: this.state.location.lng
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
                  <label>Job Name</label>
                  <input name="title" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.title}></input>
                </div>
                <div className="form-group">
                  <label>Address (exact)</label>
                  <input name="address" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.address}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="employer-input">Employer Name</label>
                  <input name="employer" type="text" placeholder="..." className="employer-input form-control" onChange={this.handleInputChange} value={this.state.employer}></input>
                </div>
                <div className="form-group">
                  <p>Category (pick one):</p>
                    <p>Restaurant/Bar</p>
                    <input type="radio" name="category" value="Restaurant/Bar" onChange={this.handleInputChange} />
                    <p>Pet Service</p>
                    <input type="radio" name="category" value="Pet Service" onChange={this.handleInputChange} />
                    <p>Household</p> 
                    <input type="radio" name="category" value="Household"  onChange={this.handleInputChange} />
                    <p>Outdoors</p> 
                    <input type="radio" name="category" value="Outdoors"  onChange={this.handleInputChange} />
                    <p>Administrative</p> 
                    <input type="radio" name="category" value="Administrative"  onChange={this.handleInputChange} />
                    <p>Labor</p> 
                    <input type="radio" name="category" value="Labor"  onChange={this.handleInputChange} />
                    <p>Art/Design/Photography</p> 
                    <input type="radio" name="category" value="Art/Design/Photography"  onChange={this.handleInputChange} />
                    <p>Miscellaneous</p> 
                    <input type="radio" name="category" value="Miscellaneous"  onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Description</label>
                  <textarea name="description" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.description}></textarea>
                </div>
                <button onClick={(event)=> this.createJob(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
          </div>
          <hr />
          <div className="row delete-this-later">
            <div className="col-12">
            {this.state.allJobs.length ? (
              <div className="search-results">
                <ul className="pl-0 list-group mb-4">
                {this.state.allJobs.map(res=> {
                  return (
                    <li key={res._id} className="list-group-item bg-light mb-2">
                      <h4>{res.title}</h4>
                      <p>Offered by: {res.employer} || category: {res.category}</p>
                      <p>{res.description}</p>
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
  }

};

export default JobPostForm;