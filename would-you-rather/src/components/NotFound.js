import React, {Component} from 'react';
import {connect} from "react-redux";

class NotFound extends Component {
    render() {
        return (
            <p className='not-found'>
                404 - Page Not Found<br/>
            </p>
        )
    }
}

export default connect(null)(NotFound);


