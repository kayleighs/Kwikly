import React from "react";
import "./employerCard.css";
import GoogleMapCMPT from '../GoogleMap/GoogleMapCMPT';

function EmployerCard(props) {

  return (
    
    <div className="Grid-Employer-Card">

      {/*This section holds user image, first & last name and bussiness name*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-1 Item">
        <img id="EmployerImg" src={props.image}></img>  
        <p>Daniel</p>
        <p>LaZenbery</p>
        <p>BusinessName: Platypus LLC</p>
      </div>
    
      <div className="Item-Employer-Card-2 Item">
        <p>2</p>
      </div>
      <div className="Item-Employer-Card-3 Item">3</div>
      <div className="Item-Employer-Card-4 Item">  
        <p>Location Map PlaceHolder</p>     
      </div>
      <div className="Item-Employer-Card-5 Item">5</div>
      <div className="Item-Employer-Card-6 Item">6</div>
      {/* <div class="Item-Employer-Card-7 Item">7</div>
      <div class="Item-Employer-Card-8 Item">8</div>
      <div class="Item-Employer-Card-9 Item">9</div> */}
    </div>
   
  );
}

export default EmployerCard;