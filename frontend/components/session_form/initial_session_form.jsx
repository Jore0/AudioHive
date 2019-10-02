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
                    return <li key={i}>{error}</li>
                })}
            </ul>
        )
    }

    render(){
        return (
        <div className="login-form-container">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update("email")} />
                </label>
                <input type="submit" value="continue" />
            </form>

        </div>)
    }
}

export default InitialSessionForm