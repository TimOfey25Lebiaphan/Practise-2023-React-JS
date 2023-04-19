import React from 'react';

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <button onClick={ this.props.onLoadMore }>Load more</button>
      </div>
    );
  }
}

export default Pagination;