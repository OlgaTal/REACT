import React, {Component} from 'react';
import {connect} from 'react-redux';
import TiMediaRecord from 'react-icons/lib/ti/media-record';
import TiArrowForward from 'react-icons/lib/ti/arrow-forward';
import {formatDate, formatQuestion} from '../utils/helpers';
import {handleSaveAnswer} from "../actions/questions";

class Answer extends Component {
    handleAnswer = (e) => {
        e.preventDefault();
        const {dispatch, question} = this.props;
        const answer = e.currentTarget.dataset['value'];

        dispatch(handleSaveAnswer(question.id, answer));
    };

    getOption(option) {
        const {question} = this.props;
        const optionText = question[option].text;
        return (
            <div className='poll-info-3'>
                <p><TiMediaRecord className='poll-icon-sm'/>{optionText}</p>
                <div className='poll-icons'>
                    <button className='reply-button' data-value={option} onClick={this.handleAnswer}>
                        <TiArrowForward className='poll-icon reply-icon'/>
                        <span>Vote</span>
                    </button>
                </div>
            </div>
        );
    }

    render() {
        const {question} = this.props;
        const {name, avatar, timestamp} = question;

        return (
            <div className='poll'>
                <div className='avatar-spacer'>
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                </div>
                <div className='poll-info'>
                    <div>
                        <span className='poll-info-1'>{name} is curious to know would you rather:</span>
                        <div className='poll-info-2'>{formatDate(timestamp)}</div>
                        {this.getOption("optionOne")}
                        {this.getOption("optionTwo")}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, {id}) {
    const question = questions[id];

    return {
        question: question
            ? formatQuestion(question, users[question.author])
            : null
    }
}

export default connect(mapStateToProps)(Answer);