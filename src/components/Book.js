import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, books, shelves, onChangeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          { book.imageLinks && book.imageLinks.thumbnail && (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          )}
          <ShelfChanger shelves={shelves} book={book} books={books} onChangeShelf={onChangeShelf}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;