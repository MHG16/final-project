import React from 'react';
import Banner from './Banner.js';
import Footer from './Footer.js';


export default React.createClass({
	render: function() {
		return (
			<main>
				<Banner />
				{this.props.children}
				<Footer />
			</main>
		);
	}
});