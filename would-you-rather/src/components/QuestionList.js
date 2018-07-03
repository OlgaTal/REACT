import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import {voted} from '../utils/helpers';
import {Link} from 'react-router-dom';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "blue"
        };
    }

    handleBtnClick(e) {
        e.preventDefault();
        this.setState({
            selection: e.target.value
        });
    }

    render() {
        const {questions, authedUser} = this.props;
        const selection = this.state.selection === "answ";
        const qs = questions.filter(id => selection ? voted(id, authedUser) : !voted(id, authedUser));

        const class1 = !selection ? "btn-selected" : "";
        const class2 = selection ? "btn-selected" : "";

        return (
            <div>
                <div className="center">
                    <button className={`btn indent ${class1}`} value="unansw"
                            onClick={e => this.handleBtnClick(e)}>
                        Unanswered
                    </button>
                    <button className={`btn ${class2}`} value="answ"
                            onClick={e => this.handleBtnClick(e)}>
                        Answered
                    </button>
                </div>

                <ul className="dashboard-list">
                    {qs.map(id => (
                        <li key={id}>
                            <Link to={`/question/${id}`}>
                                <Question id={id} showDetails={false}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}) {
    return {
        questions: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(QuestionList);