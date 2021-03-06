import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './googeMap.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
//import testData from "../testdata.json";
import API from '../../utils/API';
import axios from 'axios';
require("dotenv").config();

class Map extends Component {
  
  state= {
    selectedMarker: null,
    allJobs: []
  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res =>
        this.setState({ allJobs: res.data })
      )
      .catch(err => console.log(err));
  };

  setSelectedMarker = (info) => {
    this.setState({ selectedMarker: info})
  };

  convertLoc = (place) => {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + process.env.REACT_APP_GOOGLE_KEY)
      .then(res=> console.log(res));
    //console.log(this.state.allJobs[0].location.lat);
  };

  toFrom = (origin, destination) => {
    //testing Directions API, can't get it to work yet
  };

  render() {
    return (
      <div className="map-page">
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 40.771395, lng: -73.983452 }}
        >
          {this.state.allJobs.map((loc)=> (
            // console.log(loc),
            <Marker 
              key={loc._id} 
              position={{lat: parseFloat(loc.location.lat), lng: parseFloat(loc.location.lng)}}
              onClick={()=> this.setSelectedMarker(loc)}
              icon={{url: loc.image, scaledSize: new window.google.maps.Size(25, 25)}}
            />
          ))}
    
          {this.state.selectedMarker && (
            <InfoWindow
              position={{
                lat: parseFloat(this.state.selectedMarker.location.lat),
                lng: parseFloat(this.state.selectedMarker.location.lng)
              }}
              onCloseClick={() => this.setSelectedMarker(null)}
            >
              <div>
                <h4>{this.state.selectedMarker.title}</h4>
                <p>{this.state.selectedMarker.description}</p>
                {document.getElementsByClassName("navbar")[0].attributes[1] ? (
                  <div>
                    <p>Get details <Link to={{pathname:"/jobdetail/" + this.state.selectedMarker._id, state:{ currentUser: document.getElementsByClassName("navbar")[0].attributes[1].value, jobId: this.state.selectedMarker._id}}}>here</Link></p>
                  </div>
                ):(
                  null
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
        <div className="row">
          <div className="col-10">
            {/* <button type="button" className="btn btn-success" onClick={()=> this.convertLoc("106 Court Street, Brooklyn, NY 11201")}> Location Convert </button>
            <button type="button" className="btn btn-info" onClick={()=> this.toFrom("106 Court Street, Brooklyn, NY 11201", "West 116 St and Broadway, New York, NY 10027")}> Destination Time, transit </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
//Go here for tutorial https://www.youtube.com/watch?v=Pf7g32CwX_s

export default function GoogleMapCMPT() {

  return (
    <div className="container" id="map">
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_KEY}
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{height: "100%"}} />}
        mapElement={<div style={{height: "100%"}} />}
      />
    </div>
  );
  
}
