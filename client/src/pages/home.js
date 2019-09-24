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


  state = {
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

  render() {

    return (
      <div>

        {/* <NavBar/> */}

        <TopGrid>
          <SideBar/>
          <GoogleMapCMPT/>
        </TopGrid>  

        <BottomGrid>
          {this.state.allJobs.map(jobs => (
                <JobCard
                  id={jobs._id}
                  JobTitle={jobs.title}
                  image={jobs.image}
                  Description={jobs.description}
                />
          ))}
        </BottomGrid>

        <Footer/>

      </div>
    );

  }
}

export default (HomePage);
