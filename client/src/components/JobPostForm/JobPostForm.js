import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";

class JobPostForm extends Component {
  
  state = {
    title: "",
    employer: "",
    category: "",
    description: "",
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

  createJob() {
    console.log("test");
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
                  <label htmlFor="employer-input">Employer Name</label>
                  <input name="employer" type="text" placeholder="..." className="employer-input form-control" onChange={this.handleInputChange} value={this.state.employer}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="category-input">Category</label>
                  <select name="category" className="form-control category-input" onChange={this.handleInputChange}>
                    <option value={this.state.category}>Restaurant/Bar</option>
                    <option value={this.state.category}>Food Service</option>
                    <option value={this.state.category}>Household</option>
                    <option value={this.state.category}>Personal Care</option>
                    <option value={this.state.category}>Gardening/Outdoors</option>
                    <option value={this.state.category}>Pet Service</option>
                    <option value={this.state.category}>Babysitting</option>
                    <option value={this.state.category}>Security</option>
                    <option value={this.state.category}>Art/Design</option>
                    <option value={this.state.category}>Photography</option>
                    <option value={this.state.category}>Musician</option>
                    <option value={this.state.category}>Seasonal</option>
                    <option value={this.state.category}>Labor</option>
                    <option value={this.state.category}>Administrative</option>
                    <option value={this.state.category}>Factory/Industrial</option>
                    <option value={this.state.category}>Driving/Delivery</option>
                    <option value={this.state.category}>Teaching/Tutoring</option>
                    <option value={this.state.category}>Web/Remote Service</option>
                    <option value={this.state.category}>Miscellaneous</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="desc-input">Description</label>
                  <textarea name="description" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.description}></textarea>
                </div>
                <button onClick={()=> this.createJob()} className="btn btn-primary">Submit</button>
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