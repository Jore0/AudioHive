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
        debugger 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
    }


    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i)=>{
                   return  <li className="errors"key={i}>{error}</li>
                })}
            </ul>
        )
    }

    render(){
        let image;
        let username;
        let usernameHTML;
        let password;
        if (this.props.formType === "Create Account"){
            image = <img src={window.create} className="socialButton" />
            username = "Choose a username";
            password = "Choose a password";
            usernameHTML = <label>{username}<span className="errors">*</span>
                <input type="text" value={this.state.username} onChange={this.update("username")} />
            </label>
        }else {
            image = <img src={window.login} className="socialButton" />
            username = "Username";
            password = "Password";
        }

        return (
        <div className="login-form-container">
            {/* <button className="demo-login"onClick={() => this.props.login({ username: "jmoney", password: "password" })}>Demo Login</button> */}
            {image}
                <form className="formContent" onSubmit={this.handleSubmit}>

                <div onClick={this.props.closeModal} className="close-x">&#x2715;</div>

                <button type="button" onClick={() => this.props.openModal("initial")}> &#8672;     {this.props.userEmail}</button>
                {usernameHTML}

                <label>{password}<span className="errors">*</span>
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                </label>

                {this.renderErrors()}
                <input type="submit" value={this.props.formType} />
            </form>
            </div> 
        )
    }
}

export default withRouter(SessionForm)