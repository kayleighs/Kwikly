import React from "react";
import "./hireList.css";

function HireList(props) {
  return (
    
    <li className="ks-container hire-list-container">
      
        <div className="hire-list-block hire-list-title">
          <p href="" className="hire-list-style hire-link">{props.username}Daniel LaZenberry</p>
        </div>

        <div className="hire-list-block">
          <button className="hire-list-style hire-button">Hire</button>
        </div>

        <div className="hire-list-block">
          <button className="hire-list-style hire-remove">X</button>
        </div>

    </li>
   
  );
}

export default HireList;