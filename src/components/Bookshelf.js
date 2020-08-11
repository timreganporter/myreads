import React from 'react';
import Book from './Book';

const Bookshelf = ({ books, shelf, shelves, onChangeShelf }) => {
  const renderedBooks = books.filter( book => (book.shelf === shelf.id))
    .map(book => (
      <Book key={book.id} book={book} books={books} shelves={shelves} onChangeShelf={onChangeShelf} />
    ));

  return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{ shelf.name }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {renderedBooks}
            </ol>
          </div>
        </div>

  );
}

export default Bookshelf;