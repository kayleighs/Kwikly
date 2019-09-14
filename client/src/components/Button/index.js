import React from "react";
import "./style.css";

class Button extends React.Component{
  render() {
    return (
      <div>      
        <button  href={this.props.buttonLink} id={this.props.id} onClick={this.props.buttonClick} className="ks-button un-save-btn">{this.props.buttonMessage}</button>
      </div>
    )
  }
}
export default Button