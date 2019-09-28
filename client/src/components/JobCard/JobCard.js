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
            <h1 className="job-header-style">{props.title}</h1>
          </li>
          <li>
            <p><strong>Category: </strong>{props.category}</p>
          </li>
          <li>
            <p><strong>Description: </strong>{props.description}</p>
          </li>
        </ul>
      </div>
   
    </div>
   
  );
}

export default JobCard;