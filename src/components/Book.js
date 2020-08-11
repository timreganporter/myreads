import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, shelves }) => {
  console.log(book);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <ShelfChanger shelves={shelves} bookShelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;