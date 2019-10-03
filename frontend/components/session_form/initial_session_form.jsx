import React from 'react';

class InitialSessionForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: "" 
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const email = Object.assign({}, this.state);
        this.props.processForm(email)
        ////make change here
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    return <li className="errors" key={i}>{error}</li>
                })}
            </ul>
        ) 
    }

    render(){
        return (
        <div className="login-form-container">
        
            <div onClick={this.props.closeModal} className="close-x">&#x2715;</div>
            <div className="formContent">
                    <a href="" ><img src={window.soundcloud} className="socialButton"/></a>
                    
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder=" Your email address *" onChange={this.update("email")} />
                    </label>
                    <ul className="errors">{this.renderErrors()}</ul>
                    <input type="submit" value="Continue" />
                </form>
                <div className="terms">

                </div>
            </div>
        </div>
        )
    }
}

export default InitialSessionForm