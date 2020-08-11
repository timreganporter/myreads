import React from 'react';
import Bookshelf from './Bookshelf';

const Booklist = ({ books, shelves }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        { shelves.map( shelf => (
            <Bookshelf key={shelf.id} books={books} shelf={shelf} shelves={shelves} />
          ))
        }
      </div>
    </div>
    <div className="open-search">
      <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
    </div>
  </div>
);

export default Booklist;