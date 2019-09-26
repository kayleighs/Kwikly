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
import jobs from './../jobs.json';

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    category: this.props.category,
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

  render() {

    return (
      <div>

        {/* <NavBar/> */}

        <TopGrid>
          <SideBar/>
          <GoogleMapCMPT/>
        </TopGrid>  
        {this.props.location.state ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={()=> this.filterJobs(this.props.location.state.category)}>Search by {this.props.location.state.category}</button>
          </div>
        ): null}

        <BottomGrid>
          {this.state.allJobs.map(jobs => (
                <JobCard
                  key={jobs._id}
                  title={jobs.title}
                  category={jobs.category}
                  image="https://i.pinimg.com/originals/30/9d/df/309ddf5999bb72b8c08058199877917b.jpg"
                  description={jobs.description}
                  onClick={()=> console.log(this.props.location.state.category)}
                />
          ))}
        </BottomGrid>

        <Footer/>

      </div>
    );

  }
}

export default (HomePage);