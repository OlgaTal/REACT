import React, {Component} from 'react';
import NewOption from './NewOption';
import {handleAddQuestion} from '../actions/questions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        option1: '',
        option2: '',
        toHome: false
    };
    handleChange = (e) => {
        const optionValue = e.target.value;
        const optionName = e.target.name;

        this.setState(() => ({
            [optionName]: optionValue
        }));
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const {option1, option2} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(option1, option2));

        this.setState(() => ({
            option1: '',
            option2: '',
            toHome: true
        }))
    };

    render() {
        const {option1, option2, toHome} = this.state;

        if (toHome === true) {
            return <Redirect to='/'/>;
        }

        return (
            <div>
                <h3 className='center'>Compose new Poll</h3>
                <form className='new-poll' onSubmit={this.handleSubmit}>
                    <NewOption optionName='option1' optionValue={option1} handleChange={this.handleChange}/>
                    <NewOption optionName='option2' optionValue={option2} handleChange={this.handleChange}/>
                    <button
                        className='btn'
                        type='submit'
                        disabled={option1 === '' || option2 === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion);