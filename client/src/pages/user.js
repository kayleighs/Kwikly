import React, {Component} from 'react';
/*Grids*/
import TopGrid from './../components/Grids/HomePageGrids/TopGrid/TopGrid';
import BottomGrid from '../components/Grids/HomePageGrids/BottomGrid/BottomGrid';

/*Components*/
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import SideBar from './../components/SideBar/SideBar';
import UserCard from './../components/UserCard/UserCard';


/*Mock Data*/
import user from './../user.json';


class UserPage extends Component {


  state = {
    user,
  };


  render() {

    return (
      <div>

        <NavBar/>

        <TopGrid>
          {this.state.user.map(user => (
                <UserCard
                  id={user.id}
                  JobTitle={user.JobTitle}
                  image={user.image}
                  Description={user.Description}
                />
          ))}
        </TopGrid>  

        <Footer/>

      </div>
    );

  }
}


export default UserPage;