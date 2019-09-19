import React from "react";
import "./userCard.css";

function UserCard(props) {
  return (

  <wrapper id="Profile-Page">
    <div className="card">
      
      <div className="content">
        <ul>

          <li>
            <img alt={props.JobTitle} src={props.image} className="imgStyles"/> 
          </li>    
          <li>
            <strong>Job Title:</strong> <h1>{props.JobTitle}</h1>
          </li>
          <li>
            <strong>Description:</strong> <p>{props.Description}</p>
          </li>
        </ul>
      </div>

    </div>
    </wrapper>
  );
}

export default UserCard;