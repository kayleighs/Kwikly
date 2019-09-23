import React from "react";
import "./userCard.css";

function UserCard(props) {
  return (

  
    <div className="userCard">
      
      <div className="userContent">
        <ul>

          <li>
            <img alt={props.JobTitle} src={props.image} className="imgStyles"/> 
          </li>    
          <li>
            <strong id="name">Name:</strong> <h1>{props.username}</h1>
          </li>
          <li>
            <br></br>
            <strong id="job-title">Job Title:</strong> <p>{props.Description}</p>
          </li>
          <li>
            <strong id="skills">Skills:</strong> <p>{props.Description}</p>
          </li>
        </ul>
      </div>

    </div>
   
  );
}

export default UserCard;