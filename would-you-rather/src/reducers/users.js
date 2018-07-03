import {RECEIVE_USERS} from '../actions/users';
import {ADD_ANSWER, ADD_QUESTION} from '../actions/questions';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION :
            const author = state[action.question.author];
            return {
                ...state,
                [author.id]: {
                    ...author,
                    questions: author.questions.concat([action.question.id])
                    // questions: [...author.questions, action.question.id]
                }
            };
        case ADD_ANSWER :
            const authedUser = action.user;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };
        default :
            return state;
    }
}