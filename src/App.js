import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Booklist from './components/Booklist';
import Search from './components/Search';

const SHELVES = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    name: 'Want to Read'
  },
  {
    id: 'read',
    name: 'Read'
  }
];

class BooksApp extends React.Component {
  state = {
    books: []
  };

  onChangeShelf = ({ book, newShelf }) => {
    BooksAPI.update(book, newShelf)
      .then( () => {
        // update does not return an updated item or list
        // could call getBooks again (less code)
        // but rebuilding array to avoid an api call we can do without
        book.shelf = newShelf;
        this.setState(prevState => ({
          books: prevState.books.filter(b => book.id !== b.id).concat([book])
        }));
      });
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Booklist books={this.state.books} shelves={SHELVES} onChangeShelf={this.onChangeShelf} />
        </Route>
        <Route path="/search">
          <Search shelves={SHELVES} onChangeShelf={this.onChangeShelf} books={this.state.books}  />
        </Route>
      </div>
    )
  }
}

export default BooksApp
