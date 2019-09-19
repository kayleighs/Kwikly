import React from 'react';
import './sideBar.css';

function SideBar(){
    return(
        <div className="sideBar">
            <div className="contact-card">
                <img className="sideBarIcons" src="https://discover.king.com/wp-content/uploads/2016/04/large-map-icon.png">
                </img>
               
            </div>
            <div className="contact-card">
                <img className="sideBarIcons" src="https://icon-library.net/images/plan-icon-png/plan-icon-png-0.jpg">
                </img>
            </div>
            <div className="contact-card">
                <img className="sideBarIcons" src="https://icon-library.net/images/my-profile-icon-png/my-profile-icon-png-29.jpg">
                </img>
            </div>
        </div>
  
    )
}

export default SideBar;