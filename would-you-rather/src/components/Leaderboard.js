import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './User';

class Leaderboard extends Component {
    render() {
        const {users} = this.props;
        return (
            <div>
                <h3 className="center">Leaderboard</h3>
                <ul className="dashboard-list">
                    {users.map(id => (
                        <li key={id}>
                            <User id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users)
            .sort((a, b) => {
                const aCnt = Object.keys(users[a].answers).length;
                const bCnt = Object.keys(users[b].answers).length;
                return bCnt + users[b].questions.length - aCnt - users[a].questions.length})
    }
}

export default connect(mapStateToProps)(Leaderboard);