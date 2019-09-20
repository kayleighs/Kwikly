import React from "react";
import "./employerCard.css";
import GoogleMapCMPT from '../GoogleMap/GoogleMapCMPT';

function EmployerCard(props) {

  return (
    
    <div className="Grid-Employer-Card">

      {/*This section holds user image, first & last name and bussiness name*/}
      {/*========================================================================*/}

      {}
      <div className="Item-Employer-Card-1 Item">
        <img id="EmployerImg" src={props.image}></img>  
        <p>Daniel</p>
        <p>LaZenbery</p>
        <p>The Purple Platypus</p>
      </div>
    
      <div className="Item-Employer-Card-2 Item">
        <h2>Seeking:</h2>
        <ul>
          <li>Bartenders</li>
          <li>Bar Backs</li>
          <li>Bus Boys/Gals</li>
          <li>Waiters/Waitresses</li>
        </ul>
      </div>
      <div className="Item-Employer-Card-3 Item">3</div>
      <div className="Item-Employer-Card-4 Item">  
        
        <div className="Item-4-Grid-1">
          <h2>Brooklyn,NY</h2>
        </div>
        <div className="Item-4-Grid-2">
          <img id="MapImg" src={props.location}></img>  
        </div>  
       
      </div>
      <div className="Item-Employer-Card-5 Item">
        <h2>About Us:</h2>
        <p>
          At the Purple Platypus we pride ourselves in horrible customer service accompanied with drinks worst than our attitudes. If there is nothing passive about your aggression, you've found the right place to work!  
        </p>
        <p>
          Each drink served at this pub is served straight with a splash of purple food coloring.
        </p>
      </div>
      <div className="Item-Employer-Card-6 Item">6</div>

    </div>
   
  );
}

export default EmployerCard;