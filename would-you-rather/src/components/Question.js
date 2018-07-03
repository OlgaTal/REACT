import React, {Component} from 'react';
import {connect} from 'react-redux';
import TiMediaRecord from 'react-icons/lib/ti/media-record';
import TiArrowForward from 'react-icons/lib/ti/arrow-forward';
import TiInputChecked from 'react-icons/lib/ti/input-checked';
import {formatDate, formatQuestion, voted} from '../utils/helpers';
import PropTypes from "prop-types";

class Question extends Component {
    getOption(option) {
        const {question, votedOption, showDetails} = this.props;
        const optionText = question[option].text;
        if (!votedOption) {
            return <p className='poll-info-3'><TiMediaRecord className='poll-icon-sm'/>{optionText}</p>;
        }

        let icon;
        if (votedOption === option) {
            icon = <TiInputChecked className='poll-icon poll-icon-checked'/>;
        } else {
            icon = <TiMediaRecord className='poll-icon-sm'/>;
        }
        return (
            <div className='poll-info-1'>
                <p className='poll-info-3'>{icon} {optionText}</p>
                {showDetails && this.getOptionDetails(question, option)}
            </div>
        );
    }

    getOptionDetails(question, option) {
        const optionCnt = {
            optionOne: question.optionOne.votes.length,
            optionTwo: question.optionTwo.votes.length
        };

        const total = optionCnt.optionOne + optionCnt.optionTwo;
        const percent = Math.round(100 * optionCnt[option] / total);

        return (
            <div className='poll-info-4'>
                <span className='poll-info-5'>Votes: </span>
                <span className='letter'>{optionCnt[option]}</span>
                <span className='poll-info-5'>It is </span>
                <span className='letter'>{percent}%</span>
                <span className='poll-info-5 poll-info-6'> of </span>
                <span className='letter'>{total}</span>
                <span className='poll-info-5 poll-info-6'> votes </span>
            </div>
        );
    }

    displayVoteBtn() {
        const {votedOption, showDetails} = this.props;
        const showButton = !showDetails || !votedOption;
        const showView = !showDetails && votedOption;
        return (
            showButton &&
            <div className='poll-icons'>
                <button className='reply-button'>
                    <TiArrowForward className='poll-icon reply-icon'/>
                    {showView ?
                        <span>View</span> :
                        <span>Vote</span>
                    }
                </button>
            </div>
        );
    }

    render() {
        const {question, votedOption} = this.props;
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
                        <span className='poll-info-1'>{name} {votedOption ? 'was' : 'is'} curious to know would you rather:</span>
                        <div className='poll-info-2'>{formatDate(timestamp)}</div>
                        {this.getOption("optionOne")}
                        {this.getOption("optionTwo")}
                    </div>

                    {this.displayVoteBtn()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id, showDetails}) {
    const question = questions[id];
    const authedUser2 = users[authedUser];

    return {
        authedUser: authedUser2,
        question: question
            ? formatQuestion(question, users[question.author])
            : null,
        votedOption: question ? voted(question.id, authedUser2) : undefined,
        showDetails: showDetails !== false
    }
}

Question.propTypes = {
    id: PropTypes.string.isRequired,
    showDetails: PropTypes.bool
};

export default connect(mapStateToProps)(Question);