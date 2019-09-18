import React from "react";
import "./bottomGrid.css";

function BottomGrid(props) {
  return <div className="grid-home-bottom dl-container content-center">{props.children}</div>;
}

export default BottomGrid;