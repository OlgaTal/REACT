import React, {Component} from 'react';
import PropTypes from "prop-types";

class NewOption extends Component {
    render() {
        const {optionName, optionValue, handleChange} = this.props;
        const optionLeft = 280 - optionValue.length;
        const text = optionLeft <= 100 ? optionLeft : '&nbsp;';

        return (
            <div>
                <textarea
                    placeholder={optionName + ': '}
                    value={optionValue}
                    name={optionName}
                    onChange={handleChange}
                    className='textarea'
                    maxLength={280}
                />

                <div className='poll-length' dangerouslySetInnerHTML={{__html: text}}>
                </div>
            </div>
        )
    }
}

NewOption.propTypes = {
    optionName: PropTypes.string.isRequired,
    optionValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default NewOption;