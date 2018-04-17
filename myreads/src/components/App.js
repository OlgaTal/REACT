import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import *  as api from '../utils/BooksAPI';
import '../App.css'
import BookList from './BookList';
import SearchBooks from './SearchBooks';

class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.shelfChangeHandler = this.shelfChangeHandler.bind(this);
    }

    componentDidMount() {
        this.getMyBooks();
    }

    getMyBooks() {
        api.getAll().then(books => this.setState({books}));
    }

    shelfChangeHandler(book, newShelf) {
        // api.update(book, newShelf).then(() => this.getMyBooks());
        api.update(book, newShelf);
        if (newShelf === 'none') {
            // remove book
            this.setState({books: this.state.books.filter((b) => b.id !== book.id)});
        } else if (!book.shelf || book.shelf === 'none') {
            // add book
            book.shelf = newShelf;
            this.state.books.push(book);
            this.setState({books: this.state.books});
        } else {
            // update book shelf
            const boo = this.state.books.filter((b) => b.id === book.id);
            if (boo && boo.length > 0) {
                boo[0].shelf = newShelf;
            }
            this.setState({books: this.state.books});
        }
    }

    render() {
        const {books} = this.state;
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BookList books={books}
                              shelfChangeHandler={this.shelfChangeHandler}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <SearchBooks books={books}
                                 shelfChangeHandler={this.shelfChangeHandler}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp;
