import React from 'react';
import PropTypes from 'prop-types';

function ShelfChanger(props) {
    const {shelfValue, shelfChangeHandler} = props;
    const selectedValue = (!shelfValue || shelfValue === '') ? 'none' : shelfValue;
    return (
        <div className="book-shelf-changer">
            <select value={selectedValue} onChange={shelfChangeHandler}>
                <option value="" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

ShelfChanger.propTypes = {
    shelfValue: PropTypes.string,
    shelfChangeHandler: PropTypes.func.isRequired
};
export default ShelfChanger;