import {Component} from 'react';
import {setAuthedUser} from "../actions/authedUser";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthedUser(null));
        this.props.history.push('/');
    }

    render() {
        return "";
    }
}

export default withRouter(connect(null)(Logout));