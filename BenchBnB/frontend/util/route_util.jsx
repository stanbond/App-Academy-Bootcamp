import { connect } from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
    path={path}
    exact={exact}
    render={props => 
        !loggedIn ? <Component {...props}/> : <Redirect to='/' />}
    />
);

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    };
};

export default withRouter(connect(mapStateToProps, null)(Auth));