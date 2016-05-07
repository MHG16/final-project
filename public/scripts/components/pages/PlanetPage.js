import React from 'react';
import Planetdata from '../PlanetData.js';
import Blog from '../Blog.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>This is my Planet Page</h1>
				<Planetdata />
				<Blog />
			</section>
		);
	}
});






