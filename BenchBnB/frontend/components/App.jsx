import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench/bench_form_container';

const App = () => (
    <div>
        <GreetingContainer/>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        <Route exact path='/' component={SearchContainer}/>
        <ProtectedRoute path='/benches/new' component={BenchFormContainer}/>
    </div>
);

export default App;