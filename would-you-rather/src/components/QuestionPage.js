import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import Answer from "./Answer";
import {voted} from "../utils/helpers";
import NotFound from "./NotFound";

class QuestionPage extends Component {
    render() {
        const {id, question, votedOption} = this.props;
        if (!question) {
            return <NotFound/>;
        }
        return (
            <div>
                <h3 className='center'>Would You Rather....</h3>
                {votedOption === undefined ?
                    <Answer id={id}/>
                    :
                    <Question id={id}/>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props.match.params;
    const question = questions[id];
    const authedUser2 = users[authedUser];

    return {
        id,
        question,
        votedOption: question ? voted(question.id, authedUser2) : undefined
    }
}

export default connect(mapStateToProps)(QuestionPage);