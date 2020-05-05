/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => ((loggedIn) ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={
        (props) => (!loggedIn ? <Component {...props} /> : <Redirect to="/" />)
        }
  />
);

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

// eslint-disable-next-line import/prefer-default-export
export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Auth),
);
export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Protected),
);
