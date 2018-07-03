import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

class Login extends Component {
    state = {userId: ''};

    handleChange(e) {
        e.preventDefault();
        this.setState({
            userId: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state.userId;
        this.props.dispatch(setAuthedUser(user));
    }

    render() {
        const {users} = this.props;
        const {userId} = this.state;
        const name = userId === '' ? '' : users[userId].name;
        const avatar = userId === '' ? '../images/shim.png' : users[userId].avatarURL;

        return (
            <div className='center'>

                <h3>Login Page {name}</h3>
                <div className='poll'>
                    <div className='avatar-spacer'>
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar"
                        />
                    </div>

                    <div className='poll-info'>
                        <div>
                            <select value={userId} onChange={e => this.handleChange(e)}>
                                <option key='' value=''>Please Select</option>
                                {Object.keys(users).map(id =>
                                    <option key={id} value={id}>{users[id].name}</option>
                                )}
                            </select>
                            <br/>
                            <button className="btn" value="Login"
                                    disabled={userId === ''}
                                    onClick={e => this.handleSubmit(e)}>
                                Login
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);