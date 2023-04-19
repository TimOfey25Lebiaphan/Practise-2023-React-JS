import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import BookCard from './BookCard';
import Pagination from './Pagination';
import BookDetails from './BookDetails';

const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
const APIkey = 'AIzaSyCa9sL35xfHvME8fuDDEvdy_FPS-BJQz48';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selectedBook: null,
      category: 'all',
      sort: 'relevance',
      query: '',
      startIndex: 0,
      totalBooks: 0,
    };
    this.searchBooks = this.searchBooks.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleBookSelect = this.handleBookSelect.bind(this);
  }
  
  async searchBooks(query) {
    //запросы к API
    
  }
  
  handleCategoryChange(event) {
    this.setState({ category: event.target.value }, () => {
      this.searchBooks(this.state.query);
    });
  }
  
  handleSortChange(event) {
    this.setState({ sort: event.target.value }, () => {
      this.searchBooks(this.state.query);
    });
  }
  
  handleLoadMore() {
    this.setState({ startIndex: this.state.startIndex + 30 }, () => {
      this.searchBooks(this.state.query);
    });
  }
  
  handleBookSelect(book) {
    this.setState({ selectedBook: book });
  }
  
  render() {
    if (this.state.selectedBook) {
      return <BookDetails book={ this.state.selectedBook } />;
    }
    return (
      <div className="App">
           <header>
        <h1>Book Searcher</h1>
        <form>
        <SearchBar onSearch={ this.searchBooks } />
        <Filters category={ this.state.category }
                 sort={ this.state.sort }
                 onCategoryChange={ this.handleCategoryChange }
                 onSortChange={ this.handleSortChange } />
        </form>
    </header>

        <div className="book-cards">
          { this.state.books.map((book) => (
            <BookCard key={ book.id }
                      book={ book }
                      onSelect={ () => this.handleBookSelect(book) } />
          )) }
        </div>
        <div className="book-count">
          { this.state.totalBooks } books found
        </div>
        { this.state.books.length < this.state.totalBooks && (
          <Pagination onLoadMore={ this.handleLoadMore } />
        ) }
      </div>
    );
  }
}

export default App;