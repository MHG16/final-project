import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<main>
				{/*<Navigation />*/}
				{this.props.children}
			</main>
		);
	}
});