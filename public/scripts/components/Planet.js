import React from 'react';


export default React.createClass({
	render: function() {
		return (
				<section>
					<a href src="http://localhost:3000/planet/ + {this.props.id}">{this.props.name}</a>
				</section>
				);
	}
});


