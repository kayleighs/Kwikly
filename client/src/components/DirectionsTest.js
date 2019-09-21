import React, { Component } from "react";
import API from "../utils/API";

//Use http://localhost:3000/directiontest to get to this component

class DirectionsTest extends Component {

  state = {
    origin: "",
    destination: "",
    travelMode: "",
    directionArray: []
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

  getDirections = (event, input) => {
    event.preventDefault();
    API.getDirections(input.origin, input.destination, input.travelMode)
      .then(res=> console.log(res.data.routes[0].legs[0]))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-10">
                <form>
                    <div className="form-group">
                        <label htmlFor="origin">Origin</label>
                        <input name="origin" type="text" placeholder="..." className="form-control" onChange={this.handleInputChange} value={this.state.origin}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="origin">Destination</label>
                        <input name="destination" type="text" placeholder="..." className="form-control" onChange={this.handleInputChange} value={this.state.destination}></input>
                    </div>
                    <div className="form-group">
                        <p>Travel Mode (pick one)</p>
                        <input className="mr-2" type="radio" name="travelMode" value="driving" onChange={this.handleInputChange} />
                        <label htmlFor="driving">Driving</label><br />
                        <input className="mr-2" type="radio" name="travelMode" value="walking" onChange={this.handleInputChange} />
                        <label htmlFor="walking">Walking</label><br />
                        <input className="mr-2" type="radio" name="travelMode" value="bicycling" onChange={this.handleInputChange} />
                        <label htmlFor="bicycling">Bicycle</label><br />
                        <input className="mr-2" type="radio" name="travelMode" value="transit" onChange={this.handleInputChange} />
                        <label htmlFor="transit">Transit</label><br />
                    </div>
                    <button onClick={(event)=> this.getDirections(event, this.state)} className="btn btn-primary">Submit</button>
                    <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
                </form>
            </div>
          </div>
        </div>
    );
  };
}

export default DirectionsTest;