import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import CategoryShowContainer from './category/category_show_container';
import ProductShowContainer from './product/product_show_container';
import CheckoutContainer from './checkout/checkout_container';
import OrderShowContainer from './order/order_show_container';
import SearchContainer from './search/search_container';
import Home from './home/home'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import OrderIndexContainer from './order/order_index_container';

const App = () => (
  <div id="app" className="hidden">
    {/* <embed className="music" src="https://meat-project-seed.s3-us-west-1.amazonaws.com/nightmare-song.mp3" /> */}
    {/* <object className="music" data="https://meat-project-seed.s3-us-west-1.amazonaws.com/nightmare-song.mp3"></object> */}
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/checkout" component={CheckoutContainer} />
      <Route path="/categories/:id" component={CategoryShowContainer} />
      <Route path="/search" component={SearchContainer} />
      <ProtectedRoute path="/orders/:id" component={OrderShowContainer} />
      <ProtectedRoute path="/orders" component={OrderIndexContainer} />
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
