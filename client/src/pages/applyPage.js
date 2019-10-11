import React, {Component} from 'react';

//Components
import Footer from '../components/Footer/Footer';


/*======================================================================*/
//This Page Gets It's Styling From globalStyles.css ctrl + f Apply-Page
/*======================================================================*/



function AppylyPage(props) {

    

    return (
     
        <div className="">
            <div className="ks-container">

                <div className="Top-Apply-Main-Grid">
                    <div className="Top-Grid-1">
                        <ul>
                            <li>
                                <img alt={props.JobTitle} src={props.image} className="imgStyles"/> 
                            </li>    
                            <li>
                              <h1 className="job-header-style">{props.title}Fiji Water Drinker</h1>
                            </li>
                            <li>
                              <h2 className="employer-header-style">{props.employer}Daniel</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="Top-Grid-2">
                        {/*Empty Grid Section To Create Spacing*/}
                    </div>
                    <div className="Top-Grid-3">
                        <button className="apply-button top-col-3">Apply Now</button>
                    </div>
                </div>

                <div className="Bottom-Apply-Grid">
                    <div className="Bottom-Grid-1">
                        <h2 className="Apply-Header"><strong>Description</strong></h2>
                        <p className="Description-Area">{props.description}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Diam sollicitudin tempor id eu nisl. Mi bibendum neque egestas congue quisque egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Diam sollicitudin tempor id eu nisl. Mi bibendum neque egestas congue quisque egestas.
                        </p>
                        <h2 className="Apply-Header"><strong>Leave A Message For The Employer</strong></h2>
                        <textarea className="Comment-Section" name="comment" form="usrform"></textarea>
                    </div>


                </div>

            </div>
            <Footer />
        </div>
    );
}

export default AppylyPage;