import React, {Component} from 'react';
import API from "../utils/API";
import Gravatar from 'react-gravatar';

class SearchUsers extends Component {
  constructor(props) {
    super(props)
  };

  state = {
    userList: ""  
  };

  componentDidMount() {
    API.getUsers()
      .then(res=> this.setState({userList: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="container" id="all-users-page">
        <div className="row">
        {this.state.userList ? (
          <div className="col-10">
            {this.state.userList.map(res=> (
              <div className="card" key={res._id}>
                <div className="card-body">
                <Gravatar email={res.email} id="EmployerImg" alt="Pic missing" />
                  <p className="card-text">
                    name: {res.username}
                  </p>
                  <p className="card-text">
                    email: {res.email}
                  </p>
                  <p>
                    location: {res.address}
                  </p>
                  {res.isAdmin ? (
                    <p>Employer Profile</p>
                  ):(
                    <div className="seeker-data">
                      <p>Job-Seeker Profile</p>
                      <p># of Applied Jobs:{res.appliedJobs.length}</p>
                    </div>
                  )}
                  <a href={"/profile/" + res._id} className="btn btn-info">Profile</a>
                </div>
              </div>
            ))}
          </div>
        ): <p>Processing...</p>}
        </div>
        <div className="row">
          <div className="col-10">
            <a href="/" className="btn btn-info">Back Home</a>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchUsers;