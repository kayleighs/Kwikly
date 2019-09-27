import React from "react";
import "./userCard.css";
import DMicon from './DMicon/DM-Icon.png';
import Gravatar from 'react-gravatar';


class UserCard extends React.Component {
  componentDidMount() {
    const sInput = document.getElementById("statementInputBox");
    const sInputS = document.getElementById("seekingOrSkillsInputBox");
    const saveButton = document.getElementById("saveButton");
    const saveButtonS = document.getElementById("saveButtonS");
  // document.getElementById("statementInputBox").defaultValue=this.props.statement

   sInput.style.display = "none";
    saveButton.style.display = "none";
   sInputS.style.display = "none";
    saveButtonS.style.display = "none";
  };
  //For Statment
  toggleInputAbout() {
    const s = document.getElementById("statement");
    const sInput = document.getElementById("statementInputBox");
    const editButton = document.getElementById("editButton");
    const saveButton = document.getElementById("saveButton");
    if (s.style.display === "none") {
      s.style.display = "block";
      sInput.style.display = "none";
      saveButton.style.display = "none";
      editButton.style.display = "block";
    } else {
      s.style.display = "none";
      sInput.style.display = "block";
      saveButton.style.display = "block";
      editButton.style.display = "none";
    }
  };

  onSave = () => {
    const s = document.getElementById("statement");
    const sInput = document.getElementById("statementInputBox");;
    const editButton = document.getElementById("editButton")
    const saveButton = document.getElementById("saveButton");
    this.props.updateStatement();
    s.style.display = "block";
    sInput.style.display = "none";
    editButton.style.display = "block";
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
    this.props.updateSkills();
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
        {/* <img id="EmployerImg" src={props.image} alt={props.id}></img> */}
        <Gravatar email={this.props.email} id="EmployerImg" alt={this.props.id} />
        <p className="ks-container color-1-red">Employee</p>
        <p className="ks-container color-2-yellow">{this.props.username}</p>
        <p className="ks-container color-3-blue">{this.props.email}</p>
      </div>

      {/*This section gives a list of skills*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-2 Item ks-container color-2-yellow">
        <h2>Skills:</h2>
        <a id="saveButtonS" className="float-right edit-button " onClick={this.onSaveS}>Save</a>
        <a id="editButtonS" className="float-right edit-button" onClick={this.toggleInputAboutS}>Edit</a>
        <p id="seekingOrSkills">{this.props.seekingOrSkills}</p>
        <div>
          <textarea id="seekingOrSkillsInputBox" name="newSeekingOrSkills" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.props.onChange} value={this.props.newSeekingOrSkills} defaultValue={this.props.seekingOrSkills}>{this.props.seekingOrSkills}</textarea>
        </div>
        
      </div>

      {/*Badge and DM section*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-3 Item">

        <div className="Item-3-Grid-1 ks-container">
          <h2 className="Item-3-Grid2-1">Badges:</h2>

          <div className="Item-3-Grid2-2">
            <div class="div1 badge-icon"> </div>
            <div class="div2 badge-icon"> </div>
            <div class="div3 badge-icon"> </div>
            <div class="div4 badge-icon"> </div>
            <div class="div5 badge-icon"> </div>
            <div class="div6 badge-icon"> </div>
            <div class="div7 badge-icon"> </div>
            <div class="div8 badge-icon"> </div>
            <div class="div9 badge-icon"> </div>
            <div class="div10 badge-icon"> </div>
            <div class="div11 badge-icon"> </div>
            <div class="div12 badge-icon"> </div>
            <div class="div13 badge-icon"> </div>
            <div class="div14 badge-icon"> </div>
            <div class="div15 badge-icon"> </div>
            <div class="div16 badge-icon"> </div>
            <div class="div17 badge-icon"> </div>
            <div class="div18 badge-icon"> </div>
          </div>


        </div>
        <img className="DM-Img" alt="Direct Message Icon" src={DMicon}></img>

      </div>

      {/*This section gives a location of where the employer is based out of and a map of that location.*/}
      {/*NOTE! the current map image is a placeholder*/}
      {/*This Item holds a Nested Grid!*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-4 Item">

        <div className="Item-4-Grid-1">
          <h2>{this.props.address}</h2>
        </div>
        <div className="Item-4-Grid-2">
          <img id="MapImg" src={this.props.location} alt={this.props.id}></img>
        </div>

      </div>

      {/*This section holds the about information of the business/employer*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-5 Item ks-container color-1-red">
        <h2>About Me:</h2>
        <a id="saveButton" className="float-right edit-button " onClick={this.onSave}>Save</a>
        <a id="editButton" className="float-right edit-button" onClick={this.toggleInputAbout}>Edit</a>
        <p id="statement">{this.props.statement}</p>
        <textarea id="statementInputBox" name="newStatement" type="text" rows="3" placeholder="..." className="desc-input form-control" onChange={this.props.onChange} value={this.props.newStatement} defaultValue={this.props.statement}>{this.props.statement}</textarea>

      </div>

      {/*This section holds two buttons.*/}
      {/*Button num1 displays the employer's current job postings.*/}
      {/*Button num2 creates a new job posting.*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-6 Item">
        <button className="Item-6-Grid-1 button-style"><p>Job Completed</p></button>

      </div>

    </div>

  );
  }
}

export default UserCard