import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<main>
				{this.props.children}
			</main>
		);
	}
});