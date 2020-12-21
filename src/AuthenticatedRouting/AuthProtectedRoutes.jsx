import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginPage from '../components/LoginPage';

const AuthProtectedRoutes = (props) => {

    const userData = useSelector(state => state.auth);
    if (userData?.accessToken) {
        if (props.path === "/login") {
            return <Redirect to='/user' />
        } else {
            return (
                <Route path={props.path} exact={props.exact} component={props.component} />
            );
        }
    } else {
        if (props.path === "/login") {
            return <Route path="/login" component={LoginPage} />
        } else {
            return <Redirect to='/login' />
        }
    }

}

export default AuthProtectedRoutes;