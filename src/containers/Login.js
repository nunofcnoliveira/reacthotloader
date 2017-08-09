import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../assets/css/login.css';
import {authentication} from './AppRouter';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'nuno@oliveira.com',
			password: 'qwerty',
			redirectToReferrer: false,
			loginData: undefined
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.target.classList.add('active');

		this.setState({
			[event.target.name]: event.target.value
		});

		this.showInputError(event.target.name);
	}

	handleSubmit(event) {
		event.preventDefault();
		// console.log('component state', JSON.stringify(this.state));

		if (this.showFormErrors()) {
			fetch('./src/usrData.php', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					action: "validateLogin",
					username: this.state.username,
					password: this.state.password
				})
			}).then(function(response) {
				return response.json()
			}).then(function(json) {
				console.log('Parsing json', json);

				if (json.success) {
					authentication.authenticate(() => {
						this.setState({ redirectToReferrer: true })
					})
					console.log('Authentication successful, submit and re-direct to protected area.');
					console.log('usrId', json.success[0].usrId);
					console.log('usrRole', json.success[0].usrRole);
				} else {
					$(document).ready(function(){
						$('#messageBox').text("Your credentials seem to be incorrect, please try again.");
						$('#messageBox').fadeIn('slow', function(){
							$('#messageBox').delay(5000).fadeOut(); 
						});
					});
					console.log("Invalid credentials, try again.");
				}
			}.bind(this)).catch(function(ex) {
				console.log('Parsing failed', ex)
			})
		}
	}

	showFormErrors() {
		const inputs = document.querySelectorAll('input');
		let isFormValid = true;

		inputs.forEach(input => {
			input.classList.add('active');

			const isInputValid = this.showInputError(input.name);

			if (!isInputValid) {
				isFormValid = false;
			}
		});

		return isFormValid;
	}
  
	showInputError(refName) {
		const validity = this.refs[refName].validity;
		const label = document.getElementById(`${refName}Label`).textContent;
		const error = document.getElementById(`${refName}Error`);
		const isPassword = refName.indexOf('password') !== -1;

		if (!validity.valid) {
			if (validity.valueMissing) {
				error.textContent = `${label} is a required field`; 
			} else if (validity.typeMismatch) {
				error.textContent = `${label} should be a valid email address`; 
			} else if (isPassword && validity.patternMismatch) {
				error.textContent = `${label} should be longer than 4 chars`; 
			}

			return false;
		}

		error.textContent = '';
		return true;
	}

	componentDidMount() {
		this.refs.username.focus();
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/homepage' } }
		const { redirectToReferrer } = this.state

		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-login">
							<div className="panel-heading">
								<div className="row">
									<div className="col-sm-12">
										<h3 className="active">CleverTi - Login</h3>
									</div>
								</div>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-lg-12">
										<form noValidate>
											<div className="form-group">
												<label id="usernameLabel">Username</label>
												<input type="email" name="username" ref="username" className="form-control" value={ this.state.username } onChange={ this.handleChange } required />
												<div className="error" id="usernameError" />
											</div>
											<div className="form-group">
												<label id="passwordLabel">Password</label>
												<input type="password" name="password" ref="password" className="form-control" value={ this.state.password }  onChange={ this.handleChange } pattern=".{5,}" required />
												<div className="error" id="passwordError" />
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-sm-12">
														<button className="form-control btn btn-login" onClick={this.handleSubmit}>Login</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="messageBox">Placeholder text.</div>
			</div>
		);
	}
}

export default Login;
