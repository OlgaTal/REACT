import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    constructor(props) {
        super(props);
        this.shelfChangeHandler = this.shelfChangeHandler.bind(this);
    }

    shelfChangeHandler(event) {
        this.props.shelfChangeHandler(this.props.book, event.target.value);
    }

    render() {
        const {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : book.imageLinks})`
                    }}/>
                    <ShelfChanger shelfValue={book.shelf} shelfChangeHandler={this.shelfChangeHandler}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join('\n') : ''}</div>
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        authors: PropTypes.array,
        img: PropTypes.string,
        shelf: PropTypes.string
    }),
    shelfChangeHandler: PropTypes.func.isRequired
};

export default Book;
