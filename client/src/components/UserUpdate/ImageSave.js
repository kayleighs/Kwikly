import React, { useState } from "react";
import API from "../../utils/API";
import axios from "axios";
require("dotenv").config();

const ImageSave = (props) => {
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Choose a photo");
  const [uploadedFile, setUploadedFile] = useState({});
  
  const addPhoto = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/add-photo", formData, {
        header: {
          "Content-Type": "multipart/form-data"
        }
      });

      const {fileName, filePath} = res.data;

      setUploadedFile({ fileName, filePath })
        
    } catch(err) {
      if (err.response.status === 500) {
        console.log("Problem with server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  }

  return (
      <div className="pic-div">
        <h1>Set photo for {props.UserName}</h1>
        <form onSubmit={onSubmit}>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={addPhoto} />
            <label className="custom-file-label" htmlFor="customFile">
              {fileName}
            </label>
          </div>

          <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
        </form>
        {uploadedFile ? <div className="row">
            <div className="col-6 mb-5">
              <h3>{ uploadedFile.fileName }</h3>
              <img style={{width: "100%"}} src={uploadedFile.filePath} alt="No Pic Found" />
            </div>
          </div> : null
        }
      </div>
  )
}

export default ImageSave;