import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import {hideLoading, showLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function addAnswer(qid, answer, user) {
    return {
        type: ADD_ANSWER,
        qid,
        answer,
        user
    }
}

export function handleAddQuestion(option1, option2) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText: option1,
            optionTwoText: option2,
            author: authedUser
        })
            .then(question => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());
        return saveQuestionAnswer({
            qid,
            answer,
            authedUser
        })
            .then(() => dispatch(addAnswer(qid, answer, authedUser)))
            .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}