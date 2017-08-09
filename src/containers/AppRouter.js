import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	Switch,
	HashRouter,
	Redirect,
	withRouter
} from 'react-router-dom';

import Login from './Login';
import Homepage from './Homepage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import NoMatch from './NoMatch';

const authentication = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		// setTimeout(cb, 100)
		cb()
	},
	signout(cb) {
		this.isAuthenticated = false
		// setTimeout(cb, 100)
		cb()
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		authentication.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
		)
	)}/>
)

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => (
						<Redirect to="/login"/>
					)}/>
					<Route path="/login" component={Login}/>
					<Route path="/homepage" component={Homepage}/>
					<Route path="/page1" component={Page1}/>
					<Route path="/page2" component={Page2}/>
					<Route path="/page3" component={Page3}/>
					<Route path="*" component={NoMatch} />
				</Switch>
			</Router>
		);
	}
}

export {authentication};
export default AppRouter;
