import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import AppRouter from './containers/AppRouter'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('container')
	)
}

render(AppRouter)

if (module.hot) {
	module.hot.accept('./containers/AppRouter', () => { render(AppRouter) })
}
