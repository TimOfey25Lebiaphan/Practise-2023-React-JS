import React from 'react';

class BookCard extends React.Component {
  render() {
    const { cover, title, authors, category } = this.props.book;
    return (
      <div className="book-card" onClick={ this.props.onSelect }>
        <img src={ cover } alt={ title } />
        <div className="book-details">
          <h3>{ title }</h3>
          <p>Category: { category }</p>
          <p>Author: { authors.join(', ') }</p>
        </div>
      </div>
    );
  }
}

export default BookCard;