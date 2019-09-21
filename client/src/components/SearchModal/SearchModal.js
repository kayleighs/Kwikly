import React from 'react';
import "./searchModal.css";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class SearchModal extends React.Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <h1></h1>
          <Modal show={this.state.show} handleClose={this.hideModal} >
          <input type="text" id="search-bar" placeholder="Search for Jobs..."></input>
          <li className="jobCategories">
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Restarant/Bar</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Pet Services</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Household</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Outdoors</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Administrative</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Labor</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Art/Design/Photography</Link>
            <Link>
            <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Miscellaneous</Link>
        </li>
        </Modal>
          
          <button type='button' id="open" onClick={this.showModal}>Search for Jobs.. </button>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button id="close" onClick={handleClose}>X</button>
        </section>
      </div>
    );
  };
  
  export default SearchModal;

  
