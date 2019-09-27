import React, {Component} from 'react';
/*Grids*/
import TopGrid from '../components/Grids/HomePageGrids/TopGrid/TopGrid';
import BottomGrid from '../components/Grids/HomePageGrids/BottomGrid/BottomGrid';
import API from "../utils/API";
/*Components*/
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import JobCard from '../components/JobCard/JobCard';
import GoogleMapCMPT from '../components/GoogleMap/GoogleMapCMPT';

/*Mock Data*/
//import jobs from './../jobs.json';

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    category: this.props.category,
    searchTerm: this.props.searchTerm,
    allJobs: []
  };

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

  filterJobs = (filter) => {
    API.getJobsbyCategory(filter)
      //.then(res=> console.log(res.data))
      .then(res=> this.setState({ allJobs: res.data }))
      .catch(err => console.log(err));
  };

  filterJobsByName = (filter) => {
    API.getJobsbySearch(filter)
    //.then(res=> console.log(res.data))
    .then(res=> this.setState({ allJobs: res.data }))
    .catch(err => console.log(err));
  };

  seeTheState = event => {
    event.preventDefault();
    console.log(this.state)

  };
  render() {

    return (

      <div>
        
        {/* <NavBar/> */}
        <TopGrid>
          <SideBar/>
          <GoogleMapCMPT/>
        </TopGrid>  
        {this.props.location.state && this.props.location.state.category ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=> this.filterJobs(this.props.location.state.category)}>Search by {this.props.location.state.category}</button>
          </div>
        ) : this.props.location.state && this.props.location.state.searchTerm ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=> this.filterJobsByName(this.props.location.state.searchTerm)}>Search by {this.props.location.state.searchTerm}</button>
          </div>
        ): null}

        <BottomGrid>
          {this.state.allJobs.map(jobs => (
                <JobCard
                  key={jobs._id}
                  title={jobs.title}
                  category={jobs.category}
                  image={jobs.image}
                  description={jobs.description}
                  onClick={()=> console.log(this.props.location.state.category)}
                />
          ))}
        </BottomGrid>
        {/* <button onClick={(event) => this.seeTheState(event)} className="btn btn-primary">Current State</button> */}
        <Footer/>

      </div>
    );

  }
}

export default (HomePage);