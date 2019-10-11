import React from "react";
import "./jobCard.css";

function JobCard(props) {
  return (
    
    <div className="card">
      
      <div className="content job-card-main-grid">
        <div className="job-card-main-col-1">
          <div className="top-job-card-grid">
            <div className="top-col-1"></div>
            <div className="top-col-2"></div>
            <button className="apply-button top-col-3">Apply Now</button>
          </div>
        </div>

        <div className="job-card-main-col-2">
          <ul>
            <li>
              <img alt={props.JobTitle} src={props.image} className="imgStyles"/> 
            </li>    
            <li>
              <h1 className="job-header-style">{props.title}</h1>
            </li>
            <li>
              <h2 className="employer-header-style">{props.employer}</h2>
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
   
    </div>
   
  );
}

export default JobCard;