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

  switchCategory = (event, select) => {
    event.preventDefault();
    this.hideModal();
    this.props.newCategory(select)
  };
    
  render() {
    return (
      <main>
        <h1></h1>
        <Modal show={this.state.show} handleClose={this.hideModal} >
        <input type="text" id="search-bar" placeholder="Search for Jobs..."></input>
          <div className="clearfix"><Link onClick={(event)=> this.switchCategory(event, "Restaurant/Bar")}>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Restarant/Bar</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Pet Services</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Household</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Outdoors</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Administrative</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Labor</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Art/Design/Photography</Link></div>
          <div className="clearfix"><Link>
          <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Miscellaneous</Link></div>
          </Modal>
        <button className="clearfix" type='button' id="open" onClick={this.showModal}>Search for Jobs.. </button>
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

  
