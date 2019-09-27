import React, { Component } from "react";

//Style Sheet
import './jobPostForm.css';

import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();


class JobPostForm extends Component {
  
  state = {
    title: "",
    image: "/images/Rest_bar.png",
    address: "",
    employer: "",
    category: "Bar/Restaurant",
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

  handleDropdown = (event) => {
    let setPhoto;
    if (event.target.value === "Bar/Restaurant") {
      //setPhoto = "https://cdn1.iconfinder.com/data/icons/cocktail-bar-glyph/100/martini_bar_restaurant_drink_club-512.png";
      setPhoto = "/images/Rest_bar.png";
    } else if (event.target.value === "Pet Service") {
      //setPhoto = "https://cdn0.iconfinder.com/data/icons/dog-4/100/dog-12-512.png";
      setPhoto = "/images/pet.png";
    } else if (event.target.value === "Household") {
      //setPhoto = "https://cdn1.iconfinder.com/data/icons/misc-vol-1/512/house_home_household_domestic-512.png";
      setPhoto = "/images/household.png";
    } else if (event.target.value === "Outdoors") {
      //setPhoto = "https://cdn3.iconfinder.com/data/icons/nature-animals/512/tree-512.png";
      setPhoto = "/images/outdoors.png";
    } else if (event.target.value === "Administrative") {
      //setPhoto = "https://cdn3.iconfinder.com/data/icons/mobipeople/512/admin_add_user_edit_delete-512.png";
      setPhoto = "/images/admin.png";
    } else if (event.target.value === "Labor") {
      //setPhoto = "https://cdn1.iconfinder.com/data/icons/occupations-3/100/13-512.png";
      setPhoto = "/images/labor.png";
    } else if (event.target.value === "Art/Design/Photography") {
      //setPhoto = "https://www.shareicon.net/data/512x512/2015/12/31/695872_color_512x512.png";
      setPhoto = "/images/art.png";
    } else if (event.target.value === "Miscellaneous") {
      //setPhoto = "https://cdn2.iconfinder.com/data/icons/budicon-misc/16/13-misc_-_puzzle_piece-512.png";
      setPhoto = "/images/misc.png";
    }

    this.setState({
      category: event.target.value,
      image: setPhoto
    });
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
            image: data.image,
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
      <div className="form-page" /*id="the-hidden-leaf-village"*/>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <form>
                <div className="form-group">
                  <label id="employer-input">Job Name</label>
                  <input id="inputJob" name="title" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.title}></input>
                </div>
                <div className="form-group">
                  <label id="employer-input">Address (exact)</label>
                  <input id="inputJob" name="address" type="text" placeholder="..." className="title-input form-control" onChange={this.handleInputChange} value={this.state.address}></input>
                </div>
                <div className="form-group">
                  <label id="employer-input" htmlFor="employer-input">Employer Name</label>
                  <input id="inputJob" name="employer" type="text" placeholder="..." className="employer-input form-control" onChange={this.handleInputChange} value={this.state.employer}></input>
                </div>
                <div className="form-group">

                  <p id="jobCategories">Category (pick one):</p>
                    <select onChange={this.handleDropdown} name="category" value={this.state.value}>
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
                  <label id="employer-input" htmlFor="desc-input">Description</label>
                  <textarea id="inputJob" name="description" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.handleInputChange} value={this.state.description}></textarea>
                </div>
                <button id="submitJob" onClick={(event)=> this.createJob(event, this.state)} className="btn btn-primary">Submit</button>
                <button id="currentStateJob" onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
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