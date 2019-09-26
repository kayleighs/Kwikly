import React, { Component } from "react";

//Style Sheet
import './jobPostForm.css';

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
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDropdown = input => {
    this.setState({category: input});
  }

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
      // the-hidden-leaf-village id is a reference to Naruto.
      //Its just used to hide the job form using display: none; 
      //Sorry for trolling, you should probably change this id but its really awesome.
      //The hidden leaf Village has been moved to globalStyles. Add it back to this component's style later.
      <div className="form-page">
        <div className="container">
          <h2 id="job-post-header">Post A New Job</h2>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
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
                    <select onChange={this.handleInputChange} name="category" value={this.state.value}>

                      <option value="Bar/Restaurant">Restaurant/Bar</option>
                      <option value="Pet Service">Pet Service</option>    
                      <option value="Household" >Household</option>
                      <option value="Outdoors" >Outdoors</option>      
                      <option value="Administrative" >Administrative</option>
                      <option value="Labor" >Labor</option> 
                      <option value="Art/Design/Photography" >Art/Design/Photography</option>  
                      <option value="Miscellaneous" >Miscellaneous</option>         

                    </select>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Description</label>
                  <textarea name="description" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.description}></textarea>
                </div>
                <button onClick={(event)=> this.createJob(event, this.state)} className="btn btn-primary">Submit</button>
                <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
              </form>
              
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    );
  }

};

export default JobPostForm;