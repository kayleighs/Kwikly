import React, {Component} from 'react';

//Components
import Footer from '../components/Footer/Footer';
import API from '../utils/API';


/*======================================================================*/
//This Page Gets It's Styling From globalStyles.css ctrl + f Apply-Page
/*======================================================================*/



class AppylyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJob: null,
            currentUser: null,
            comment: ""
        }
    }

    componentDidMount() {
        API.getjob(window.location.pathname.split("/").pop())
        .then(res => this.setState({ currentJob: res.data, currentUser: this.props.history.location.state.currentUser }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log(event.target)
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    jobApply = () => {
        //console.log(this.state.currentUser);
        if (!this.state.currentUser.appliedJobs.includes(this.state.currentJob._id)) {
          API.updateJobApplicants(this.state.currentJob._id, {
            $push: {
              appliedWorkers: {
                userId: this.state.currentUser._id,
                username: this.state.currentUser.username,
                comment: this.state.comment
              }
            }
          })
            .then(() => this.componentDidMount())
            .catch(err => console.log(err));
    
          API.updateUserApplicant(this.state.currentUser._id, {
            $push: {
              appliedJobs: this.state.currentJob._id
            }
          })
          .then(() => this.componentDidMount())
          .catch(err => console.log(err));

          window.location.href = "/";
        } else {
          console.log("you already applied!");
          window.location.href = "/";
        }
    }
    
    render() {
        return (
            
            <div className="">
                {this.state.currentJob ? (
                <div className="ks-container Apply-Page-Container-Styles">

                    <div className="Top-Apply-Main-Grid">
                        <div className="Top-Grid-1">
                            <ul>
                                <li>
                                    <img alt="image not found" src={this.state.currentJob.image} className="imgStyles"/> 
                                </li>    
                                <li>
                                    <h1 className="job-header-style">{this.state.currentJob.title}</h1>
                                </li>
                                <li>
                                    <h2 className="employer-header-style">{this.state.currentJob.employer.name}</h2>
                                </li>
                            </ul>
                        </div>
                        <div className="Top-Grid-2">
                            {/*Empty Grid Section To Create Spacing*/}
                        </div>
                        {!this.state.currentUser.appliedJobs.includes(this.state.currentJob._id) ? (
                            <div className="Top-Grid-3">
                                <button className="apply-button top-col-3" onClick={()=> this.jobApply()}>Apply Now</button>
                            </div>
                        ): <h2>You already applied!</h2>}
                    </div>

                    <div className="Bottom-Apply-Grid">
                        <div className="Bottom-Grid-1">
                            <h2 className="Apply-Header"><strong>Description</strong></h2>
                            <p className="Description-Area">{this.state.currentJob.description}</p>
                            <h2 className="Apply-Header"><strong>Leave A Message</strong></h2>
                            <textarea className="Comment-Section" placeholder="Leave a comment if you'd like" name="comment" form="usrform" onChange={this.handleInputChange} value={this.state.comment}></textarea>
                        </div>


                    </div>

                </div>
                ): !this.state.currentUser ?(
                    <div>
                        <p>You must be signed in to apply to this job!</p>
                        <p>Sign in <a href="/signin">here</a></p>
                    </div>
                ): (
                    <p>Seeking data...</p> 
                )}
                <Footer />
            </div>
       
        );
    }
};

export default AppylyPage;