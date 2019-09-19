import React from "react";
import "./jobCard.css";

function JobCard(props) {
  return (
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
  );
}

export default JobCard;