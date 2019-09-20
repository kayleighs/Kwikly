import React from "react";
import "./userEmployerCard.css";

function UserCard(props) {
  return (

  
    <div className="userCard">
      
      <div className="userContent">
        <ul>

          <li>
            <img alt={props.JobTitle} src={props.image} className="imgStyles"/> 
          </li>    
          <li>
            <strong id="name">Business Name:</strong> <h1>{props.BusinessTitle}</h1>
          </li>
          <li>
            <br></br>
            <strong id="job-title">Job Title:</strong> <p>{props.Description}</p>
          </li>
          <li>
            <strong id="skills">Skills Required:</strong> <p>{props.Description}</p>
          </li>
        </ul>
      </div>

    </div>
   
  );
}

export default UserCard;