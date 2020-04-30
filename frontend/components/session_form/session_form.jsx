import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    const user = { email, password };
    this.props.processForm(user);
  }

  handleInput(type) {
    return (e) => (
      this.setState({ [type]: e.target.value })
    );
  }

  demoLogin() {
    this.setState({
      email: 'will@meat.gov',
      password: 'governmeat',
    });
  }

  render() {
    return (
      <div id="auth-form">
        <h1 id="auth-title">{ this.props.formType }</h1>
        <form id="auth-input" onSubmit={(e) => this.handleSubmit(e)}>
          <br />
          <input
            placeholder="Email address"
            type="text"
            value={ this.state.email }
            onChange={this.handleInput('email')}
          />

          <br />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
         

          {
            (this.props.formType === 'Sign in to Untitled Meat Project')
              ? (
                <div>
                <p id="demo-login" onClick={() => this.demoLogin()}>Demo Login</p>
                  <button id="auth-button" type="submit">SIGN IN WITH EMAIL</button>
                  <br />
                  <div id="auth-switch">
                    <div>Don't have an account?  </div>
                    <Link className="auth-link" id="login-link" to="/signup">
                      Create Your Account
                    </Link>
                  </div>
                </div>
              )
              : (
                <div>
                  <button id="auth-button" className="signup" type="submit">SIGN UP</button>
                  <br />
                  <div id="auth-switch">
                    <div>Already have an account?</div>
                    <Link className="auth-link" id="login-link" to="/login">
                      Sign in.
                    </Link>
                  </div>
                </div>
              )
        }
        </form>
        <ul>
          {this.props.errors.map((error, idx) => <li id="error-item" key={idx}>{error}</li>)}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
