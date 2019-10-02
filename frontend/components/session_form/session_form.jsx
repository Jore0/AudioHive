import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "", 
            password: "",
            email: this.props.userEmail
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
    }


    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i)=>{
                   return  <li key={i}>{error}</li>
                })}
            </ul>
        )
    }

    render(){
        
        return (
        <div className="login-form-container">
            <button className="demo-login"onClick={() => this.props.login({ username: "jmoney", password: "password" })}>Demo Login</button>

            <h1>{this.props.formType} or {this.props.otherform}</h1>
                {this.renderErrors()}

            <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">X</div>
                <label>Email:
                    <input type="text" value={this.props.userEmail} onChange={this.update("email")}/>
                </label>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.update("username")}/>
                </label>
                <label>Password:
                    <input type="text" value={this.state.password} onChange={this.update("password")}/>
                </label>
                <input type="submit" value={this.props.formType} />
            </form>

        </div>
        )
    }
}

export default withRouter(SessionForm)