/*global google*/
import React, { Component } from "react";
import API from "../utils/API";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import { Link } from 'react-router-dom';
require("dotenv").config();


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: null,
      currentUser: null,
      currentLoc: {
        lat: null,
        lng: null
      },
      directions: "",
      travelMode: "",
      travelTime: ""
    }
  };
  

  componentDidMount() {
    API.getjob(window.location.pathname.split("/").pop())
    .then(res => this.setState({ currentJob: res.data }))
    .catch(err => console.log(err));

    if (window.window.history.state) {
      
      API.getUserByEmail(window.window.history.state.state.currentUser)
        .then(res=> this.setState({
          currentUser: res.data[0],
          currentLoc: {
            lat: res.data[0].location.lat,
            lng: res.data[0].location.lng
          }
        }))
        .catch(err => console.log(err));
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=> {
        this.setState({
          currentLoc: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }

  };

  handleInputChange = (event, state, travelMode) => {
    const { name, value } = event.target;
    const DirectionsService = new google.maps.DirectionsService();
    this.setState({
      [name]: value
    });
    API.getDirections(state.currentLoc.lat, state.currentLoc.lng, state.currentJob.address, travelMode)
      //.then(res=> console.log(res.data.routes[0].legs[0].duration.text))
      .then(res=> this.setState({travelTime:res.data.routes[0].legs[0].duration.text}))
      .catch(err => console.log(err));

    DirectionsService.route({
      origin: new google.maps.LatLng(state.currentLoc.lat, state.currentLoc.lng),
      destination: state.currentJob.address,
      travelMode: travelMode.toUpperCase(),
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  render() {
    return (
      <div className="job-detail-page container">
        {/* <div className="row">
          <button className="btn btn-info" onClick={()=> console.log(this.state)}>See State</button> 
          <button className="btn btn-success" onClick={()=> console.log(window.history.state.state)}>See All</button> 
        </div> */}
        
        {this.state.currentJob ? (
          <div>
            <div className="row map-job-detail">
              <div className="col-10">
                <GoogleMap
                  defaultZoom={11}
                  defaultCenter={{ 
                    lat: parseFloat(this.state.currentJob.location.lat), 
                    lng: parseFloat(this.state.currentJob.location.lng)
                  }}
                >
                  {this.state.currentLoc ? (
                    <Marker 
                      position={{
                        lat: parseFloat(this.state.currentLoc.lat), 
                        lng: parseFloat(this.state.currentLoc.lng)
                      }}
                    />
                  ): null}

                  <Marker 
                    position={{
                      lat: parseFloat(this.state.currentJob.location.lat), 
                      lng: parseFloat(this.state.currentJob.location.lng)
                    }}
                  />
                  {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
                </GoogleMap>
              </div>
            </div>
            <div className="info-test row">
              <div className="col-10">
                <h1>{this.state.currentJob.title}</h1>
                <p>Posted by: {this.state.currentJob.employer.name}</p>
                <p>{this.state.currentJob.address}</p>
                <p>{this.state.currentJob.description}</p>
              </div>
              <div className="col-10">
                <div className="form-group">
                  <p>Travel Mode (pick one)</p>
                  <input className="mr-2" type="radio" name="travelMode" value="driving" onChange={(event)=> this.handleInputChange(event, this.state, "driving")} />
                  <label htmlFor="driving">Driving</label><br />
                  <input className="mr-2" type="radio" name="travelMode" value="walking" onChange={(event)=> this.handleInputChange(event, this.state, "walking")}/>
                  <label htmlFor="walking">Walking</label><br />
                  <input className="mr-2" type="radio" name="travelMode" value="bicycling" onChange={(event)=> this.handleInputChange(event, this.state, "bicycling")}/>
                  <label htmlFor="bicycling">Bicycle</label><br />
                  <input className="mr-2" type="radio" name="travelMode" value="transit" onChange={(event)=> this.handleInputChange(event, this.state, "transit")}/>
                  <label htmlFor="transit">Transit</label><br />
                </div>

                {this.state.directions ? (
                  this.state.directions.routes[0].legs[0].steps.map(res=> (
                    <div className="card" key={res.encoded_lat_lngs}>
                      <div className="card-body" id="inst-body">
                        {res.instructions}
                      </div>
                    </div> 
                  ))
                ): null}
                
                <p>Your travel time by {this.state.travelMode} will be {this.state.travelTime}</p>
                
              </div>
            </div>
            {this.state.currentUser ? (
              <div className="row">
                <div className="col-10">
                  <Link to={{pathname:"/apply/" + this.state.currentJob._id, state:{ currentJob: this.state.currentJob, currentUser: this.state.currentUser }}}>
                    <button className="btn btn-success">Interested?</button>
                  </Link>
                </div>
              </div>
            ): null}
          </div>
        ):(
          <p>Processing data...</p>  
        )}
      </div>
    
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
//Go here for tutorial https://www.youtube.com/watch?v=Pf7g32CwX_s

export default function JobDetailPage() {

  return (
    <div className="container" id="mini-map">
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_KEY}
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{height: "100%"}} />}
        mapElement={<div style={{width: "100%", height: "400px"}} />}
      />
    </div>
  );
  
}
