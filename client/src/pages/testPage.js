import React, {Component} from 'react';

import JobList from '../components/JobList/JobList';
import HireList from '../components/HireList/HireList';
import Footer from '../components/Footer/Footer';







class TestPage extends Component {

    render() {

        return (
         
            <div className="">

                <ul>
                    <HireList />
                    <JobList />
                </ul>
               

                <Footer />
            </div>

        );
    
      }

}

export default TestPage;