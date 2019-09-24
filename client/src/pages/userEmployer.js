import React, {Component} from 'react';

/*Components*/
// import NavBar from './../components/NavBar/NavBar'; We are using the auth navbar
import EmployerCard from './../components/EmpolyerCard/EmployerCard';
import JobPostForm from './../components/JobPostForm/JobPostForm';
import Footer from './../components/Footer/Footer';

/*Mock Data*/
import Empolyer from './../employer.json';


class EmpolyerPage extends Component {

  showJobPostForm = () => {
    document.getElementByClass('')
  }  


  // $(".searchButton").on("click", function () {
  //   setTimeout(function () {
  //       $(".carousel-control-prev-icon").css("display", "block");
  //       $(".carousel-control-next-icon").css("display", "block");
  //   }, 1000); 
  // });

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

        <div className="ks-container gradient-style-1">
          <JobPostForm/>
        </div>
        
        <Footer/>

      </div>
    );

  }
}


export default EmpolyerPage;