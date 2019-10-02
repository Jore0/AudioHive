import React from 'react';


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "", 
            password: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field){
        return e => this.setState({[field]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
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
            <h1>{this.props.formType} or {this.props.navLink}</h1>
                {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
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

export default SessionForm