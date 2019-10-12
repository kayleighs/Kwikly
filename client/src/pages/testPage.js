import React, {Component} from 'react';

import JobList from '../components/JobList/JobList';
import Footer from '../components/Footer/Footer';







class TestPage extends Component {

    render() {

        return (
         
            <div className="">

                <ul>
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                    <JobList />
                </ul>
               

                <Footer />
            </div>

        );
    
      }

}

export default TestPage;