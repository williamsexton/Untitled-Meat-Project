import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import BoxContainer from '../box/box_container';

const NavBar = (props) => {
  const toggleNightmare = () => {
    const root = document.getElementById("root");
    if (root.className === "nightmare"){
      root.className = "";
    } else root.className = "nightmare";
  }
  return (
    <header id="banner">
      <div id="dummy">
        <button
        id="nightmare"
        onClick={toggleNightmare}> NIGHTMARE MODE BUTTON <br/> PUSH AT YOUR OWN RISK</button> 
        {(props.boxDisplay) ? (
          <div onClick={(e) => props.hideBox(e)} id="box-modal-outer">
            <div id="box-modal-inner">
              <BoxContainer/>
            </div>
          </div>
        ) : null}
      </div>
      <div id="banner-link">
        <Link to="/">
        <img src="https://meat-project-seed.s3-us-west-1.amazonaws.com/banner-logo.png" alt=""/>
          <h1>Untitled Meat Project</h1> 
        </Link>
      </div>
      <div id="icons">
        <Switch>
          <Route path="/login" component={null} />
          <Route path="/signup" component={null} />
          <Route path="/checkout" component={null} />
          <Route path="/" component={GreetingContainer} />
        </Switch>
      </div>
    </header>
  );
};
export default NavBar;
