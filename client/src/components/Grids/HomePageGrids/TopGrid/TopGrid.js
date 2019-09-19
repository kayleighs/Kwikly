import React from "react";
import "./topGrid.css";

function TopGrid(props) {
  return <div className="grid-home-top dl-container">{props.children}</div>;
}

export default TopGrid;