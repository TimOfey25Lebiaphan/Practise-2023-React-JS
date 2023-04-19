import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleInput(event) {
    this.setState({ query: event.target.value });
  }
  
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.query);
    }
  }
  
  handleClick() {
    this.props.onSearch(this.state.query);
  }
  
  render() {
    return (
      <div className="search-bar">
        <input type="text"
               placeholder="Search books"
               value={ this.state.query }
               onChange={ this.handleInput }
               onKeyDown={ this.handleKeyDown } />
        <button onClick={ this.handleClick }>Search</button>
      </div>
    );
  }
}

export default SearchBar;