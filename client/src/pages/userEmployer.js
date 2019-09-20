import React, {Component} from 'react';
/*Grids*/
import TopGrid from './../components/Grids/HomePageGrids/TopGrid/TopGrid';
import BottomGrid from '../components/Grids/HomePageGrids/BottomGrid/BottomGrid';

/*Components*/
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import SideBar from './../components/SideBar/SideBar';
import UserEmployerCard from './../components/UserEmployerCard/UserEmployerCard';


/*Mock Data*/
import userEmployer from './../userEmployer.json';


class UserEmployerPage extends Component {


  state = {
    userEmployer,
  };


  render() {

    return (
      <div>

        <NavBar/>

  
          {this.state.userEmployer.map(userEmployer => (
                <UserEmployerCard
                  id={userEmployer.id}
                  JobTitle={userEmployer.JobTitle}
                  image={userEmployer.image}
                  Description={userEmployer.Description}
                />
          ))}
        

        <Footer/>

      </div>
    );

  }
}


export default UserEmployerPage;