import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './employerCard.css';
//import Button from '../Buttons/Button';
import DMicon from './DMicon/DM-Icon.png';
import Gravatar from 'react-gravatar';
//import ReactModal from 'react-modal';


  class EmployerCard extends React.Component {
componentDidMount() {
  const sInput = document.getElementById("statementInputBox");
  const sInputS = document.getElementById("seekingOrSkillsInputBox");
  const saveButton = document.getElementById("saveButton");
  const saveButtonS = document.getElementById("saveButtonS");
  sInput.style.display = "none";
  saveButton.style.display="none";
  sInputS.style.display = "none";
  saveButtonS.style.display = "none";
};
//For Statment
toggleInputAbout(){
  const s = document.getElementById("statement");
  const sInput = document.getElementById("statementInputBox");
  const editButton = document.getElementById("editButton");
  const saveButton = document.getElementById("saveButton");
  if (s.style.display === "none") {
    s.style.display = "block";
    sInput.style.display = "none";
    saveButton.style.display ="none";
    editButton.style.display="block";
  } else {
    s.style.display = "none";
    sInput.style.display = "block";
    saveButton.style.display = "block";
    editButton.style.display = "none";
  }
};

onSave=()=> {
  const s = document.getElementById("statement");
  const sInput = document.getElementById("statementInputBox");;
  const editButton = document.getElementById("editButton")
  const saveButton = document.getElementById("saveButton");
  this.props.updateStatement();
  s.style.display = "block";
  sInput.style.display = "none";
  editButton.style.display ="block";
  saveButton.style.display = "none";
};
//For Skills or Seeking
toggleInputAboutS() {
  const sS = document.getElementById("seekingOrSkills");
  const sInputS = document.getElementById("seekingOrSkillsInputBox");
  const editButtonS = document.getElementById("editButtonS");
  const saveButtonS = document.getElementById("saveButtonS");
  if (sS.style.display === "none") {
    sS.style.display = "block";
    sInputS.style.display = "none";
    saveButtonS.style.display = "none";
    editButtonS.style.display = "block";
  } else {
    sS.style.display = "none";
    sInputS.style.display = "block";
    saveButtonS.style.display = "block";
    editButtonS.style.display = "none";
  }
};
onSaveS = () => {
  const sS = document.getElementById("seekingOrSkills");
  const sInputS = document.getElementById("seekingOrSkillsInputBox");;
  const editButtonS = document.getElementById("editButtonS")
  const saveButtonS = document.getElementById("saveButtonS");
  this.props.updateSeeking();
  sS.style.display = "block";
  sInputS.style.display = "none";
  editButtonS.style.display = "block";
  saveButtonS.style.display = "none";
};
render() {
  return (
    <div className="Grid-Employer-Card">

      {/*This section holds user image, first & last name and bussiness name*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-1 Item">
       <Gravatar email={this.props.email} id="EmployerImg" alt={this.props.id} />
        <p className="ks-container color-3-blue">Employer</p>
        <p className="ks-container color-3-blue">{this.props.username}</p>
        <p className="ks-container color-3-blue">{this.props.email}</p>
      </div>
    
      {/*This section gives a list of positions that need to be filled*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-2 Item ks-container color-4-gray">
        <h2>Seeking:</h2>
        <a id="saveButtonS" className="float-right edit-button " onClick={this.onSaveS}>Save</a>
        <a id="editButtonS" className="float-right edit-button" onClick={this.toggleInputAboutS}>Edit</a>
        <textarea id="seekingOrSkillsInputBox" name="newSeekingOrSkills" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.props.onChange} value={this.props.newSeekingOrSkills}></textarea>
        <p id="seekingOrSkills">{this.props.seekingOrSkills}</p>
      </div>

      {/*Badge and DM section*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-3 Item">
      
        <div className="Item-3-Grid-1 ks-container color-3-blue">
          <h2 className="Item-3-Grid2-1 coming-soon-styles text-center">FEATURE COMING SOON!*Badges*</h2>

          <div className="Item-3-Grid2-2">
            
          </div>
          

        </div>
        <img className="DM-Img" alt="Direct Message Icon" src={DMicon}></img>

      </div>

      {/*This section gives a location of where the employer is based out of and a map of that location.*/}
      {/*NOTE! the current map image is a placeholder*/}
      {/*This Item holds a Nested Grid!*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-4  color-3-blue ks-container">  {/*Add the class "Item" when the map is rdy*/}
        
        <div className="Item-4-Grid-1">  {/*The Item-4-Grid-1 & Item-4-Grid-2 styles are commented out in the employerCard.css file*/}
          <h2>{this.props.address}</h2>
        </div>
        <div className="Item-4-Grid-2">
          {/* <img id="MapImg" src={this.props.location} alt={this.props.id}></img>  */} 
        </div>  
       
      </div>

      {/*This section holds the about information of the business/employer*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-5 Item ks-container color-4-gray">
        <h2>About Us:</h2>
        <a id="saveButton" className="float-right edit-button " onClick={this.onSave}>Save</a>
        <a id="editButton" className="float-right edit-button" onClick={this.toggleInputAbout}>Edit</a>
        <textarea id="statementInputBox" name="newStatement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.props.onChange} value={this.props.newStatement}></textarea>
        <p id="statement">{this.props.statement}</p>
      </div>

      {/*This section holds two buttons.*/} 
      {/*Button num1 displays the employer's current job postings.*/} 
      {/*Button num2 creates a new job posting.*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-6 Item color-3-blue ks-container">
        {/* <button className="Item-6-Grid-1 button-style"><p>Current Jobs</p></button> */}
        <Link to={ROUTES.POSTJOB} className="Item-6-Grid-2 dl-form-button job-post-button-style text-center"> Create A  Job!</Link>
      </div>

    </div>
   
  );
    }
};

export default EmployerCard;