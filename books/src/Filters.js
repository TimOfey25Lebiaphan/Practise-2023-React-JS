import React from 'react';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sortOptions = ['relevance', 'newest'];

class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <label htmlFor="category-select">Category:</label>
        <select id="category-select"
                value={ this.props.category }
                onChange={ this.props.onCategoryChange }>
          { categories.map((category) => (
            <option key={ category } value={ category }>{ category }</option>
          )) }
        </select>
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select"
                value={ this.props.sort }
                onChange={ this.props.onSortChange }>
          { sortOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          )) }
        </select>
      </div>
    );
  }
}

export default Filters;