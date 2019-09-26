import React from 'react';
import "./searchModal.css";
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import * as ROUTES from '../../constants/routes';


class SearchModal extends React.Component {
  state = { show: false, category: "Miscellaneous" }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  onSubmit(newValue) {
    this.setState({ show: false, category: newValue })
  };

  render() {
    return (
      <main>
        <ReactModal isOpen={this.state.show} onRequestClose={this.hideModal}>
            <section className='modal-main'>
              <input type="text" id="search-bar" placeholder="Search for Jobs..."></input>
              <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Bar/Restaurant"}}} onClick={()=> this.onSubmit("Bar/Restaurant")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Restarant/Bar</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Pet Services"}}} onClick={()=> this.onSubmit("Pet Services")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Pet Services</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Household"}}} onClick={()=> this.onSubmit("Household")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Household</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Outdoors"}}} onClick={()=> this.onSubmit("Outdoors")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Outdoors</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Administrative"}}} onClick={()=> this.onSubmit("Administrative")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Administrative</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Labor"}}} onClick={()=> this.onSubmit("Labor")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Labor</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Art/Design/Photography"}}} onClick={()=> this.onSubmit("Art/Design/Photography")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Art/Design/Photography</Link></div>
                <div className="clearfix"><Link to={{pathname:ROUTES.LANDING, state:{category:"Miscellaneous"}}} onClick={()=> this.onSubmit("Miscellaneous")}>
                <img id="searchIcon" src={"https://img.icons8.com/cotton/2x/search--v2.png"}></img>Miscellaneous</Link></div>
              < button id="close" onClick={this.hideModal} > X</button >
            </section>
        </ReactModal>
        <button className="clearfix" type='button' id="open" onClick={this.showModal}>Search for Jobs.. </button>
      
      </main>
    )
  }
}


export default SearchModal;


