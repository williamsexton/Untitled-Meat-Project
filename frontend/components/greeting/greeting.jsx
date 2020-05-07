/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleShow() {
    this.props.showSearch();
    document.getElementById("app").className = "hidden"
  }

  handleHide() {
    // window.setTimeout(() => this.props.hideSearch(), 650);
    this.props.hideSearch();
    document.getElementById("app").className="shown"
  }

  handleChange(e) {
    this.setState({ search: e.currentTarget.value });
  }

  handleSearch(e) {
    e.preventDefault();
    if (this.state.search === '') {
      this.props.history.push('/search');
    } else {
      this.props.searchProducts(this.state.search);
      const qMan = queryString.stringify(this.state.search);
      this.props.history.push(`/search?query=${qMan}`);
      this.setState({ search: '' })
    }
  }

  render() {
    const loginButton = <Link className="auth-link" id="login-link" to="/login">Sign In</Link>;
    const orders = <Link className="auth-link" id="order-link" to="/orders">Your Orders</Link>;
    const logoutButton = <button type="submit" className="auth-link" onClick={this.props.logout}>Log Out</button>;
    const toggleShow = () => ((this.props.searchDisplay) ? this.handleHide() : this.handleShow())
    return (
      <div>
        <div id="navbar-options">
          <div className="auth-link-div">
            <span id="gear-span"><img id="icon" src="https://meat-project-seed.s3-us-west-1.amazonaws.com/icon-user.png" alt="" /></span>
            {(this.props.currentUser !== undefined) ? logoutButton : loginButton}
            {(this.props.currentUser !== undefined) ? orders : null}
          </div>
          <div onClick={() => this.props.showBox()} className="box-link-div">
            <span id="gear-span"><img id="icon" src="https://meat-project-seed.s3-us-west-1.amazonaws.com/icon-box.png" alt="" /></span>
          </div>
          <div onClick={() => toggleShow()} className="box-link-div">
            <span id="gear-span"><img id="icon" src="https://meat-project-seed.s3-us-west-1.amazonaws.com/icon-search.png" alt=""/></span>
          </div>
        </div>
        <form className={(!(this.props.searchDisplay)) ? 'shown' : 'hidden'} onSubmit={(e)=> this.handleSearch(e)} id="searchbar">
          <button type="submit">
            <img
              id="search-icon"
              src="https://meat-project-seed.s3-us-west-1.amazonaws.com/icon-search-white.png"
              alt=""
            />
          </button>
            <div id="neg"/>
          <input
            type="text"
            value={this.state.search}
            onChange={(e)=> this.handleChange(e)}
            placeholder="Search"
          />
        </form>
      </div>
    );
        }
};
export default Greeting;
