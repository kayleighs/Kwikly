import React from "react";
import "./jobList.css";

function JobList(props) {
  return (
    
    <li className="ks-container job-list-container">
      
      <div className="job-list-block job-list-title">
        <p href="" className="job-list-style job-link">{props.title}Pizza Maker</p>
      </div>
      <div className="job-list-block job-time">
        <time dateTime={props.date} className="job-list-style">{props.date} 10/11/2019</time>
      </div>
      <div className="job-list-block hired-num">
        <p className="job-list-style">{props.hiredWorkers} 20</p>
      </div>

    </li>
   
  );
}

export default JobList;