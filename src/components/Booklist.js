import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const Booklist = ({ books, shelves, onChangeShelf }) => {
  const renderedBookshelves = shelves.map( shelf => (
    <Bookshelf
      key={shelf.id}
      books={books}
      shelf={shelf}
      shelves={shelves}
      onChangeShelf={onChangeShelf}
    />
  ));

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {renderedBookshelves}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'><button>Add a book</button></Link>
      </div>
    </div>
  );
}

export default Booklist;