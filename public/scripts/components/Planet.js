import React from 'react';
import {Link} from 'react-router';




//want to use params here so I can pass the planet id to the Planet Page   
export default React.createClass({
	render: function() {
		return (
				<section>
					<Link to={`/planet/${this.props.id}/planetpage`}>{this.props.name}</Link>
				</section>
				);
	}

});




