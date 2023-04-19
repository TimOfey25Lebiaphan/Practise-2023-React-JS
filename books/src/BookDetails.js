import React from 'react';

class BookDetails extends React.Component {
  render() {
    const { cover, title, authors, categories, description } = this.props.book;
    return (
      <div className="book-details-page">
        <img src={ cover } alt={ title } />
        <div className="book-details">
          <h2>{ title }</h2>
          <p><strong>Categories:</strong> { categories.join(', ') }</p>
          <p><strong>Authors:</strong> { authors.join(', ') }</p>
          <p><strong>Description:</strong> { description }</p>
        </div>
      </div>
    );
  }
}

export default BookDetails;