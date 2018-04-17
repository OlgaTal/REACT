import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import *  as api from '../utils/BooksAPI';
import {sortById} from '../utils/Sort';
import Book from "./Book";

class SearchBooks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            newBooks: [],
            message: 'Provide your search criteria'
        };
    }

    handleQueryChange(query) {
        const q = query.trim();
        if (q === "") {
            this.setState({
                query,
                newBooks: [],
                message: 'Provide your search criteria'
            });
            return;
        }
        this.setState({
            query,
            message: ''
        });
        api.search(q, 10).then(books => {
            let newBooks = [];
            if (books.error) {
                this.setState({newBooks, message: 'Refine your search criteria'});
            } else {
                this.setState({newBooks: books, message: ''});
            }
        });
    }

    updateBookShelf(selectedBooks, newBooks) {
        const sBooks = sortById(selectedBooks);
        const nBooks = sortById(newBooks);

        let i = 0;
        if (nBooks.length > 0) {
            sBooks.forEach(b => {
                while (i < nBooks.length && b.id > nBooks[i].id) {
                    i++;
                }
                if (i < nBooks.length && b.id === nBooks[i].id) {
                    nBooks[i].shelf = b.shelf;
                    i++;
                }
            });
        }
    }

    render() {
        const {query, newBooks, message} = this.state;
        const {books, shelfChangeHandler} = this.props;
        this.updateBookShelf(books, newBooks);

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               value={query}
                               onChange={(event) => this.handleQueryChange(event.target.value)}
                        />

                    </div>
                    <button className='query-remove' onClick={() => this.handleQueryChange("")}>
                        Remove
                    </button>
                </div>

                <div className="search-books-results">
                    {message === '' &&
                    <ol className="books-grid">
                        {newBooks.map(b =>
                            <li key={b.id}><Book book={b} shelfChangeHandler={shelfChangeHandler}/></li>
                        )}
                    </ol>
                    }
                    {message !== '' &&
                    <div>{message}</div>
                    }
                </div>
            </div>
        );
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    shelfChangeHandler: PropTypes.func.isRequired
};

export default SearchBooks;