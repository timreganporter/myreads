import React from 'react';

const ShelfChanger = ({ shelves, bookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        { shelves.map( shelf => (
          <option
            key={shelf.id}
            value={shelf.id}
            selected={bookShelf===shelf.id}
           >{shelf.name}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;