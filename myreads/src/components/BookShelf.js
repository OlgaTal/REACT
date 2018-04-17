import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

class BookShelf extends React.Component {
    render() {
        const {books, bookShelf, shelfChangeHandler} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b =>
                            <li key={b.id}><Book book={b} shelfChangeHandler={shelfChangeHandler}/></li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

BookShelf.propTypes = {
    bookShelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    shelfChangeHandler: PropTypes.func.isRequired
};

export default BookShelf;