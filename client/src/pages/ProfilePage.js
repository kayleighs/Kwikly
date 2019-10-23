import React, {Component} from 'react';
import API from "../utils/API";
import Gravatar from 'react-gravatar';

class ProfilePage extends Component {
  constructor(props) {
    super(props)
  };

  state = {
    currentUser: "",
    visitor: null,
    message: ""
  };

  componentDidMount() {
    API.getUser(window.location.pathname.split("/").pop())
      .then(res=> this.setState({ currentUser: res.data }))
      .catch(err => console.log(err));
  }

  giveBadge = (badgeName) => {
    //console.log(document.getElementsByClassName("navbar")[0].attributes[1].value);
    if (document.getElementsByClassName("navbar")[0].attributes[1].value !== "non-user") {
      API.getUserByEmail(document.getElementsByClassName("navbar")[0].attributes[1].value)
        .then((res)=> {
          //console.log(res.data[0])
          if (!res.data[0].badgesGiven.includes(this.state.currentUser._id)) {
            API.editUser(this.state.currentUser._id, {
              $push:{
                badges: {
                  message: badgeName,
                  provider: document.getElementsByClassName("navbar")[0].attributes[1].value
                }
              }
            })
              .then(() => this.componentDidMount())
              .then(()=> this.setState({message: "badge given to " + this.state.currentUser.username}))
              .catch(err => console.log(err));

            API.editUserByEmail(document.getElementsByClassName("navbar")[0].attributes[1].value, {
              $push: {
                badgesGiven: this.state.currentUser._id
              }
            })
              .catch(err => console.log(err));
          } else if (res.data[0].badgesGiven.includes(this.state.currentUser._id)) {
            this.setState({message: "You already gave this user a badge!"})
          }
        })

    } else {
      this.setState({message: "You need to be logged in to give a badge!"})
    }

  } 
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Gravatar email={this.state.currentUser.email} id="EmployerImg"  alt="Img not found" />
            <h3>Public Profile Page for {this.state.currentUser.username}</h3>
            <p>Email: {this.state.currentUser.email}</p>
            <p>Statement: {this.state.currentUser.statement}</p>
            <button className="btn btn-primary" onClick={()=> console.log(this.state)}>See state</button>
          </div>
        </div>
        {this.state.currentUser.badges ? (
          <div className="row">
            <div className="col-10">
              {this.state.currentUser.badges.map(res=> (
                <div className="badge-div d-inline-block" key={res._id}>
                  <p>{res.message}</p>
                  <img src="/images/badges/generic-badge.png" alt="badge missing" style={{width: "100px"}}/>
                </div>
              ))}
            </div>
          </div>
        ): null}
        <div className="row">
          {this.state.currentUser.isAdmin ? (
            <div className="col-10">
              <button onClick={()=> this.giveBadge("Generous Pay")} className="btn btn-success">Generous Pay</button>
              <button onClick={()=> this.giveBadge("Trustworthy")} className="btn btn-success">Trustworthy</button>
              <button onClick={()=> this.giveBadge("Friendly")} className="btn btn-success">Friendly</button>
              <p>{this.state.message}</p>
            </div>
          ):(
            <div className="col-10">
              <button onClick={()=> this.giveBadge("Hard-Working")} className="btn btn-success">Hard-working</button>
              <button onClick={()=> this.giveBadge("Reliable")} className="btn btn-success">Reliable</button>
              <button onClick={()=> this.giveBadge("Friendly")} className="btn btn-success">Friendly</button>
              <p>{this.state.message}</p>
            </div>
          )}
          
        </div>
        <div className="row">
          <a href="/users">Back to Users</a>
        </div>
      </div>
    )
  }
}

export default ProfilePage;