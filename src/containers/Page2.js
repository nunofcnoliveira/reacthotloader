import React, { Component } from 'react';

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

class Page2 extends Component {
	render() {
		return(
			<div className="container-fluid">
				<div className="panel panel-wrapper">
					<Header />
					<Navigation />

					<div className="container-fluid">
						<div className="row">
							Page 2!
						</div>

						<div className="row">
							<hr />
						</div>

						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Page2;