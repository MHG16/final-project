import React from 'react';
import Banner from './Banner.js';
import Footer from './Footer.js';


export default React.createClass({
	render: function() {
		return (
			<section className='main'>
				<Banner />
				{this.props.children}
				<Footer />
			</section>
		);
	}
});