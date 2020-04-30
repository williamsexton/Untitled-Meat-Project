import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const NavBar = (props) => {
  return (
    <header id="banner">
      <div id="dummy" />
      <div id="banner-link">
        <Link to="/">
          Untitled Meat Project
        </Link>
      </div>
      <div id="icons">
        <Switch>
          <Route path="/login" component={null} />
          <Route path="/signup" component={null} />
          <Route path="/" component={GreetingContainer} />
        </Switch>
      </div>
    </header>
  );
};
export default NavBar;
