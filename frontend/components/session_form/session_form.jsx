import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            email: "",
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    handleInput(type) {
        return (e) => (
            this.setState({ [type]: e.target.value })
        )
    }

    render(){
        return (
            <div id="auth-form">
                <h1 id="auth-title">{this.props.formType}</h1>
                <form id="auth-input" onSubmit={e => this.handleSubmit(e)}>
                    <label> Email Address:
            <br />
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('email')} />
                    </label>
                    
            <br />

                    <label> Password:
            <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>
                    <br />
                    <button>Click me!</button>
                </form>
                <ul>
                    {this.props.errors.map((error, idx) => <li id="error-item" key={idx}>{error}</li>)}
                </ul>
            </div>
        )
    }
}

export default SessionForm