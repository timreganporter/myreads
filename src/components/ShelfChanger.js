import React from 'react';

const ShelfChanger = ({ shelves, book, onChangeShelf, books }) => {
  const onChange = e => {
    onChangeShelf({ book: book, newShelf: e.target.value });
  }

  const bookShelf = () => {
    if (book.shelf) {
      return book.shelf;
    }
    // if coming from search, the book obj doesn't have shelf attribute
    const foundBook = books.filter( libraryBook => book.id === libraryBook.id )[0]
    return foundBook ? foundBook.shelf : "none";
  }

  return (
    <div className="book-shelf-changer">
      <select value={bookShelf()} onChange={onChange}>
        <option disabled>Move to...</option>
        { shelves.map( shelf => (
          <option
            key={shelf.id}
            value={shelf.id}
           >{shelf.name}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;