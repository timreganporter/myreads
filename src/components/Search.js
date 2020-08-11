import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    debouncedQuery: '',
    results: []
  };

  onQueryChange = event => {
    this.setState({ query: event.target.value })

    BooksAPI.search(event.target.value)
      .then( results => {
        results && !results.error
          ? this.setState({ results: results })
          : this.setState({ results: []});
      })
      .catch( err => {
        console.log(err);
        this.setState({ results: []});
      });
  }

  render() {
    const {shelves, onChangeShelf, books} = this.props;

    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={this.onQueryChange}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.state.results && this.state.results.map( book => (
                    <Book key={book.id} book={book} books={books} shelves={shelves} onChangeShelf={onChangeShelf} />
                  ))
                }
              </ol>
            </div>
          </div>
    );
  }
}

export default Search;