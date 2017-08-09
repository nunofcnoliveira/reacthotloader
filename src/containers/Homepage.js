import React, { Component } from 'react';

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

class Homepage extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="panel panel-wrapper">
					<Header />
					<Navigation />

					<div className="container-fluid">
						<div className="row">
							<h3>Welcome!</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet efficitur risus. Fusce semper lacus in risus mollis luctus. Sed congue id est eget finibus. Curabitur tempor augue vitae lectus vehicula, sed viverra dolor ornare. Fusce interdum, sapien nec pellentesque porta, arcu odio placerat justo, et gravida libero ipsum vitae tellus. Suspendisse odio ligula, pretium eget ante eget, volutpat elementum justo. Mauris porttitor felis mauris, sit amet fermentum magna congue sed. Pellentesque posuere pharetra nibh, et tempus elit. Mauris quis nisl ac neque laoreet commodo. Nam viverra lectus vel lectus aliquet, facilisis tempor nisl dictum. Suspendisse potenti. Ut pulvinar eget est placerat luctus. In vel consectetur dolor, ac dapibus lectus.</p>
							<p>Fusce facilisis in dolor vitae accumsan. Nullam non nunc ut eros tristique convallis vitae eget justo. Ut bibendum tincidunt nunc eu dignissim. Cras tincidunt magna odio, at molestie nunc auctor non. Duis in lacus efficitur, elementum turpis id, tristique metus. Sed nec nibh sem. In in justo vehicula, imperdiet ipsum a, luctus est. Cras vehicula vitae lorem quis viverra.</p>
							<p>In nec bibendum quam, id maximus nibh. Integer sit amet nulla vulputate, blandit neque eget, porttitor metus. Nulla tempor nibh et elit venenatis, eget venenatis nunc finibus. Duis quis dapibus eros. Cras vestibulum tempus elit eget tristique. Nulla facilisi. Proin hendrerit magna ac efficitur rhoncus.</p>
							<p>Aliquam lectus lorem, sagittis sed lacinia eget, scelerisque eu neque. Aliquam tempus augue in velit rutrum, et fermentum sem convallis. Nam in turpis fermentum, auctor nulla id, consequat diam. Nunc gravida mauris sit amet venenatis facilisis. Donec a ante quis massa interdum dapibus. Curabitur enim leo, ornare sed volutpat eget, consequat sed libero. Maecenas faucibus nec risus sed aliquam. Nullam id lectus lacinia, malesuada ex ac, tempus augue.</p>
							<p>Vestibulum rhoncus quis tortor in ultricies. In quis rutrum libero. Nam eget laoreet ipsum. Mauris tincidunt vehicula varius. Sed a faucibus mauris. Aenean gravida sagittis condimentum. Aliquam erat volutpat. Maecenas condimentum urna ac velit eleifend, quis dapibus velit gravida. Vivamus pulvinar eros tellus, non consectetur velit vehicula et. Etiam tempus dapibus lorem in mattis. Nunc aliquam, nisi eget lacinia pharetra, massa eros dignissim ante, in volutpat ante nisl et velit. Ut nulla ligula, iaculis sed odio id, efficitur scelerisque risus.</p>
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

export default Homepage;