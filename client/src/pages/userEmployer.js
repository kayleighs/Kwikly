import React, {Component} from 'react';
/*Grids*/
import TopGrid from './../components/Grids/HomePageGrids/TopGrid/TopGrid';
import BottomGrid from '../components/Grids/HomePageGrids/BottomGrid/BottomGrid';

/*Components*/
import NavBar from './../components/NavBar/NavBar';
import Footer from './../components/Footer/Footer';
import SideBar from './../components/SideBar/SideBar';
import EmployerCard from './../components/EmpolyerCard/EmployerCard';


/*Mock Data*/
import Empolyer from './../employer.json';


class EmpolyerPage extends Component {


  state = {
    Empolyer,
  };


  render() {

    return (
      <div>

       {/*  <NavBar/> */}

        <div>
            {this.state.Empolyer.map(Empolyer => (

                <EmployerCard
                  id={Empolyer.id}
                  firstName={Empolyer.FirstName}
                  lastName={Empolyer.LastName}
                  businessName={Empolyer.BusinessName}
                  description={Empolyer.Description}
                  image={Empolyer.image}
                  location={Empolyer.location}
                />

            ))}
        </div>
        
        <Footer/>

      </div>
    );

  }
}


export default EmpolyerPage;