import React from 'react';
import Banner from './Banner.js';


export default React.createClass({
	render: function() {
		return (
			<main>
				<Banner />
				{this.props.children}
			</main>
		);
	}
});