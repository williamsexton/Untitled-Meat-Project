import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    if (props.currentUser !== undefined){
        return (
            <div>
                <h1> wow you're logged in {props.currentUser.email}</h1>
                <button onClick={props.logout}>Log Out</button>
            </div>
        )
    }else{
        return(
            <div>
                <Link className="auth-link" id="signup-link" to="/signup">
                    Sign Up
                </Link>

                <Link className="auth-link" id="login-link" to="/login">
                    Login
                </Link>

                <Link className="auth-link" id="login-link" to="/">
                    Home
                </Link>
            </div>
        )
    }
}
export default Greeting;