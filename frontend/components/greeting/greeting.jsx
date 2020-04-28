import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const loginButton = <Link className="auth-link" id="login-link" to="/login">Sign In</Link>
    const logoutButton = <button className="auth-link" onClick={props.logout}>Log Out</button>
    
        return ( 
        <div id="navbar-options"> 
            <div className="auth-link-div"> &#9881;
                {(props.currentUser !== undefined) ? logoutButton : loginButton}
            </div>
            <div className="box-link-div"> 🍱</div>
            <div className="box-link-div"> 🔍</div>
        </div>
        )
}
export default Greeting;