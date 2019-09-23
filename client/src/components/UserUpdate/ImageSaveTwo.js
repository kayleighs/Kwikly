import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";

class ImageSaveTwo extends Component {

  state = {
    file: "",
    fileName: "",
    currentPic: {},
  };

  componentDidMount() {
    this.getCurrentPic()
  };

  getCurrentPic = () => {
    API.getUserByName(this.props.UserName)
    .then(res => this.setState({ currentPic: res.data[0].pic }))
    .catch(err => console.log(err));
  };

  addPhoto = (event) => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name
    })

  };

  seeTheState = event => {
    event.preventDefault();
    console.log(this.state)
  };

  onSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);

    axios.post("/add-photo", formData, {
      header: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res=> API.editUser(this.props.UserId, {
      
      pic: {
        name: res.data.fileName,
        path: res.data.filePath
      }
      
    })
      .then(() => this.componentDidMount())
      .catch(err => console.log(err)));     
  }
  
  render() {
    return (
      <div className="pic-div">
        <h1>Set photo for {this.props.UserName}</h1>
        <p>{this.props.UserId}</p>
        <form onSubmit={this.onSubmit}>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={(event)=> this.addPhoto(event)} />
            <label className="custom-file-label" htmlFor="customFile">
              {this.state.fileName}
            </label>
          </div>

          <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
          <button onClick={(event)=> this.seeTheState(event)} className="btn btn-primary">Current State</button>
        </form>
        {this.state.currentPic ? <div className="row">
            <div className="col-6 mb-5">
              <h3>{this.state.currentPic.fileName}</h3>
              <img style={{width: "100%"}} src={ this.state.currentPic.filePath } alt="No Pic Found" />
            </div>
          </div> : null
        }
      </div>
    )
  }
}

export default ImageSaveTwo;