import React from 'react';
import {Link} from 'react-router';




//want to use params here so I can pass the planet id to the Planet Page   
export default React.createClass({
	render: function() {
		let style = {
			position: 'absolute',
			top: '20%',
			left: '20%'
		};
		return (
				<section style={style}>
					<Link to={`/planet/${this.props.id}/planetpage`}>{this.props.name}</Link>
				</section>
				);
	}

});




