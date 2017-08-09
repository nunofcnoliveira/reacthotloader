import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { authentication } from './AppRouter';

class Navigation extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>                        
							</button>
							<span className="navbar-brand">Vacation Management</span>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
							<ul className="nav navbar-nav">
								<li className="active"><Link to="/homepage" replace>Home</Link></li>
								<li><Link to="/page1" replace>Page 1</Link></li>
								<li><Link to="/page2" replace>Page 2</Link></li>
								<li><Link to="/page3" replace>Page 3</Link></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a href="#">
										<span className="glyphicon glyphicon-log-out" onClick={() => { authentication.signout(() => this.props.history.push('/')) }}>
											<span className="bntLogout"> Logout</span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Navigation);
