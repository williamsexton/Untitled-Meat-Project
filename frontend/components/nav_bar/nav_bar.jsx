import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import BoxContainer from '../box/box_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nightmare: false };
  }

  toggleNightmare() {
    const root = document.getElementById("root");
    if (root.className === "nightmare"){
      this.setState({ nightmare: false})
      root.className = "";
    } else {
      root.className = "nightmare";
      this.setState({ nightmare: true })
    }
  }

  musicPlayer() {
    const root = document.getElementById("root");
    const { nightmare } = this.state;
    if (nightmare) {
      return (
        <audio autoPlay loop src="https://meat-project-seed.s3-us-west-1.amazonaws.com/nightmare-song.mp3" type="audio/mpeg" />
      );
    } return null;
  }

  render() {
    return (
      <header id="banner">
        <div id="dummy">
          {this.musicPlayer()}
          <button
          id="nightmare"
          onClick={() => this.toggleNightmare()}> NIGHTMARE MODE BUTTON <br/> PUSH AT YOUR OWN RISK</button> 
          {(this.props.boxDisplay) ? (
            <div onClick={(e) => this.props.hideBox(e)} id="box-modal-outer">
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
        }
};
export default NavBar;
