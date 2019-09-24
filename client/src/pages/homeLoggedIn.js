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

// Authorization
import { withAuthorization } from '../components/Session';
class HomePageLoggedIn extends Component {

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
              key={jobs._id}
              JobTitle={jobs.title}
              category={jobs.category}
              image="https://i.pinimg.com/originals/30/9d/df/309ddf5999bb72b8c08058199877917b.jpg"
              Description={jobs.description}
              onClick={()=> console.log(this.state)}
            />
          ))}
        </BottomGrid>

        <Footer/>

      </div>
    );

  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePageLoggedIn);
