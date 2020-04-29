import React from 'react';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <div id="terms">
      <p>By using my website, you do not agree to ANY kind of Terms of Service or Privacy policy</p>
      <p>
        This website isn&apos;t even protected by a form authenticity token,
        please don&apos;t hack me
      </p>
    </div>
  </div>
);

export default App;
