import React from "react";
import "./employerCard.css";


function EmployerCard(props) {

  return (
    
    <div className="Grid-Employer-Card">

      {/*This section holds user image, first & last name and bussiness name*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-1 Item">
        <img id="EmployerImg" src={props.image} alt={props.id}></img>  
        <p>Daniel</p>
        <p>LaZenbery</p>
        <p>The Purple Platypus</p>
      </div>
    
      {/*This section gives a list of positions that need to be filled*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-2 Item">
        <h2>Seeking:</h2>
        <ul>
          <li>Bartenders</li>
          <li>Bar Backs</li>
          <li>Bus Boys/Gals</li>
          <li>Waiters/Waitresses</li>
        </ul>
      </div>

      {/*This section is to be determined*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-3 Item">3</div>

      {/*This section gives a location of where the employer is based out of and a map of that location.*/}
      {/*NOTE! the current map image is a placeholder*/}
      {/*This Item holds a Nested Grid!*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-4 Item">  
        
        <div className="Item-4-Grid-1">
          <h2>Brooklyn,NY</h2>
        </div>
        <div className="Item-4-Grid-2">
          <img id="MapImg" src={props.location} alt={props.id}></img>  
        </div>  
       
      </div>

      {/*This section holds the about information of the business/employer*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-5 Item">
        <h2>About Us:</h2>
        <p>
          At the Purple Platypus we pride ourselves in horrible customer service accompanied with drinks worst than our attitudes. If there is nothing passive about your aggression, you've found the right place to work!  
        </p>
        <p>
          Each drink served at this pub is served straight with a splash of purple food coloring.
        </p>
      </div>

      {/*This section holds two buttons.*/} 
      {/*Button num1 displays the employer's current job postings.*/} 
      {/*Button num2 creates a new job posting.*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-6 Item">6</div>

    </div>
   
  );
}

export default EmployerCard;