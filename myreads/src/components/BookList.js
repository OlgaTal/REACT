import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

class BookList extends React.Component {
    render() {
        const {books, shelfChangeHandler} = this.props;
        const shelves = [
            ['Currently Reading', 'currentlyReading'],
            ['Want to Read', 'wantToRead'],
            ['Read', 'read']
        ];

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((s) =>
                            <BookShelf key={s[1]} bookShelf={s[0]}
                                       books={books.filter(book => book.shelf === s[1])}
                                       shelfChangeHandler={shelfChangeHandler}/>
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="close-search">Add a book</Link>

                    {/*<Link to={{
                        pathname: '/search',
                        search: '?q=' + query,
                        state: {query}
                    }} className="close-search">Add a book</Link>*/}

                </div>
            </div>
        );
    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    shelfChangeHandler: PropTypes.func.isRequired
};

export default BookList;
