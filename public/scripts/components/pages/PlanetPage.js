import React from 'react';
import planetdata from './PlanetData';
import blog from './blog.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>This is my Planet Page</h1>
				<planetdata />
				<blog />
			</section>
		);
	}
});






