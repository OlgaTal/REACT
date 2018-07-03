import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    const {userName} = props;
    return (
        <p className='welcome'>Welcome <span className='letter'>{userName}</span></p>
    )
}

Header.propTypes = {
    userName: PropTypes.string.isRequired
};