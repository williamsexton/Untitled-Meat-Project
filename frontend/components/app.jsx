import React from 'react';
import { Switch, Redirect,Route} from 'react-router-dom'
import { AuthRoute, } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryShowContainer from './home/category_show_container';
import ProductShowContainer from './home/product_show_container';
import Home from './home/home'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/categories/:id" component={CategoryShowContainer} />
      <Route path="/products/:id" component={ProductShowContainer} />
      <Route exact path="/" component={Home} />
      <Redirect path="/" to="/" />
    </Switch>
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
