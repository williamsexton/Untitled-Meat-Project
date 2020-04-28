import GreetingContainer from "./greeting/greeting_container";
import React from "react";
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import {Link} from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <NavBarContainer />

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <div id="terms">
        <p>By using my website, you do not agree to ANY kind of Terms of Service or Privacy policy</p>
        <p>This website isn't even protected by a form authenticity token, please don't hack me</p>
        </div>
    </div>
);

export default App