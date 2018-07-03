import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class User extends Component {
    render() {
        const {user} = this.props;
        if (user === null) {
            return <p>This User doesn't exist</p>;

        }
        const {name, avatarURL, answers, questions} = user;
        const askedCnt = questions.length === 0 ? 'no' : questions.length;
        const ansCnt = Object.keys(answers).length;

        return (
            <div className='poll'>
                <div className='avatar-spacer'>
                    <img
                        src={avatarURL}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />
                </div>
                <div className='poll-info'>
                    <div>
                        <span className='poll-info-1'>{name}</span>
                        <div className='poll-info-3'>
                            <span className='letter indent'>Qs:</span>
                            <span>Asked <span className='letter'> {askedCnt}</span>questions</span>
                        </div>
                        <div className='poll-info-3'>
                            <span className='letter indent'>As:</span>
                            <span>Answered <span className='letter'> {ansCnt}</span>questions</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        user: users[id]
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(User);