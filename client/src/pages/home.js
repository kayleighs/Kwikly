import React, {Component} from 'react';
/*Grids*/
import TopGrid from './../components/Grids/HomePageGrids/TopGrid/TopGrid';
import BottomGrid from './../components/Grids/HomePageGrids/BottomGrid/BottomGrid';

/*Components*/
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import SideBar from './../components/SideBar/SideBar';
import JobCard from './../components/JobCard/JobCard';
import GoogleMapCMPT from './../components/GoogleMap/GoogleMapCMPT';

/*Mock Data*/
import jobs from './../jobs.json';


class Home extends Component {


  state = {
    jobs,
  };


  render() {

    return (
      <div>

        <NavBar/>

        <TopGrid>
          <SideBar/>
          <GoogleMapCMPT/>
        </TopGrid>  

        <BottomGrid>
          {this.state.jobs.map(jobs => (
                <JobCard
                  id={jobs.id}
                  JobTitle={jobs.JobTitle}
                  image={jobs.image}
                  Description={jobs.Description}
                />
          ))}
        </BottomGrid>

        <Footer/>

      </div>
    );

  }
}


export default Home;
