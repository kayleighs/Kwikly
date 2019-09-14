import React from 'react';
import "./style.css";
import Button from"../Button"

let buttonSearch = "Search"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      buttonSearch
  }
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Book Search</label>
          <input value={this.props.search} onChange={this.props.handleInputChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="ex: Lord of the Rings"></input>
        </div>
        <Button buttonClick={this.props.handleSearchBooks} buttonMessage={buttonSearch}/>
      </form>
    )
  }
}
export default SearchBar;