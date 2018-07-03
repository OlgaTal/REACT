import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import QuestionList from './QuestionList';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Logout from './Logout';
import Nav from './Nav'
import NotFound from "./NotFound";
import Header from "./Header";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {user} = this.props;
        return (
            user === null ?
                <Fragment>
                    <LoadingBar/>
                    <Login/>
                </Fragment>
                :
                <Router>
                    <Fragment>
                        <LoadingBar/>
                        <div className='container'>
                            <Nav/>
                            <Header userName={user.name}/>
                            <Switch>
                                <Route path='/' exact component={QuestionList}/>
                                <Route path='/question/:id' component={QuestionPage}/>
                                <Route path='/add' component={NewQuestion}/>
                                <Route path='/leaderboard' component={Leaderboard}/>
                                <Route path='/logout' component={Logout}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    const user = authedUser === null ? null : users[authedUser];
    return {
        // loading: authedUser === null,
        loading: true,
        user
    }
}

export default connect(mapStateToProps)(App);